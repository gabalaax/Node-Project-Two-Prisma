import express, { json } from "express";

const server = express();

import authorsRouter from "./authors.js";
import booksRouter from "./books.js";
import bookStoreRouter from "./bookstores.js";

server.use(json());
server.use("/api/author", authorsRouter);
server.use("/api/book", booksRouter);
server.use("/api/bookstore", bookStoreRouter);

export default server;