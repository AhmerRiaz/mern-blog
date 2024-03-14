import Comment from "../model/comment.model.js";
import { errorHandler } from "../utils/error.js";

export const createComment = async (req, res, next) => {
    try {
        const {content, postId, userId} = req.body;
        if(userId !== req.user._id) {
            return next(errorHandler(403, "You are not allowed to create a comment"));
        }
        const newComment = new Comment({
            content,
            postId,
            userId
        })
        await newComment.save();
        res.status(200).json(newComment);
    } catch (error) {
        next(error);
    }
}

export const getPostComments = async (req, res, next) => {
    try {
        const comments = await Comment.find({postId: req.params.postId}).sort({
            createdAt: -1
        });
        res.status(200).json(comments);
        
    } catch (error) {
        next(error);
    }
}


export const likeComment = async (req, res, next) => {
    console.log(req.user._id)
    try {
        const comment = await Comment.findById(req.params.commentId);
        if(!comment) {
            return next(errorHandler(404, 'Comment Not found'))
        }

        const userIndex = comment.likes.indexOf(req.user._id)
        if(userIndex === -1) {
            comment.numberOfLikes += 1
            comment.likes.push(req.user._id)
        } else {
            comment.numberOfLikes -= 1
            comment.likes.splice(userIndex, 1);
        }

        await comment.save();
        res.status(200).json(comment)

    } catch (error) {
        next(error)
    }
}