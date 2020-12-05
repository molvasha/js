'use strict'

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;

  this.edit = function (text) {
    this.text = text;
  }
}


function AttachedPost(author, text, date) {
  Post.call(this, author, text, date)

  this.highlighted = false;
  this.makeTextHighlighted = function () {
    this.highlighted = true;
  }
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;


let newPost = [
  new Post('Fedor', 'Lorem ipsum', new Date()),
  new Post('Igor', 'Lorem ipsum', new Date()),
  new Post('Alex', 'Lorem ipsum', new Date())
];
for (Post of newPost) {
  Post.edit('hello world');
  console.log(Post)
}

var t = new AttachedPost('Fedor', 'Lorem ipsum', new Date());
console.log(t); // {name: 'Fedor', text: 'Lorem ipsum', date: new Date(), highlighted: false, f}
t.edit('12345');
console.log(t); // {name: 'Fedor', text: '12345', date: new Date(), highlighted: false, f}
console.log(t.highlighted); // false
t.makeTextHighlighted();
console.log(t.highlighted); // true

// let newAttachedPost = [
//   new AttachedPost('Fedor', 'Lorem ipsum', new Date()),
//   new AttachedPost('Igor', 'Lorem ipsum', new Date()),
//   new AttachedPost('Alex', 'Lorem ipsum', new Date())
// ];
// for (AttachedPost of newAttachedPost) {
//   AttachedPost.edit('hello people');
//   console.log(AttachedPost)
// }
