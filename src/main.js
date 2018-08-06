import $ from 'jquery';
import 'bootstrap';
import './styles.css';
import { SpaceAge } from './Space-Age.js';

$(document).ready(function() {
  $('#').submit(function(event) {
    event.preventDefault();
    //var row = $('#').val();

    var output = new SpaceAge();

    $('ul#').append("<h1>" + "<p>" + output + "</p>" + "</h1>");

  });
});
