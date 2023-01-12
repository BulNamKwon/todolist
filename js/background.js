const fileNumber = Math.floor(Math.random() * 9);

const chosenimages = `${fileNumber}.jpg`;

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenimages}`;

document.body.appendChild(bgImage);

//니코

//const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg",];

//const chosenImages = images.[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");

//bgImage.src = `img/${chosenImages}`;

//document.body.appendChild(bgImage);
