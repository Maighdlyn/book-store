\c book_store
COPY books (title, author, genre, pages, publisher) FROM '/Users/emmabrown/Desktop/LGProjects/phase-3/book-store/src/db/books.csv' DELIMITER ',' CSV HEADER;
