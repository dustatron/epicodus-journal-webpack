/* eslint-disable no-console */
// import { Journal } from "./journal";

export function Post(title, body) {
  this.title = title;
  this.body = body;
}

Post.prototype.update = function(title, body) {
  this.title = title;
  this.body = body;
};

Post.prototype.wordCount = function () {
  return this.body.split(" ").length;
};

Post.prototype.teaser = function() {
  var teaser = this.body.split(" ");

  return teaser.slice(0, 8).join(" ");

};