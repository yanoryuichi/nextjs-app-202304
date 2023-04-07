import Link from 'next/link'

function HomePage() {
    return (
    <div>
        <h1>Home</h1>
        <ul><li><Link href="/posts">posts</Link></li></ul>
    </div>
    );
}

export default HomePage;