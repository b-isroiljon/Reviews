const reviews = [
  {
    img: "./images/person1.jpg",
    fullName: `Susan Smith`,
    firstName: "Susan",
    lastName: "Smith",
    job: "Web Dev",
    info: `I'm baby meggings twee health goth. Bicycle rights tumeric chartreuse 
        before they sold out chambray pop-up. Shaman humblebrag pickled
        coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`,
  },

  {
    img: "./images/person2.jpg",
    fullName: "Anna Johnson",
    firstName: "Anna",
    lastName: "Johnson",
    job: "UX Designer",
    info: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle.
     Disrupt glossier gastropub deep v vice franzen hell of brooklyn
      twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`,
  },

  {
    img: "./images/person3.jpg",
    fullName: "Peter Jones",
    firstName: "Peter",
    lastName: "Jones",
    job: "Intern",
    info: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit,
     fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst
      raclette post-ironic jianbing swag.`,
  },

  {
    img: "./images/person4.jpg",
    fullName: "Bill Anderson",
    firstName: "Bill",
    lastName: "Anderson",
    job: " The Boss",
    info: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion
     axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz,
      edison bulb pop-up 3 wolf moon tote bag street art shabby chic`,
  },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const navigationButtons = document.querySelector(".btn-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.querySelector(".random-btn");
let currentIndex = 0;

// when document is loaded update person data
window.addEventListener("DOMContentLoaded", function () {
  updatePerson(currentIndex);
});

//updates person data to specified object with given index
function updatePerson(index) {
  const item = reviews[index];
  img.src = item.img;
  author.textContent = item.fullName;
  job.textContent = item.job;
  info.textContent = item.info;
}

function randomButtons() {
  currentIndex = Math.floor(Math.random() * reviews.length);
  updatePerson(currentIndex);
}
function navButtons(event) {
  if (event === "nextBtn") currentIndex++;
  if (currentIndex > reviews.length - 1) currentIndex = 0;
  else if (event === "prevBtn") currentIndex--;
  if (currentIndex < 0) currentIndex = reviews.length - 1;

  updatePerson(currentIndex);
}

navigationButtons.addEventListener("click", function (event) {
  if (event.target.classList.contains("next-btn")) navButtons("nextBtn");
  else if (event.target.classList.contains("prev-btn")) navButtons("prevBtn");
});

randomBtn.addEventListener("click", randomButtons);
