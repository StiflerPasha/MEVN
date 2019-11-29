const express = require('express');
const mongodb = require('mongodb');

require('dotenv').config();
const uri = process.env.DB_CONNECT;

const router = express.Router();

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  
  return client.db('mevn').collection('posts');
}

// Get Posts
router.get('/', async (req, res) => {
  const posts = await loadPostsCollection();
  res.send(await posts.find({}).toArray());
});

// Add Posts
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  }, () => console.log('Add Post'));
  res.status(201).send();
});

// Delete Posts
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({
    _id: new mongodb.ObjectID(req.params.id)
  }, () => console.log('Delete Post'));
  res.status(200).send();
});


module.exports = router;
