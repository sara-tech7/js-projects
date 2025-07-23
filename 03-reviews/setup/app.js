// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "Working with this platform has truly enhanced my productivity. The UI is intuitive, and the codebase is clean. It has been a game-changer in managing my daily workflow as a front-end developer.",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: "As a designer, I value simplicity and function. This tool provides both. The attention to design details and user experience is top-notch. It is one of the best platforms I have used in recent projects.",
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: "During my internship, this project gave me real-world exposure to JavaScript and DOM manipulation. I appreciated how beginner-friendly yet practical the codebase was. A great learning experience!",

  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'From a leadership perspective, I am impressed by the modularity and scalability of the code. This project reflects solid software engineering principles and demonstrates professional-level work.',

  },
];

//select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item 
let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

//show person based on item and button selected 
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  job.textContent = item.job;
  author.textContent = item.name;
  info.textContent = item.text;
}

//show next person when clicked on nextbtn 
//increment wraparound
nextBtn.addEventListener("click", function () {
  if (currentItem === reviews.length - 1) {
    // currentItem = (currentItem + 1) % reviews.length;   slider/carousel logic
    currentItem = 0;
  }
  else {
    currentItem++;

  }
  showPerson(currentItem);
}
);

//show previous person when clicked on prevBtn
//decrement wraparound 
prevBtn.addEventListener('click', function () {
  if (currentItem === 0) {
    // currentItem = (currentItem - 1 + reviews.length) % reviewslength; slider/carousel logic
    currentItem = reviews.length - 1;
  }
  else {
    currentItem--;
  }
  showPerson(currentItem);

});

//show randomm person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length); //rand no bw 0 and reviews.length-1
  showPerson(currentItem);
})