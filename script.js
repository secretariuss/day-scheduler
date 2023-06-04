var container = $('#container')
var date = dayjs();
var currentHourId = "hour-" + dayjs().get('hour');

function createDiv1() {

  $("<div>", {
    'id': "hour-9",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "9AM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}

function createDiv2() {

  $("<div>", {
    'id': "hour-10",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "10AM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}

function createDiv3() {

  $("<div>", {
    'id': "hour-11",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "11AM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}

function createDiv4() {

  $("<div>", {
    'id': "hour-12",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "12PM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}

function createDiv5() {

  $("<div>", {
    'id': "hour-1",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "1PM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}


function createDiv6() {

  $("<div>", {
    'id': "hour-14",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "2PM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}

function createDiv7() {

  $("<div>", {
    'id': "hour-15",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "3PM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}

function createDiv8() {

  $("<div>", {
    'id': "hour-16",
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': "4PM",
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}


function createDiv9() {

  $("<div>", {
    'id': "hour-" + dayjs().get('hour'),
    'class': "row time-block",
  }).appendTo(this.container)
    .append($("<div>", {
      'text': date.format('h A').split(' ').join(''),
      'class': "col-2 col-md-1 hour text-center py-3",
    }))
    .append($("<textarea>", {
      'rows': "3",
      'class': "col-8 col-md-10 description",
    }))
    .append($("<button>", {
      'aria-label': "save",
      'class': "btn saveBtn col-2 col-md-1",
    }).append($("<i>", {
      'class': "fas fa-save",
      'aria-hidden': "true"
    })))

  saveInput();
}


var cutterntDay = $('#currentDay');
var saveBtn = document.querySelector('.saveBtn');

var currentHours = dayjs().get('hour');


var showCurrentDay = function () {
  var date = dayjs();
  $('#currentDay').text(date.format('dddd, MMMM D') + 'th');

}

function getHours() {

  $('.time-block').each(function () {
    var hoursScheduler = $(this).attr("id").split("hour-")[1];
    console.log('currentHours  ', currentHours);
    console.log('hoursScheduler   ', hoursScheduler);
    if ( hoursScheduler < currentHours) {
      $(this).addClass('past');
    } else if (currentHours == hoursScheduler) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

  });


}

function saveInput() {

  $('.saveBtn').on('click', function () {
    var hours = $(this).parent().attr("id");
    console.log(hours);
    var textAreaValue = $(this).siblings('.description').val();
    localStorage.setItem(hours, textAreaValue);
    console.log(textAreaValue);
  })

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-1 .description").val(localStorage.getItem("hour-1"));
  $("#hour-2 .description").val(localStorage.getItem("hour-2"));
  $("#hour-3 .description").val(localStorage.getItem("hour-3"));
  $("#hour-4 .description").val(localStorage.getItem("hour-4"));
  $("#hour-5 .description").val(localStorage.getItem("hour-5"));
}

createDiv1();
createDiv2();
createDiv3();
createDiv4();
createDiv5();
createDiv6();
createDiv7();
createDiv8();
createDiv9();
getHours();
showCurrentDay();