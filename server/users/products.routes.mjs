import {Router} from 'express';
import { ReviewsRouter } from '../reviews/reviews.routes.mjs';
import { addProduct, editProduct, getAllProducts, getProductById, removeProduct } from './products.data.mjs';

export const ProductsRouter = Router();

// READ - Get all products
ProductsRouter.get('/', async (req, res) => {
    res.send(await getAllProducts(req.query));
});

// READ - Get product by ID
ProductsRouter.get('/:id', async (req, res) => {
    res.send(await getProductById(req.params.id));
});
  
// CREATE - Create a new product
ProductsRouter.post('/', async (req, res) => {
    res.send(await addProduct(req.body));
});

ProductsRouter.use('/:id/reviews', ReviewsRouter);
  
  // UPDATE - Update product by ID
ProductsRouter.put('/:id', async (req, res) => {
    res.send(await editProduct(req.params.id, req.body));
});
  
// DELETE - Delete item by ID
ProductsRouter.delete('/:id', async (req, res) => {
    await removeProduct(req.params.id)
    res.send('ok');
});