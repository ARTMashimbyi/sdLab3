export function getBookTitlesByYear(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.year]) {
            acc[book.year] = [];
        }
        acc[book.year].push(book.title);
        return acc;
    }, {});
}

// Test Data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 }
];

console.log(getBookTitlesByYear(books));

/*
Explanation:
1. We use the `reduce` method to iterate over the array of books.
2. We check if the year already exists as a key in the accumulator object (`acc`). If not, we initialize it with an empty array.
3. We then push the book title to the array corresponding to its publication year.
4. Finally, we return the accumulator object containing the years as keys and arrays of book titles as values.

Expected Output:
{
  1925: ["The Great Gatsby"],
  1960: ["To Kill a Mockingbird"],
  1949: ["1984"],
  1932: ["Brave New World"],
  1953: ["Fahrenheit 451"]
}


https://github.com/refiloemopeloa/SD-lab-3-2025/blob/main/README.md
*/
