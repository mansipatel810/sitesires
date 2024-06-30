const mamaearthBestSellers = [
    {
        name: "Ubtan Face Wash with Turmeric & Saffron for Tan Removal-150ml",
        price: "₹337",
        ratings: 4.9,
        reviews: 354,
        imageUrl: "./products image/best sellers/ubtan-face-wash_1_1_2__1_-removebg-preview.png",
        bgcolor:"##CBE59E",
        circlecolor:"#f7bb42"
    },
    {
        name: "Rice Face Wash With Rice Water & Niacinamide for Glass Skin - 100 ml",
        details:"Gently Cleanses Skin | Hydrates Skin",
        price: "₹236",
        ratings: 4.7,
        reviews: 238,
        imageUrl: "./products image/best sellers/rice-face-wash.png",
        bgcolor:"#c4a591",
        circlecolor:"#8e6b54"
    },
    {
       name:"Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 100ml",
       price:"₹227",
       ratings:"4.8",
       reviews:"734",
       imageUrl:"./products image/best sellers/vit-c-face-wash.png",
    },
    {
      name:"Multani Mitti Face Wash with Multani Mitti & Bulgarian Rose  - 100 ml",
      price:"₹227",
      ratings:"5.0",
      reviews:"178",
      imageUrl:"./products image/best sellers/multani_mitti_face_wash.png",
   },
   {
    name:"Vitamin C Face Wash with Vitamin C and Turmeric for Skin Illumination - 250ml",
    price:"₹404",
    ratings:"4.8",
    reviews:"299",
    imageUrl:"./products image/best sellers/vit-c-face-wash-1.png",
    },
    {
     name:"Onion Hair Oil with Onion Oil & Redensyl for Hair Fall Control - 250 ml",
     price:"₹515",
     ratings:"5.0",
     reviews:"112",
     imageUrl:"./products image/best sellers/_onion-oil-250ml__1_1_1-removebg-preview.png",
   },
   {
     name:"Rosemary Hair Growth Oil with Rosemary & Methi Dana  - 150 ml",
     price:"₹368",
     ratings:"4.9",
     reviews:"139",
     imageUrl:"./products image/best sellers/3_1-removebg-preview.png",
   },
   {
     name:"Vitamin C Daily Glow Face Serum With  Turmeric for Radiant Skin - 30 ml",
     price:"₹351",
     ratings:"5.0",
     reviews:"54",
     imageUrl:"./products image/best sellers/vitamin-c-glow-serum_1-removebg-preview.png",
   },
   {
     name:"Vitamin C Daily Glow Face Cream With Turmeric for Skin Illumination - 80 g",
     price:"₹219",
     ratings:"4.7",
     reviews:"123",
     imageUrl:"./products image/best sellers/vit-c-glow-cream1-removebg-preview.png",
   },
   {
     name:"Bye Bye Blemishes Face Cream for Reducing Pigmentation and Blemishes -30ml",
     price:"₹414",
     ratings:"4.7",
     reviews:"678",
     imageUrl:"./products image/best sellers/bye_bye_blemishes_1_1-removebg-preview.png",
   },
   {
     name:"Rosemary Anti-Hair Fall Shampoo with Rosemary & MethiDana for hairfall reduction-250 ml",
     price:"₹300",
     ratings:"5.0",
     reviews:"75",
     imageUrl:"./products image/best sellers/3_11-removebg-preview.png",
   },
   {
     name:"Lemon Anti-Dandruff Shampoo for 100% Dandruff & Itch-free Scalp-250 ml",
     price:"₹307",
     ratings:"4.8",
     reviews:"67",
     imageUrl:"./products image/best sellers/lemon-anti-dandruff-shampoo_1_1_2-removebg-preview.png",
   },
   {
     name:"HydraGel Indian Sunscreen with Aloe Vera and Raspberry for Sun Protection - 50 g",
     price:"₹351",
     ratings:"4.7",
     reviews:"193",
     imageUrl:"./products image/best sellers/hydragel_indian_sunscreen_1-removebg-preview.png",
   },
];


var container=document.querySelector(".container")

var card=""

