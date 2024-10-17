"use client"

import {DataStore } from "notarealdb";
const store = new DataStore('./data');

const products = store.collection("products");
const carts = store.collection("carts");
const users = store.collection("users");

export{
    products,
    carts,
    users
} 





