// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let saveButton = $('.saveBtn');
let currentHour = dayjs().format('HH')
let today = dayjs()
$('#currentDay').text(today.format('dddd, MMMM D YYYY'));
let descriptions = document.querySelectorAll('.description')
let rows = document.querySelectorAll('.time-block')
let future = $('.future');
let present = $('.present');
let past = $('.past');

$(function () {
  saveButton.on('click', function () {
    localStorage.setItem($(this).attr('id'), $(this).siblings('textarea').val());
  });

  for (let i = 0; i < descriptions.length; i++) {
    descriptions[i].value = localStorage.getItem(i);
  }


  console.log(currentHour);
  for (let i = 1; i < rows.length; i++) {
    if
    (rows[i].id < currentHour) {
    rows[i].classList.add('past');
  }
  else if
    (rows[i].id > currentHour) {
    rows[i].classList.add('future');
  }
  else if
      (parseInt(rows[i].id) == currentHour) {
        rows[i].classList.add('present');
      }
  }
});
