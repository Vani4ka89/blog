'use client';

import {FC} from 'react';
import {IPost} from "@/types/post.interface";
import {Button, Card, Grid, Text} from '@nextui-org/react';
import {useRouter} from "next/navigation";

interface IProps {
    post: IPost;
}

const Post: FC<IProps> = ({post}) => {
    const {id, title, body} = post;
    const router = useRouter();

    return (
        <Grid xs={12} sm={6}>
            <Card>
                <Card.Header>
                    <Text h3>{title}</Text>
                </Card.Header>
                <Card.Body>
                    <Text>{body.substring(0, 50)}...</Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={() => router.push(`/post/${id}`)}>
                        Show More
                    </Button>
                </Card.Footer>
            </Card>
        </Grid>
    );
};

export {Post};