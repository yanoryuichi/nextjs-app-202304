const serverPostsUrl = 'http://server:8000/posts';

export default function Blog({ posts }) {
    return (
        <ul>
            {posts.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}

export async function getStaticProps() {
    const res = await fetch(serverPostsUrl);
    const json = await res.json();
    const posts = json.posts ? json.posts : [];

    return {
        props: {
            posts,
        },
    }
}