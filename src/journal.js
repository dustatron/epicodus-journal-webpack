/* eslint-disable no-console */
export function Journal() {
  this.posts = [];
  this.id = 0;
}

Journal.prototype.addPost = function (post) {
  this.posts.push(post);
};

Journal.prototype.getVnC = function (index) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowelSelection = [];
  var consoArr = [];

  var charArr = this.posts[index].body.split('');

  //grabbing vowels
  charArr.forEach(element => {
    if (vowels.includes(element)) {
      vowelSelection.push(element);
    } else if (element != ' ') {
      consoArr.push(element);
    }
  });


  return {
    conso: consoArr.length,
    vowels: vowelSelection.length
  };
};

Journal.prototype.lastPost = function() {
  return this.posts[this.posts.length -1];
};
