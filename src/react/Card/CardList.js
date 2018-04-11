// const cards = [0,"1/2",1,2,3,5,8,13,20,40,100,"?","∞"]

const FibonacciCards = [
  {
    id: 1,
    points: 0,
    img: 'https://conlamenteabierta.files.wordpress.com/2010/09/cero.jpg',
  },
  {
    id: 2,
    points: '1/2',
    img:
      'https://pbs.twimg.com/profile_images/378800000050544865/ec6a4b630f8de591e23fb43cc30d6fe8_400x400.jpeg',
  },
  {
    id: 3,
    points: 1,
    img: 'https://blognumbers.files.wordpress.com/2010/09/1.jpg',
  },
  {
    id: 4,
    points: 2,
    img: 'https://blognumbers.files.wordpress.com/2010/09/2.jpg',
  },
  {
    id: 5,
    points: 3,
    img: 'https://blognumbers.files.wordpress.com/2010/09/3.jpg',
  },
  {
    id: 6,
    points: 5,
    img:
      'https://vignette.wikia.nocookie.net/phobia/images/0/03/5.jpg/revision/latest?cb=20170102100251',
  },
  {
    id: 7,
    points: 8,
    img: 'https://blognumbers.files.wordpress.com/2010/09/81.jpg',
  },
  {
    id: 8,
    points: 13,
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Number13.png',
  },
  {
    id: 9,
    points: 20,
    img:
      'data:image/png;base64,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',
  },
  {
    id: 10,
    points: 40,
    img:
      'http://cdn.innovativelanguage.com/wordlists/media/thumb/7211_fit512.jpg',
  },
  {
    id: 11,
    points: 100,
    img: 'http://www.bilingual.sk/picture/639.jpg',
  },
  {
    id: 12,
    points: '?',
    img:
      'https://www.iconexperience.com/_img/o_collection_png/green_dark_grey/512x512/plain/symbol_questionmark.png',
  },
  {
    id: 13,
    points: '∞',
    img: 'https://www.ancient-symbols.com/images/symbol-directory/infinity.jpg',
  },
];

const DragonballCards = [
  {
    id: 1,
    points: 0,
    img:
      'https://i.pinimg.com/originals/8d/80/7d/8d807d5380601d940824233818b80dca.png',
  },
  {
    id: 2,
    points: 2,
    img:
      'https://img00.deviantart.net/37c2/i/2017/152/c/2/goku_ssj_by_koku78-dbb8ly4.png',
  },
  {
    id: 3,
    points: 3,
    img:
      'https://vignette.wikia.nocookie.net/dragonballfanon/images/7/7e/Goku-ssj2.png/revision/latest?cb=20150523175732&path-prefix=es',
  },
  {
    id: 4,
    points: 5,
    img:
      'https://vignette.wikia.nocookie.net/dragonballfanon/images/3/3e/Goku_SSJ3_Render.png/revision/20130708162803?path-prefix=es',
  },
  {
    id: 5,
    points: 8,
    img:
      'https://vignette.wikia.nocookie.net/dragonballfanon/images/6/6f/Goku_%28SSJ4%29.png/revision/latest?cb=20160619164313&path-prefix=es',
  },
  {
    id: 6,
    points: 13,
    img:
      'https://vignette.wikia.nocookie.net/dragonballfanon/images/8/8b/Goku_SSJ_Dios_100%25_%28TC%29.png/revision/latest?cb=20170716222811&path-prefix=es',
  },

  {
    id: 7,
    points: 20,
    img:
      'https://i.pinimg.com/originals/a8/c1/ed/a8c1ede3ae53d004579e3a3e15e001e0.png',
  },
  {
    id: 8,
    points: 40,
    img:
      'https://pre00.deviantart.net/1729/th/pre/i/2017/119/d/c/goku_ssj_blue_kaioken__3_by_saodvd-db7k30m.png',
  },
  {
    id: 9,
    points: 100,
    img:
      'https://t00.deviantart.net/xxnMfKPgPAHxBD7hSHgLBUPcd1M=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre00/3456/th/pre/i/2018/052/7/8/son_goku_ultra_instinto_dominado_by_jaredsongohan-dc3xh97.png',
  },
];

const SimpsonsCards = [
  {
    id: 1,
    points: 0,
    img: 'https://vignette.wikia.nocookie.net/lossimpson/images/9/9d/Maggie_Simpson.png/revision/latest?cb=20100529224628&path-prefix=es',
  },
  {
    id: 2,
    points: '1/2',
    img: 'https://thegirlwhogames.files.wordpress.com/2014/02/lisa_simpson.png',
  },
  {
    id: 3,
    points: 5,
    img:'https://vignette.wikia.nocookie.net/lossimpson/images/6/65/Bart_Simpson.png/revision/latest?cb=20100530014756&path-prefix=es',
  },
  {
    id: 10,
    points: 40,
    img:'https://vignette.wikia.nocookie.net/lossimpson/images/0/0b/Marge_Simpson.png/revision/latest?cb=20090415001251&path-prefix=es',
  },
  {
    id: 13,
    points: '∞',
    img:'https://vignette.wikia.nocookie.net/lossimpson/images/b/bd/Homer_Simpson.png/revision/latest?cb=20100522180809&path-prefix=es',
  },
];

const Shirts = [
  {
    id: 1,
    points: 1,
    size: 'XS',
    img:
      'http://www.returnofkings.com/wp-content/uploads/2012/11/Blank_T-shirt.gif',
  },
  {
    id: 2,
    points: 2,
    size: 'S',
    img:
      'http://www.returnofkings.com/wp-content/uploads/2012/11/Blank_T-shirt.gif',
  },
  {
    id: 3,
    points: 3,
    size: 'M',
    img:
      'http://www.returnofkings.com/wp-content/uploads/2012/11/Blank_T-shirt.gif',
  },
  {
    id: 4,
    points: 5,
    size: 'L',
    img:
      'http://www.returnofkings.com/wp-content/uploads/2012/11/Blank_T-shirt.gif',
  },
  {
    id: 5,
    points: 8,
    size: 'XL',
    img:
      'http://www.returnofkings.com/wp-content/uploads/2012/11/Blank_T-shirt.gif',
  },
  {
    id: 6,
    points: 13,
    size: 'XXL',
    img:
      'http://www.returnofkings.com/wp-content/uploads/2012/11/Blank_T-shirt.gif',
  },
];

export { FibonacciCards, DragonballCards, SimpsonsCards, Shirts };
