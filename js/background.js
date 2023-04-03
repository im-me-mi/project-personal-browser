const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

// const newDiv = document.createElement("section");

// const newContents = document.createElement("div");

// const newImg = document.createElement("img");

// newImg.src = `img/02.jpg`;

// newContents.appendChild(newImg);
// newDiv.appendChild(newContents);
// document.body.appendChild(newDiv);
