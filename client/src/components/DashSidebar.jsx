import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Sidebar, SidebarItemGroup } from 'flowbite-react'
import { HiUser, HiArrowSmRight } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { userSignOutStart, userSignOutSuccess, userSignOutFailure } from '../redux/user/userSlice'



export default function DashSidebar() {
  const dispatch = useDispatch()
    const location = useLocation()
    const [tab, setTab] = useState('');
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const tabFromUrl = urlParams.get('tab');
        if (tabFromUrl) {
          setTab(tabFromUrl);
        }
      }, [location.search]);

      const handleSignOut = async () => {
        try {
         dispatch(userSignOutStart());
         const res = await fetch('/api/user/signout', {
           method: 'POST',
         })
         const data = await res.json();
         if(!res.ok) {
           dispatch(userSignOutFailure(data.message));
         } else {
           dispatch(userSignOutSuccess(data));
         }
         
        } catch (error) {
         dispatch(userSignOutFailure(error.message));
        }
      }

    return (
     
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>
            <Link to={'/dashboard?tab=profile'}>
            <Sidebar.Item active={tab === 'profile'} 
            icon={HiUser}
            label={'User'}
            labelColor='dark'
            as='div'
            >
            Profile
            </Sidebar.Item>
            
            </Link>
            <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignOut}
          >
            Sign Out
          </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>

    </Sidebar>
    
  )
}
