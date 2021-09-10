import { createStore } from 'redux'
import { productReducer } from './ProductReducer';

export const productStore = createStore(productReducer);