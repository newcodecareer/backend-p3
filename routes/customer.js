const { Router } = require('express');

const {
  createNewCustomer,
  getCustomerById,
  updateCustomerById,
  getAllCustomers,
  deleteCustomerById,
} = require('../controllers/customer');

const customerRouter = Router();

customerRouter.get('/', getAllCustomers);
customerRouter.get('/:id', getCustomerById);
customerRouter.post('/', createNewCustomer);

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
 *          description: Post new customer success
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
 *          description: Update customer success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Customer'
 */
// customerRouter.put('/:id', updateCustomerById);
customerRouter.patch('/:id', updateCustomerById);
customerRouter.delete('/:id', deleteCustomerById);

module.exports = customerRouter;
