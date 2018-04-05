// const cards = [0,"1/2",1,2,3,5,8,13,20,40,100,"?","∞"]

const FibonacciCards = [
    {
        id: 1,
        points: 0,
        img: 'https://conlamenteabierta.files.wordpress.com/2010/09/cero.jpg'
    },
    {
        id: 2,
        points: "1/2",
        img: 'https://pbs.twimg.com/profile_images/378800000050544865/ec6a4b630f8de591e23fb43cc30d6fe8_400x400.jpeg'
    },
    {
        id: 3,
        points: 1,
        img: 'https://blognumbers.files.wordpress.com/2010/09/1.jpg'
    },
    {
        id: 4,
        points: 2,
        img: 'https://blognumbers.files.wordpress.com/2010/09/2.jpg'
    },
    {
        id: 5,
        points: 3,
        img: 'https://blognumbers.files.wordpress.com/2010/09/3.jpg'
    },
    {
        id: 6,
        points: 5,
        img: 'https://vignette.wikia.nocookie.net/phobia/images/0/03/5.jpg/revision/latest?cb=20170102100251'
    },
    {
        id: 7,
        points: 8,
        img: 'https://blognumbers.files.wordpress.com/2010/09/81.jpg'
    },
    {
        id: 8,
        points: 13,
        img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Number13.png'
    },
    {
        id: 9,
        points: 20,
        img: 'data:image/png;base64,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'
    },
    {
        id: 10,
        points: 40,
        img: 'http://cdn.innovativelanguage.com/wordlists/media/thumb/7211_fit512.jpg'
    },
    {
        id: 11,
        points: 100,
        img: 'http://www.bilingual.sk/picture/639.jpg'
    },
    {
        id: 12,
        points: "?",
        img: 'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/symbol_questionmark.png'
    },
    {
        id: 13,
        points: "∞",
        img: 'https://www.ancient-symbols.com/images/symbol-directory/infinity.jpg'
    },
]


const DragonballCards = [
    {
        id: 1,
        points: 0,
        img: 'https://cde.laprensa.e3.pe/ima/0/0/1/8/6/186416.jpg'
    },
    {
        id: 2,
        points: "1/2",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlwIFIXM3b8gS_PLPG0raP33M_jTRFxxhpFP7YcLIF_BtWzeZ'
    },
    {
        id: 3,
        points: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSMO0sHzbPC_kwa9GwPcqEWkTMh6Q6X-zP-As18xlxJI24-Fx'
    },
    {
        id: 4,
        points: 2,
        img: 'http://xombitgames.com/files/2015/03/Super-Saiyan-2.jpg'
    },
    {
        id: 5,
        points: 3,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQa9UrxhNqESHZxgsqcw8HfjB84wSzRvqSZQMXwyXy-QnTLfupeg'
    },
    {
        id: 6,
        points: 5,
        img: 'https://i.pinimg.com/originals/bd/96/56/bd96565f65351c8d35e8241b4239f211.jpg'
    },
    {
        id: 7,
        points: 8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS2O83qr4sK8pdX7Rln3_GO_0AlAZOUDEHh-Qa3fw2kOhgfl03w'
    },
    {
        id: 8,
        points: 13,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92EHs1J2JoBptT14Dsh5uh_UIJawDJxUCTCWiydgZt1LjA2so'
    },
    {
        id: 9,
        points: 20,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3irYndsF05s3wQaL0VITGzelJJAQmWr4gZyfGKIi89Fj8awJiw'
    },
    {
        id: 10,
        points: 40,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUntdQw6gv7nnpf7iYvNwF-LhBbZibI3UBCzi6VFxwtVS7AWX'
    },
    {
        id: 11,
        points: 100,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCHZ0KaEHqhNPRu6MjhvpWoXrY-Z6lzysFCqesBpXWVGrSRjLI'
    },
    {
        id: 12,
        points: "?",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp84roKe_0xC-aJ_jSEkYp5kes1MdAp4Z7_8NqxgTzYXfQXfGK9Q'
    },
    {
        id: 13,
        points: "∞",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmmQmfcQ8Ooxti40qzad9MovCKnJkI6Jk18IlXt6EN7B4_4yNJ'
    },
]

const SimpsonsCards = [
    {
        id: 1,
        points: 0,
        img: 'https://metrouk2.files.wordpress.com/2015/09/milhouse_van_houten.jpg'
    },
    {
        id: 2,
        points: "1/2",
        img: 'https://thegirlwhogames.files.wordpress.com/2014/02/lisa_simpson.png'
    },
    {
        id: 3,
        points: 1,
        img: 'https://vignette.wikia.nocookie.net/simpsons/images/a/a7/Montgomery_Burns.png/revision/latest?cb=20100602062705'
    },
    {
        id: 4,
        points: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU6prU2WvXzLGuECIJKqC2OuL88TXjmOl5ZwnxaBpGLvwRf1Z_'
    },
    {
        id: 5,
        points: 3,
        img: 'https://fthmb.tqn.com/reK9khvT_c6c4XZUGtHmZXykJc8=/768x0/filters:no_upscale()/fattony-56a00a013df78cafda9fbcdb.jpg'
    },
    {
        id: 6,
        points: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeZ94V7SUWV5QJdVmPrx6Y28mM9d2y4nmpbG9ZJVwCFKMJ8y_'
    },
    {
        id: 7,
        points: 8,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNyJf8McMVpiBG8GK9WNBkAEdyLNNoflNJMZB2Rs4YRXIEQfmwQ'
    },
    {
        id: 8,
        points: 13,
        img: 'https://www.gunaxin.com/wp-content/uploads/2010/03/cletus.png'
    },
    {
        id: 9,
        points: 20,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrpHGAdBc6JqRKcIzlb9BMI6UX6n9GPTwgS2IySufPF6EJeCfgQ'
    },
    {
        id: 10,
        points: 40,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu2D7ForCNsbTrSidpIqra3YkhHE4XEzNUCOPbmrl-kEr1ZHdE1w'
    },
    {
        id: 11,
        points: 100,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KzHDg3sifUuSjl1_lrYKMb5gNklZ5NPC9AadC-D8uuScmNS_'
    },
    {
        id: 12,
        points: "?",
        img: 'https://i.imgur.com/qh1wmPw.gif'
    },
    {
        id: 13,
        points: "∞",
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09Wlitp6eDdvWycMv-vvjky55yapcQUTeqPYI-7QwEbMFNCho3Q'
    },
]

export {
    FibonacciCards,
    DragonballCards,
    SimpsonsCards
};