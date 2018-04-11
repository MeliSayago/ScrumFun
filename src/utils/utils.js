export const CardList = usersList => {
  console.log('1 - USERLIST', usersList);
  var cardsList = [];
  for (var i = 0; i < usersList.length; i++) {
    if (usersList[i].card.points) {
      cardsList.push(usersList[i].card.points);
    }
  }
  console.log('2 - CARDLIST', cardsList);
  return cardsList;
};

export const Moda = function(array) {
  var obj = {
    '0': 0,
    '1/2': 0,
    '1': 0,
    '2': 0,
    '3': 0,
    '5': 0,
    '8': 0,
    '13': 0,
    '20': 0,
    '40': 0,
    '100': 0,
    '?': 0,
    '∞': 0,
  };
  console.log('3 - ARRAY', array);

  array.forEach(element => {
    console.log('ELEMENT', element);
    obj[element] += 1;
  });

  console.log('OBJETO', obj);

  var max = obj[0];
  var maxKey = [];

  for (let key in obj) {
    if (max < obj[key]) {
      max = obj[key];
      maxKey = [];
      maxKey.push(key);
    } else if (max == obj[key]) {
      maxKey.push(key);
    }
  }

  return maxKey;
};
