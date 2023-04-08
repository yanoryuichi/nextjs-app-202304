import Link from 'next/link'

function HomePage() {
    return (
    <div>
        <h1>Home</h1>
        <ul><li><Link href="/posts">Posts</Link></li></ul>
        <ul><li><Link href="/posts2">Posts2</Link></li></ul>
        <ul><li><Link href="/about">About</Link></li></ul>
    </div>
    );
}

export default HomePage;