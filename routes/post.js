const { Router } = require('express');

const {
  createNewPost,
  getPostById,
  updatePostById,
  getAllPosts,
  deletePostById,
} = require('../controllers/post');
const authGuard = require('../middleware/authGuard');

const postRouter = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Post:
 *        type: object
 *        properties:
 *          authorId:
 *            type: string
 *          title:
 *            type: string
 *          onDate:
 *            type: string
 *          location:
 *            type: string
 *          details:
 *            type: string
 *          budget:
 *            type: string
 *          isActive:
 *            type: string
 *          tradieId:
 *            type: string
 */

/**
 * @swagger
 *  /v1/posts/{id}:
 *    get:
 *      summary: Show a post
 *      tags: [Posts]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Show success
 */
postRouter.get('/:id', getPostById);
/**
 * @swagger
 * /v1/posts:
 *  get:
 *   summary: Get all posts
 *   tags:
 *      - Posts
 *   description: Posts
 *   content:
 *      application/json:
 *   responses:
 *    '200':
 *      description: Get all posts
 */
postRouter.get('/', getAllPosts);
/**
 * @swagger
 *  /v1/posts:
 *    post:
 *      summary: Create a new post
 *      tags: [Posts]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      responses:
 *        "200":
 *          description: A post schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Post'
 */
postRouter.post('/', authGuard, createNewPost);
/**
 * @swagger
 *  /v1/posts/{id}:
 *    patch:
 *      summary: Update a post
 *      tags: [Posts]
 *      parameters:
 *        - in: path
 *          name: id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Customer'
 *      responses:
 *        "200":
 *          description: A post schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Post'
 */
postRouter.patch('/:id', authGuard, updatePostById);
postRouter.delete('/:id', authGuard, deletePostById);
module.exports = postRouter;
