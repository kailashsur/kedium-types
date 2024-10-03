import { Schema, Document } from 'mongoose';
import { JwtPayload } from 'jsonwebtoken';
export interface BlogType extends Document {
    _id: Schema.Types.ObjectId;
    slug: string;
    title: string;
    thumbnail: string;
    description: string;
    content: string;
    tags: string[];
    category: string;
    author: Schema.Types.ObjectId;
    activity: {
        likes: number;
        comments: number;
        views: number;
    };
    draft: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface ActivityType extends Document {
    _id: Schema.Types.ObjectId;
    blog_id: Schema.Types.ObjectId;
    slug: string;
    likes: Schema.Types.ObjectId[];
    comments: Schema.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
}
export interface CommentsType extends Document {
    _id: Schema.Types.ObjectId;
    blog_id: Schema.Types.ObjectId;
    user_id: Schema.Types.ObjectId;
    comment: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface CustomJwtPayload extends JwtPayload {
    _id: string;
    username: string;
    fullname: string;
    email: string;
    role: string;
    profile_img: string;
    profile_color: string;
}
