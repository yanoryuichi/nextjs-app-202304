const express = require('express');
const app = express();
const port = 8000;

const posts = [{ id: 1, title: 'First Post' }, { id: 2, title: 'Second Post' }];

app.get('/', (req, res) => {
    res.send('Server');
});

app.get('/posts', (req, res) => {
    res.json({ posts: posts });
});

app.get('/posts/:postId', (req, res) => {
    const post = posts.find(post => post.id === Number(req.params.postId)) || null;
    const _post = post ? { ...post, date: new Date().toISOString() } : null;
    res.json({ post: _post });
});

app.listen(port, () => {
    console.log(`Server app listening on port ${port}`);
});
