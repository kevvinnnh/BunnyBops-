// Trending Now Section 

const gap = 16;

const slidesSection = document.getElementById("flexSection"),
  songCard = document.getElementsByClassName("songCard"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  slidesSection.scrollBy(width + gap, 0);
  if (slidesSection.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (songCard.scrollWidth - width - gap <= slidesSection.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  slidesSection.scrollBy(-(width + gap), 0);
  if (slidesSection.scrollLeft - width - gap <= 0) {
    prev.style.display = "flex";
  }
  if (!songCard.scrollWidth - width - gap <= slidesSection.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = slidesSection.offsetWidth;
window.addEventListener("resize", e => (width = slidesSection.offsetWidth));
let albums = []



// Like button 1

var button1 = document.querySelector('.heart')
var output1 = document.querySelector('.numb')
var counter1
var number1

window.addEventListener("load" , function count1(){
  number1 = parseInt(output1.innerText);
  counter1 = number1 + 1;

  function increment(){
    value = counter1++
    output1.innerText = value;
  }

  button1.onclick = increment;
}, false);



// Like button 2

var button2 = document.querySelector('#heart2')
var output2 = document.querySelector('#output2')
var counter2
var number2

window.addEventListener("load", function count2(){
  number2 = parseInt(output2.innerText);
  counter2 = number2 + 1;

  function increment2(){
    value2 = counter2++
    output2.innerText = value2;
  }

  button2.onclick = increment2;
}, false);

// Like button 3

var button3 = document.querySelector('#heart3')
var output3 = document.querySelector('#output3')
var counter3
var number3

window.addEventListener("load", function count3(){
  number3 = parseInt(output3.innerText);
  counter3 = number3 + 1;

  function increment3(){
    value3 = counter3++
    output3.innerText = value3;
  }

  button3.onclick = increment3;
}, false);


// Like button 4

var button4 = document.querySelector('#heart4')
var output4 = document.querySelector('#output4')
var counter4
var number4

window.addEventListener("load", function count4(){
  number4 = parseInt(output4.innerText);
  counter4 = number4 + 1;

  function increment4(){
    value4 = counter4++
    output4.innerText = value4;
  }

  button4.onclick = increment4;
}, false);


// Like button 5

var button5 = document.querySelector('#heart5')
var output5 = document.querySelector('#output5')
var counter5
var number5

window.addEventListener("load", function count5(){
  number5 = parseInt(output5.innerText);
  counter5 = number5 + 1;

  function increment5(){
    value5 = counter5++
    output5.innerText = value5;
  }

  button5.onclick = increment5;
}, false);



// Like button 6

var button6 = document.querySelector('#heart6')
var output6 = document.querySelector('#output6')
var counter6
var number6

window.addEventListener("load", function count6(){
  number6 = parseInt(output6.innerText);
  counter6 = number6 + 1;

  function increment6(){
    value6 = counter6++
    output6.innerText = value6;
  }

  button6.onclick = increment6;
}, false);


// Like button 7

var button7 = document.querySelector('#heart7')
var output7 = document.querySelector('#output7')
var counter7
var number7

window.addEventListener("load", function count7(){
  number7 = parseInt(output7.innerText);
  counter7 = number7 + 1;

  function increment7(){
    value7 = counter7++
    output7.innerText = value7;
  }

  button7.onclick = increment7;
}, false);



// Like button 8

var button8 = document.querySelector('#heart8')
var output8 = document.querySelector('#output8')
var counter8
var number8

window.addEventListener("load", function count8(){
  number8 = parseInt(output8.innerText);
  counter8 = number8 + 1;

  function increment8(){
    value8 = counter8++
    output8.innerText = value8;
  }

  button8.onclick = increment8;
}, false);



// Like button 9

var button9 = document.querySelector('#heart9')
var output9 = document.querySelector('#output9')
var counter9
var number9

window.addEventListener("load", function count9(){
  number9 = parseInt(output9.innerText);
  counter9 = number9 + 1;

  function increment9(){
    value9 = counter9++
    output9.innerText = value9;
  }

  button9.onclick = increment9;
}, false);

// Like button 10

var button10 = document.querySelector('#heart10')
var output10 = document.querySelector('#output10')
var counter10
var number10

window.addEventListener("load", function count10(){
  number10 = parseInt(output10.innerText);
  counter10 = number10 + 1;

  function increment10(){
    value10 = counter10++
    output10.innerText = value10;
  }

  button10.onclick = increment10;
}, false);

// Like button 11

var button11 = document.querySelector('#heart11')
var output11 = document.querySelector('#output11')
var counter11
var number11

window.addEventListener("load", function count11(){
  number11 = parseInt(output11.innerText);
  counter11 = number11 + 1;

  function increment11(){
    value11 = counter11++
    output11.innerText = value11;
  }

  button11.onclick = increment11;
}, false);

// Like button 12

var button12 = document.querySelector('#heart12')
var output12 = document.querySelector('#output12')
var counter12
var number12

window.addEventListener("load", function count12(){
  number12 = parseInt(output12.innerText);
  counter12 = number12 + 1;

  function increment12(){
    value12 = counter12++
    output12.innerText = value12;
  }

  button12.onclick = increment12;
}, false);

// Comment Section

// getting all required elements
const button = document.querySelector("#button");
const commentList = document.querySelector("#comment-list");


showComments();

function myFunction() {
  var name = document.getElementById("commentName").value; //getting value of input field
  var email = document.getElementById("commentEmail").value;
  var comment = document.getElementById("commentArea").value;
  // const checkbox = document.getElementById("checkbox").value; 
  let storage = localStorage.getItem("New Comments"); //getting localstorage

  if (storage == null) {
    listArr = [];
  } else {
    listArr = JSON.parse(storage);
  }

  listArr.push(
    //pushing or adding new value in array
    "<span> &#128100" + " " +
      name +
      "<br/>" +
      email +
      "</span>" +
      "<br>" +
      comment
  );
  localStorage.setItem("New Comments", JSON.stringify(listArr));

  showComments(); //calling showComments function
}

function showComments() {
  let storage = localStorage.getItem("New Comments");

  if (storage == null) {
    listArr = []; //create a blank array
  } else {
    listArr = JSON.parse(storage); //transforming json string into a js object
  }

  let liTag = "";

  listArr.forEach((element, index) => {
    liTag += `<li> ${element} </li>`;
  });

  commentList.innerHTML = liTag;

  // window.localStorage.clear();

}





