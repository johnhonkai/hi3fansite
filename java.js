
window.onload = () => {
  /// filterSelection('all')
  ///openCity(event, 'SleepAFK')
  filterElements()
};


  const filterElements = () => {
    const category1 = document.querySelector('input[name="buttonGroup1"]:checked').value;
    const category2 = document.querySelector('input[name="buttonGroup2"]:checked').value;
    const category3 = document.querySelector('input[name="buttonGroup3"]:checked').value;
    const category3extra = document.querySelector('input[name="buttonGroup3"]:checked').value;

    const elements = document.querySelectorAll('.valkcard');

    elements.forEach(valkcard => {
        const matchesCategory1 = (category1 === "all" || valkcard.dataset.category1 === category1);
        const matchesCategory2 = (category2 === "all" || valkcard.dataset.category2 === category2);
        const matchesCategory3 = (category3 === "all" || valkcard.dataset.category3 === category3);
        const matchesCategory3extra = (category3extra === "all" || valkcard.dataset.category3extra === category3extra);

        if (matchesCategory1 && matchesCategory2 && (matchesCategory3 || matchesCategory3extra)) {
          valkcard.style.display = 'block';
        } else {
          valkcard.style.display = 'none';
        }
    });

};

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', filterElements);
});

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("valkcard");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}


// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");

var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function buttonshow() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$('.table-responsive-stack').find("th").each(function (i) {
      
  $('.table-responsive-stack td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+ $(this).text() + ':</span> ');
  $('.table-responsive-stack-thead').hide();
});





$( '.table-responsive-stack' ).each(function() {
var thCount = $(this).find("th").length; 
var rowGrow = 100 / thCount + '%';
//console.log(rowGrow);
$(this).find("th, td").css('flex-basis', rowGrow);   
});




function flexTable(){
if ($(window).width() < 768) {
  
$(".table-responsive-stack").each(function (i) {
  $(this).find(".table-responsive-stack-thead").show();
  $(this).find('thead').hide();
});
  

// window is less than 768px   
} else {
  
  
$(".table-responsive-stack").each(function (i) {
  $(this).find(".table-responsive-stack-thead").hide();
  $(this).find('thead').show();
});
  
  

}
// flextable   
}      

flexTable();

window.onresize = function(event) {
flexTable();
};

document.getElementById("clickableDiv").addEventListener("click", function() {
  window.location.href = "https://arustats.herokuapp.com/";
});

const events = [
  { title: "Bing-Bang Finchball", startDate: "2024-08-15", endDate: "2024-08-18" },
  { title: "Energy Amplifier: Lemma", startDate: "2024-08-20", endDate: "2024-08-30" },
  // More events
];

const timelineContainer = document.querySelector(".timeline");
const timelineStart = new Date("2024-08-15");
const timelineEnd = new Date("2024-09-15");
const totalTimelineDays = (timelineEnd - timelineStart) / (1000 * 60 * 60 * 24);

events.forEach(event => {
  const eventElement = document.createElement("div");
  eventElement.className = "event";
  
  const titleElement = document.createElement("span");
  titleElement.className = "event-title";
  titleElement.textContent = event.title;
  
  const barElement = document.createElement("div");
  barElement.className = "event-bar";
  
  const eventStart = new Date(event.startDate);
  const eventEnd = new Date(event.endDate);
  const eventDuration = (eventEnd - eventStart) / (1000 * 60 * 60 * 24);
  
  barElement.style.width = `${(eventDuration / totalTimelineDays) * 100}%`;
  
  eventElement.appendChild(titleElement);
  eventElement.appendChild(barElement);
  timelineContainer.appendChild(eventElement);
});
