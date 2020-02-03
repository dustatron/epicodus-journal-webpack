export function Journal() {
  this.posts = [];
  this.id = 0;
}

Journal.prototype.addPost = function(post) {
  this.posts.push(post);
};