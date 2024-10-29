'use client';

import {FC, useEffect, useState} from 'react';
import {IPost} from "@/types/post.interface";
import {postsService} from "@/services/posts.service";
import {Card, Container, Text} from "@nextui-org/react";
import {useParams} from "next/navigation";

const PostDetail: FC = () => {
    const [post, setPost] = useState<IPost>(null);
    const {postId} = useParams<{ postId: string }>();

    useEffect(() => {
        const getPost = async () => {
            if (postId) {
                try {
                    const {data} = await postsService.getById(postId);
                    setPost(data);
                } catch (err) {
                    console.error('Error getting post');
                }
            }
        };
        void getPost();
    }, [postId]);

    if (!post) {
        return <div>Loading...</div>
    }
    const {title, body} = post;

    return (
        <Container>
            <Card>
                <Card.Header>
                    <Text h3>{title}</Text>
                </Card.Header>
                <Card.Body>
                    <Text>{body}</Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export {PostDetail};