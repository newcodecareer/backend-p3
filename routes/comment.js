const { Router } = require('express');
const {
  createNewComment,
  deleteCommentById,
  getCommentById,
  getAllComments,
  updateCommentById,
} = require('../controllers/comment');
const authGuard = require('../middleware/authGuard');

const commentRouter = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Comment:
 *        type: object
 *        properties:
 *          text:
 *            type: string
 *          date:
 *            type: string
 *          post:
 *            type: string
 *          commentId:
 *            type: string
 *          isAssigned:
 *            type: string
 *
 */

/**
 * @swagger
 *  /v1/comments:
 *    post:
 *      summary: Create a new comment
 *      tags: [Comments]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *      responses:
 *        "200":
 *          description: Post new comment success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Comment'
 */
commentRouter.post('/', authGuard, createNewComment);

/**
 * @swagger
 *  /v1/comments/{id}:
 *    delete:
 *      summary: Delete a comment
 *      tags: [Comments]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Delete success
 */
commentRouter.delete('/:id', authGuard, deleteCommentById);

/**
 * @swagger
 *  /v1/comments/{id}:
 *    get:
 *      summary: Show a comment
 *      tags: [Comments]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Show success
 */
commentRouter.get('/:id', getCommentById);

/**
 * @swagger
 * /v1/comments:
 *  get:
 *   summary: Get all comments
 *   tags:
 *      - Comments
 *   description: Comments
 *   content:
 *      application/json:
 *   responses:
 *    '200':
 *      description: Get all comments
 */
commentRouter.get('/', getAllComments);

/**
 * @swagger
 *  /v1/comments/{id}:
 *    put:
 *      summary: Update a comment
 *      tags: [Comments]
 *      parameters:
 *        - in: path
 *          name: id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Comment'
 *      responses:
 *        "200":
 *          description: Update comment success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Comment'
 */

commentRouter.put('/:id', authGuard, updateCommentById);

module.exports = commentRouter;
