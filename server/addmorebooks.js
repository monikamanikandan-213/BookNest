const axios = require("axios");

const books = [
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        language: "English",
        category: "Romance",
        content: "Elizabeth Bennet learns about love, family, and the importance of understanding others. Her relationship with Mr. Darcy changes as they overcome their misunderstandings."
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        language: "English",
        category: "Fantasy",
        content: "A young prince travels from planet to planet and meets different people. Through his journey, he learns about friendship, love, and the meaning of life."
    },
    {
        title: "Wings of Fire",
        author: "A. P. J. Abdul Kalam",
        language: "English",
        category: "Biography",
        content: "This book describes the life journey of A. P. J. Abdul Kalam. It explains his childhood, education, career, challenges, and dreams for India."
    }
];

async function addBooks() {
    for (const book of books) {
        try {
            const response = await axios.post(
                "https://booknest-client-zd1d.onrender.com",
                book
            );

            console.log("Book added:", response.data.title);
        } catch (error) {
            console.log("Error:", error.message);
        }
    }
}

addBooks();
