const { Router } = require('express');

const {
  createLikePost,
  getLikePostById,
  deleteLikePostById,
  getAllLikePosts,
} = require('../controllers/likePost');

const likePostRouter = Router();
/**
 * @swagger
 *  components:
 *    schemas:
 *      Like-Post:
 *        type: object
 *        properties:
 *          Post:
 *            type: string
 *          Customer:
 *            type: string
 *          isLiked:
 *            type: boolean
 */

/**
 * @swagger
 *  /v1/like-posts/{id}:
 *    get:
 *      summary: Show a liked post
 *      tags: [Like-Posts]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Show success
 */
likePostRouter.get('/:id', getLikePostById);

/**
 * @swagger
 * /v1/like-posts:
 *  get:
 *   summary: Get all liked posts
 *   tags:
 *      - Like-Posts
 *   description: Like-Posts
 *   content:
 *      application/json:
 *   responses:
 *    '200':
 *      description: Get all liked posts
 */
likePostRouter.get('/', getAllLikePosts);

/**
 * @swagger
 *  /v1/like-posts:
 *    post:
 *      summary: like a post
 *      tags: [Like-Posts]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Like-Post'
 *      responses:
 *        "200":
 *          description: Like a post success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Like-Post'
 */
likePostRouter.post('/', createLikePost);

/**
 * @swagger
 *  /v1/like-posts/{id}:
 *    delete:
 *      summary: unlike a post
 *      tags: [Like-Posts]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: unlike a post success
 */
likePostRouter.delete('/:id', deleteLikePostById);

likePostRouter.post('/', createLikePost);
likePostRouter.get('/', getAllLikePosts);
likePostRouter.get('/:id', getLikePostById);
likePostRouter.delete('/:id', deleteLikePostById);

module.exports = likePostRouter;
