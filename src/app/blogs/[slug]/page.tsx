'use client'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr';

const ViewDetailBlog = ({ params }: { params: { slug: string } }) => {
    const fetcher:Fetcher<IBlog,string> = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.slug}`,
        fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })
    if (isLoading) {
        return <div>loading. . .. </div>
    }
    return (
        <div>
            <div className='my-3'>
                <Link href={"/blogs"}> Go back</Link>
            </div>
            <Card className="text-center">
                <Card.Header> Title:{data?.title} </Card.Header>
                <Card.Body>
                    <Card.Text>
                       {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data?.author} </Card.Footer>
            </Card>
        </div>

    );
}
export default ViewDetailBlog;