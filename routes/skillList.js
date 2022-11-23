const { Router } = require('express');
const {
  createNewSkillList,
  getAllSkillLists,
  getSkillListById,
  deleteSkillListById,
  updateSkillListById,
} = require('../controllers/skillList');

const skillListRouter = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      SkillList:
 *        type: object
 *        properties:
 *          category:
 *            type: string
 *          title:
 *            type: string
 *          description:
 *            type: string
 *          price:
 *            type: number
 *          distance:
 *            type: number
 *          location:
 *            type: string
 *          availability:
 *            type: string
 */

/**
 * @swagger
 *  /v1/skill-lists:
 *    post:
 *      summary: Create a new SkillList
 *      tags: [SkillLists]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SkillList'
 *      responses:
 *        "200":
 *          description: Post new skillList success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/SkillList'
 */
skillListRouter.post('/', createNewSkillList);

/**
 * @swagger
 * /v1/skill-lists:
 *  get:
 *   summary: Get all SkillLists
 *   tags:
 *      - SkillLists
 *   description: SkillLists
 *   content:
 *      application/json:
 *   responses:
 *    '200':
 *      description: Get all SkillLists
 */
skillListRouter.get('/', getAllSkillLists);

/**
 * @swagger
 *  /v1/skill-lists/{id}:
 *    get:
 *      summary: Show a SkillList
 *      tags: [SkillLists]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Show SkillList success
 */
skillListRouter.get('/:id', getSkillListById);

/**
 * @swagger
 *  /v1/skill-lists/{id}:
 *    delete:
 *      summary: Delete a SkillList
 *      tags: [SkillLists]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Delete SkillList success
 */
skillListRouter.delete('/:id', deleteSkillListById);

/**
 * @swagger
 *  /v1/skill-lists/{id}:
 *    put:
 *      summary: Update a SkillList
 *      tags: [SkillLists]
 *      parameters:
 *        - in: path
 *          name: id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/SkillList'
 *      responses:
 *        "200":
 *          description: Update SkillList success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/SkillList'
 */
skillListRouter.put('/:id', updateSkillListById);

module.exports = skillListRouter;
