import Link from 'next/link'

const serverPostsUrl = 'http://server:8000/posts';

export default function Posts2Page({ posts }) {
    return (
        <div>
            <h1>Posts2</h1>
            <ul>
                {posts.map((post) => (
                    <li>{post.title}</li>
                ))}
            </ul>
            <div><Link href="/">Home</Link></div>
        </div>
    )
}

export async function getServerSideProps() {
    console.log('Posts2Page: getServerSideProps');
    const res = await fetch(serverPostsUrl);
    const json = await res.json();
    const posts = json.posts ? json.posts : [];

    return {
        props: {
            posts,
        },
    }
}