mamaearthBestSellers.forEach(function(value){
  card+=`
   <div class="card">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})

container.innerHTML=card

















const mamaearthNewLaunches= [
  {
      name: "Ubtan Detan Sunscreen With Turmeric & Saffron For Sun Protection - 50 g",
      price: "₹351",
      ratings: "5.0",
      reviews:"223" ,
      imageUrl: "./products image/new launches/1-copy_1-removebg-preview.png",
  },
  {
      name: "Mamaearth Baby Rich Moisturizing Ultra Light Sunscreen - 50g",
      price: "₹359",
      ratings: "5.0",
      reviews:"1" ,
      imageUrl: "./products image/new launches/1_26-removebg-preview.png",
  },
  {
      name: "Mamaearth Rice Water Dewy Sunscreen with SPF 50 & PA++++ - 50g",
      price: "₹395",
      ratings: "5.0",
      reviews:"4" ,
      imageUrl: "./products image/new launches/with-ingredients_3-removebg-preview.png",
  },
  {
      name: "Rice Water Dewy Active Serum With Rice Water & 10% Niacinamide For Glass Skin - 50 m",
      price: "₹439",
      ratings: "5.0",
      reviews:"4" ,
      imageUrl: "./products image/new launches/with-ingredients_4-removebg-preview.png",
  },
  {
      name: "Natural Mosquito Repellent Gel - 100 ml",
      price: "₹179",
      ratings: "5.0",
      reviews:"3" ,
      imageUrl: "./products image/new launches/with-ingredient_4_1-removebg-preview.png",
  },
  {
      name: "https://images.mamaearth.in/catalog/product/1/-/1-with-ingredients_10.jpg?format=auto&height=600",
      price: "₹351",
      ratings: "5.0",
      reviews:"3" ,
      imageUrl: "./products image/new launches/1-with-ingredients_10-removebg-preview.png",
  },
  {
      name: "Ubtan Detan Sunscreen With Turmeric & Saffron For Sun Protection - 50 g",
      price: "₹351",
      imageUrl: "./products image/new launches/1-copy_1-removebg-preview (1).png",
  },
]

var container2=document.querySelector(".container2")

var card2=""

mamaearthNewLaunches.forEach(function(value){
  card2+=`
   <div class="card2">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})


container2.innerHTML=card2











const mamaearthMakeUp= [
  {
      name: "Creamy Matte Long Stay Lipstick with Murumuru Butter and Vitamin E | Rose Nude",
      price: "₹351",
      ratings: "5.0",
      reviews:"55" ,
      imageUrl: "./products image/makeup/rose_nude_swatch_copy-removebg-preview.png",
  },
  {
      name: "Glow Full Coverage Compact With SPF 30 - 9g | Crème Glow",
      price: "₹527",
      ratings: "5.0",
      reviews:"22" ,
      imageUrl: "./products image/makeup/creame_glow_white_bg-removebg-preview.png",
  },
  {
      name: "Charcoal Black Long Stay Kajal with Vitamin C & Chamomile for 11-Hour Smudge-free Stay",
      price: "₹263",
      ratings: "4.8",
      reviews:"220" ,
      imageUrl: "./products image/makeup/1_1_-removebg-preview.png",
  },
  {
      name: "Creamy Matte Long Stay Lipstick with Murumuru Butter and Vitamin E | Cranberry Crush",
      price: "₹351",
      ratings: "5.0",
      reviews:"4" ,
      imageUrl: "./products image/makeup/cranberry_crush_swatch_copy-removebg-preview.png",
  },
  {
      name: "Beetroot Tinted 100% Natural Lip Balm with Beetroot and Beeswax for Soft Lips",
      price: "₹260",
      ratings: "5.0",
      reviews:"38" ,
      imageUrl: "./products image/makeup/beetroot-lipbalm_white_bg-removebg-preview.png",
  },
  {
      name: "Glow Serum Foundation - 30ml | Ivory glow",
      price: "₹515",
      ratings: "4.8",
      reviews:"145" ,
      imageUrl: "./products image/makeup/1_ivory_glow_white_bg-removebg-preview.png",
  },
  {
      name: "Glow Serum BB Cream with Vitamin C & Turmeric - 25 g",
      price: "₹289",
      ratings: "4.9",
      reviews:"56" ,
      imageUrl: "./products image/makeup/1_2__1_white_bg-removebg-preview.png",
  },
]


