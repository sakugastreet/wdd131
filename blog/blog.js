const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const shelf = document.body.querySelector(".shelf")



for (let i = 0; i < articles.length; i++) {
	let article = articles[i]

	let book = document.createElement("div");
	book.classList.add("book");
	book.innerHTML = `<div class="book">
                <div class="metadata">
                    <p class="date">${article.date}</p>
                    <p class="age_range">${article.ages}</p>
                    <p class="category">${article.genre}</p>
                    <p class="rating">${article.stars}</p>
                </div>
                <div class="content">
                    <h3 class="title">${article.title}</h3>
                    <figure>
                        <img src="${article.imgSrc}" alt="${article.imgAlt}">
                    </figure>
                    <p class="description">${article.description}</p>
                </div>
            </div>`;
	shelf.appendChild(book);
}

