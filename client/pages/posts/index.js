import Link from 'next/link'

const serverPostsUrl = 'http://server:8000/posts';

export default function PostsPage({ posts }) {
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
            <div><Link href="/">Home</Link></div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('PostsPage: getStaticProps');
    const res = await fetch(serverPostsUrl);
    const json = await res.json();
    const posts = json.posts ? json.posts : [];

    return {
        props: {
            posts,
        },
    }
}
