import mongoose from "mongoose";

mongoose.connect("mongodb+srv://alberto:123@biblioteca.wwg9r3r.mongodb.net/api-biblioteca")

let db = mongoose.connection;

export default db;