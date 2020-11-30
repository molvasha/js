const products = [
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg"
    ]
  },
  {
    id: 8,
    price: 78,
  },
];

const filter1 = products.filter(photos => photos.photos && photos.photos.length != 0);
console.log(filter1);
const filter2 = products.sort(function (a, b) {
  if (a.price > b.price) {
    return 1;
  }
  else if (a.price < b.price) {
    return -1;
  }
  else
  return 0;
});
console.log(filter2);