var container3=document.querySelector(".container3")

var card3=""

mamaearthMakeUp.forEach(function(value){
  card3+=`
   <div class="card3">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})


container3.innerHTML=card3














const mamaearthOnionRange= [
  {
      name: "Onion Shampoo for Hair Fall Control and Hair Growth with Onion & Plant Keratin - 650 ml",
      price:" ₹507",
      ratings:"5.0",
      reviews:"79" ,
      imageUrl: "./products image/onionrange/white_bg-removebg-preview (1).png",
  },
  {
      name: "Anti-Hair Fall Spa Kit",
      price:"₹782",
      ratings:"4.8",
      reviews:"563" ,
      imageUrl: "./products image/onionrange/1_white_bg_31-removebg-preview.png",
  },
  {
      name: "Onion Shampoo with Onion & Plant Keratin for Hair Fall Control - 400ml",
      price:"₹429",
      ratings:"4.8",
      reviews:"306" ,
      imageUrl: "./products image/onionrange/with-ingredient-removebg-preview.png",
  },
  {
      name: "Onion Hair Serum with Onion and Biotin for Strong, Frizz-Free Hair - 100 ml",
      price:"₹263.",
      ratings:"4.8",
      reviews:"189" ,
      imageUrl: "./products image/onionrange/onion-hair-serum1200x1200_ad8hgvjdve7vcczs-removebg-preview.png",
  },
  {
      name: "Essential Anti-Hair Fall Kit",
      price:"₹1,201",
      ratings:"4.9",
      reviews:"185" ,
      imageUrl: "./products image/onionrange/1_white_bg_32-removebg-preview.png",
  },
  {
      name: "Onion Hair Styling Cream for Men with Onion & Redensyl for Styling-100gm",
      price:"₹263",
      ratings:"4.4",
      reviews:"91" ,
      imageUrl: "./products image/onionrange/onion-hair-styling-cream-removebg-preview.png",
  },
  {
      name: "Onion Hair Mask, For Hair Fall Control, With Onion Oil and Organic Bamboo Vinegar",
      price:"₹527",
      ratings:"4.8",
      reviews:"203" ,
      imageUrl: "./products image/onionrange/onion_hair_mask_1-removebg-preview.png",
  },
  {
      name: "Onion Scalp Serum with Onion and Niacinamide for Healthy Hair Growth - 50ml",
      price:"₹527",
      ratings:"4.8",
      reviews:"116" ,
      imageUrl: "./products image/onionrange/onion-scalp-serum-1-removebg-preview.png",
  },
]

  var container4=document.querySelector(".container4")

var card4=""

mamaearthOnionRange.forEach(function(value){
  card4+=`
   <div class="card4">
            <div class="imgBx">
              <img src="${value.imageUrl}">
            </div>
            <div class="contentBx">
              <h2>${value.name}</h2>
              <div class="rating">
                <h3>Rating :</h3>
                <span>${value.ratings}</span>
                <i class="ri-star-s-fill color-white"></i>
              </div>
              <div class="review">
                <h3>Review :${value.reviews}</h3>
              </div>
              <div class="flex justify-center">
                <button class="flex gap-6 relative mt-2 py-[4px] px-4  font-medium text-base rounded-full overflow-hidden bg-[#e6f7eb] rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-[#67564f] hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#beeaca] before:to-[#beeaca] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
                 ADD TO CART  <h1>${value.price}</h1>
                </button>
              </div>
            </div>
          </div>
        </div> `
})


container4.innerHTML=card4




var leftcurser = document.querySelector(".leftcurser")
var rightcurser = document.querySelector(".rightcurser")
var slides = document.querySelector(".container")
var slides = document.querySelector(".container2")
var slides = document.querySelector(".container3")
var slides = document.querySelector(".container4")

// container.addEventListener("wheel",function(evt){
//   evt.preventDefault();
//   container.scrollLeft +=evt.deltaY
// })
