import { getRandomID } from "../utils.mjs";
import {getDB} from "../db.mjs"
import { ObjectID } from "bson";

let Products = [
  
];

async function getProductsColletion() {
  const db = await getDB();
  return db.collection("Products"); 
}

export async function getAllProducts(filterObj) {
   
    const productsColection = await getProductsColletion();

    const filter ={};

    if (filterObj.title) {
      filter.title = new RegExp(filterObj.title, "i");
    }

    if (filterObj.filter_gt || filterObj.filter_lt) {
      filter.price = {};
      if (filterObj.filter_gt) {
        filter.price.$gt = parseInt(filter_gt)
      }
      if (filterObj.filter_lt) {
        filter.price.$lt = parseInt(filter_lt)
      }
    }

    // let result = Products;

    // if (filterObj.title) {
    //   // להתעלם מאותיות קטנות וגודולת
    //   const reg = new RegExp(filterObj.title, "i");
    //   result = result.filter(product => reg.test(product.title));
    // }

    // if(filterObj.price_lt) {
    //   result = result.filter(product => product.price < filterObj.price_lt)
    // }

    // if(filterObj.price_gt) {
    //   result = result.filter(product => product.price < filterObj.price_gt)
    // }

    // return result;
    return productsColection.find({}).toArray();
}

export async function getProductById(id) {
  const products = await getProductsColletion();
  return products.findOne({_id: ObjectID(id)})
}

export async function addProduct(newProduct) {
  const products = await getProductsColletion();
  return products.insertOne(newProduct);
}

export async function removeProduct(id) {
  const products = await getProductsColletion();
  return products.deleteOne({_id: ObjectID(id)});
}

export async function editProduct(id, newProduct) {
  const products = await getProductsColletion();
  return products.updateOne({_id: ObjectID(id)} , { $set: newProduct })
}

export async function getProductBySellerId(sellerId) {
  const products = await getProductsColletion();
  return products.find({
    sellerId
  }).toArray();
}