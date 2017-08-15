DROP DATABASE IF EXISTS book_store;

CREATE DATABASE book_store;

\c book_store;

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author VARCHAR(255),
  genre VARCHAR(255),
  pages VARCHAR(255),
  publisher VARCHAR(255)
);
