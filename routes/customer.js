const { Router } = require('express');

const {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
  deleteCustomerById,
} = require('../controllers/customer');

const customerRouter = Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      Customer:
 *        type: object
 *        properties:
 *          firstName:
 *            type: string
 *          lastName:
 *            type: string
 *          email:
 *            type: string
 *          phoneNumber:
 *            type: string
 *          address:
 *            type: string
 *          password:
 *            type: string
 */

/**
 * @swagger
 * /v1/customers:
 *  get:
 *   summary: Get all customers
 *   tags:
 *      - Customers
 *   description: Customers
 *   content:
 *      application/json:
 *   responses:
 *    '200':
 *      description: Get all customers
 */
customerRouter.get('/', getAllCustomers);

/**
 * @swagger
 *  /v1/customers/{id}:
 *    get:
 *      summary: Show a customer
 *      tags: [Customers]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Show success
 */
customerRouter.get('/:id', getCustomerById);

/**
 * @swagger
 *  /v1/customers:
 *    post:
 *      summary: Create a new customer
 *      tags: [Customers]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Customer'
 *      responses:
 *        "200":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Customer'
 */
customerRouter.post('/', createNewCustomer);

/**
 * @swagger
 *  /v1/customers/{id}:
 *    patch:
 *      summary: Update a customer
 *      tags: [Customers]
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
 *          description: A customer schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Customer'
 */
// customerRouter.put('/:id', updateCustomerById);
customerRouter.patch('/:id', updateCustomerById);

/**
 * @swagger
 *  /v1/customers/{id}:
 *    delete:
 *      summary: Delete a customer
 *      tags: [Customers]
 *      parameters:
 *        - in: path
 *          name: id
 *      responses:
 *        "200":
 *          description: Delete success
 */
customerRouter.delete('/:id', deleteCustomerById);

module.exports = customerRouter;
