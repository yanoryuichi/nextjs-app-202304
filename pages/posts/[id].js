import Link from 'next/link'

const serverPostsUrl = 'http://server:8000/posts/';

export default function PostPage({ post }) {
    return (
        <div>
            <h1>Post</h1>
            <dl>
                <dt>id</dt>
                <dd>{post.id}</dd>
                <dt>title</dt>
                <dd>{post.title}</dd>
                <dt>date</dt>
                <dd>{post.date}</dd>
            </dl>
            <div><Link href="/">Home</Link></div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    console.log('PostPage: getStaticProps');
    const res = await fetch(serverPostsUrl + params.id);
    const json = await res.json();
    const post = json.post || null;

    return {
        props: {
            post,
        }
    };
}

export async function getStaticPaths() {
    const res = await fetch(serverPostsUrl);
    const json = await res.json();
    const posts = json.posts ? json.posts : [];
    const paths = posts.map((post) => ({
        params: { id: String(post.id) },
    }))

    return { paths, fallback: false };
}
