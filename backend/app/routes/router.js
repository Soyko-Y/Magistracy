// routes/lotRoutes.js
import express from 'express';
import controller from '../controllers/controller';

const router = express.Router();

router.get('/api/helloWorld', controller.helloWorld);
router.post('/api/user/login', controller.loginUser);
router.post('/api/user/create', controller.createUser);
router.post('/api/post/createPost', controller.createPost);
router.post('/api/post/updatePost', controller.updatePost);
router.get('/api/post/getAllPosts', controller.getAllPosts);
router.post('/api/post/deletePost', controller.deletePost);

export default router;