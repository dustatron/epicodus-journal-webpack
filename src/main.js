/* eslint-disable no-console */
// import { pingPong } from './ping-pong';
import { Journal } from './journal';
import { Post } from './post';
import './styles.css';

var journal = new Journal(post);
var post = new Post();

$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var title = $("#inputTitle").val();
    var body = $("#text-area").val();
    post.update(title, body);

    journal.addPost(post);
  
    $('.print').html(journal.posts[journal.posts.length - 1].title);
    $('.body').html(journal.posts[journal.posts.length - 1].body);
  });

  $('#count-me').click(() => {
    var lastPost = journal.lastPost();
    var wCount = lastPost.wordCount();
    $('#count-ans').html(wCount);
    
    // journal.getVnC(0);
    // console.log(journal.posts[0]);
    var letterCounts = journal.getVnC(journal.posts.length - 1);
    $('#v-count').html(letterCounts.vowels);
    $('#c-count').html(letterCounts.conso);
    $('.teaser').html(journal.posts[journal.posts.length - 1].teaser() + '...');
  });

});


