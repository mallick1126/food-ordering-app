/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
const MongoClient = require("mongodb").MongoClient();
const _ = require("lodash");

async function main() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const productCollection = client.db("food-fiesta").collection("products");
    const categoryCollection = client
      .db("food-fiesta")
      .collection("categories");

    productCollection.drop();
    let categories = ["breakfast", "lunch", "dinner", "drinks"].map(
      (category) => {
        return { name: category };
      }
    );
    await categoryCollection.insert(categories);
    let imageUrls = [
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png",
    ];

    let products = [];
    for (let i = 0; i < 10; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.description(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageurl: _.sample(imageUrls),
      };
      products.push(newProduct);
    }
    await productCollection.insertMany(products);
  } catch (error) {
    console.log(error.message);
  } finally {
    await client.close();
  }
}

main();
