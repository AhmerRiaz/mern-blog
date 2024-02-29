import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function DashPost() {
  const {currentUser} = useSelector((state) => state.user)
  const [posts, setPosts] = useState([])
  const [showMore, setShowMore] = useState(true)
  console.log(posts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
         const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
         const data = await res.json();
        if(res.ok) {
          setPosts(data.posts);
          if(data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    if(currentUser.isAdmin){
      fetchPosts()} 
  }, [currentUser._id])

  const handleShowMore = async () => {
    const startIndex = posts.length;
    try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`);
        const data = await res.json();
        if(res.ok) {
          setPosts((prev) => [...posts, ...data.posts]);
          if(data.posts.length < 9) {
            setShowMore(false);
          }
        }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300
    dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
      {currentUser.isAdmin && posts.length > 0 ? (
        <>
        <Table hoverable className="shadow-md">
          <Table.Head>
            <Table.HeadCell>Date Updated</Table.HeadCell>
            <Table.HeadCell>Post Image</Table.HeadCell>
            <Table.HeadCell>Post title</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Delete</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit</span>
              </Table.HeadCell>
            </Table.Head>
            {posts.map((post) => (
              <Table.Body key={post._id} className='divide-y'>
                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                  <Table.Cell>{new Date(post.updatedAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <Link to={`/post/${post.slug}`}>
                        <img 
                        src={post.image} 
                        alt={post.title}
                        className='w-20 h-10 object-cover bg-gray-500' />
                      </Link>
                  </Table.Cell>
                  <Table.Cell><Link className='font-medium text-gray-900 dark:text-white' to={`/post/${post.slug}`}>{post.title}</Link></Table.Cell>
                  <Table.Cell>{post.category}</Table.Cell>
                  <Table.Cell>
                    <span className='text-red-500 font-medium hover:underline cursor-pointer'>
                      Delete
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Link to={`/update-post/${post._id}`} className='text-teal-500 hover:underline cursor-pointer'>
                      <span>
                        Edit
                      </span>
                    </Link>
                  </Table.Cell>
                  </Table.Row>
                </Table.Body>
            ))}
        </Table>
        {
          showMore && (
            <button onClick={handleShowMore} className='w-full text-teal-500 self-center text-sm py-7'>Show More</button>
          )
        }
        </>
      ): (
        <p>You have no posts</p>
      )}
    </div>
  )
}
