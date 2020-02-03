// import { pingPong } from './ping-pong';
import { Journal } from './journal';
import { Post } from './post';
import './styles.css';

var journal = new Journal();

$(document).ready(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    var title = $("#inputTitle").val();
    var body = $("#text-area").val();

    var post = new Post(title, body);
    journal.addPost(post);
  
    $('.print').html(journal.posts[0].title);
    $('.body').html(journal.posts[0].body);
  });

  // console.log(journal.posts[0]);

});


