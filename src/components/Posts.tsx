'use client';

import {FC, useEffect, useState} from 'react';
import {Post} from "@/components/Post";
import {IPost} from "@/types/post.interface";
import {postsService} from "@/services/posts.service";
import {Card, Container, Grid, Text} from "@nextui-org/react";

const Posts: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const {data} = await postsService.getAll();
                setPosts(data);
            } catch (err) {
                console.error('Error getting posts');
            }
        };
        void getPosts();
    }, []);

    return (
        <Container>
            <Card.Header>
                <Text h2>Blog Posts</Text>
            </Card.Header>
            <Grid.Container gap={5} justify="center">
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </Grid.Container>
        </Container>
    );
};

export {Posts};
