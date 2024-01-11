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
    fullNmae: "Anna Johnson",
    firstName: "Anna",
    lastName: "Johnson",
    job: "UX Designer",
    info: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle.
     Disrupt glossier gastropub deep v vice franzen hell of brooklyn
      twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.`,
  },

  {
    img: "./images/person3.jpg",
    fullNmae: "Peter Jones",
    firstName: "Peter",
    lastName: "Jones",
    job: "Inter",
    info: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit,
     fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst
      raclette post-ironic jianbing swag.`,
  },

  {
    img: "./images/person4.jpg",
    fullNmae: "Bill Anderson",
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

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.fullName;
  job.textContent = item.job;
  info.textContent = item.info;
});
