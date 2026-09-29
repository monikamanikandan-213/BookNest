import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Library() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {

        axios
            .get("http://localhost:5000/api/books")
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.log(
                    "Error loading books:",
                    error
                );
            });

    }, []);


    const filteredBooks =
        books.filter((book) =>
            `${book.title} ${book.author} ${book.category}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );


    return (

        <div className="library-page">


            {/* HEADER */}

            <section className="library-header">

                <div>

                    <p className="library-eyebrow">
                        YOUR DIGITAL LIBRARY
                    </p>

                    <h1>
                        Explore your next read
                    </h1>

                    <p className="library-description">
                        Discover books, continue reading,
                        and build your reading journey.
                    </p>

                </div>


                <div className="library-stat">

                    <strong>
                        {books.length}
                    </strong>

                    <span>
                        Books available
                    </span>

                </div>

            </section>


            {/* SEARCH */}

            <section className="library-toolbar">

                <div className="library-search">

                    <span>
                        🔍
                    </span>

                    <input
                        type="text"
                        placeholder="Search by title, author or category..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

            </section>


            {/* BOOK SECTION */}

            <section className="library-books-section">

                <div className="section-heading">

                    <div>

                        <h2>
                            Available Books
                        </h2>

                        <p>
                            {filteredBooks.length}{" "}
                            {filteredBooks.length === 1
                                ? "book"
                                : "books"}{" "}
                            found
                        </p>

                    </div>

                </div>


                {filteredBooks.length === 0 ? (

                    <div className="library-empty">

                        <div>
                            🔎
                        </div>

                        <h3>
                            No books found
                        </h3>

                        <p>
                            Try searching with another
                            title, author or category.
                        </p>

                    </div>

                ) : (

                    <div className="book-grid">

                        {filteredBooks.map((book) => (

                            <article
                                className="book-card"
                                key={book._id}
                            >


                                {/* BOOK COVER */}

                                <div className="book-cover">

                                    <div className="cover-decoration">
                                        BOOKNEST
                                    </div>

                                    <div className="cover-title">
                                        {book.title}
                                    </div>

                                    <div className="cover-author">
                                        {book.author}
                                    </div>

                                    <div className="cover-mark">
                                        ✦
                                    </div>

                                </div>


                                {/* BOOK INFORMATION */}

                                <div className="book-info">

                                    <div className="book-category">
                                        {book.category || "General"}
                                    </div>

                                    <h3>
                                        {book.title}
                                    </h3>

                                    <p className="book-author">
                                        by {book.author}
                                    </p>


                                    <div className="book-meta">

                                        <span>
                                            {book.language}
                                        </span>

                                        <span>
                                            Available
                                        </span>

                                    </div>


                                    <Link
                                        to="/reader"
                                        state={{
                                            book: book
                                        }}
                                    >

                                        <button className="read-book-button">

                                            Read Book

                                            <span>
                                                →
                                            </span>

                                        </button>

                                    </Link>

                                </div>

                            </article>

                        ))}

                    </div>

                )}

            </section>

        </div>

    );

}

export default Library;