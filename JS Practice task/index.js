function createProductCard(productName, price, imgUrl) {
  const cardBody = document.querySelector(".container");
  const imgElement = document.createElement("img");
  const pElement = document.createElement("p");
  const pElement1 = document.createElement("p");

  imgElement.style.height = "200px";
  imgElement.style.width = "200px";

  pElement.style.fontWeight = 700;
  pElement.style.fontSize = "25px";

  pElement1.style.fontWeight = 700;
  pElement1.style.fontSize = "25px";

  imgElement.src = imgUrl;
  pElement.textContent = productName;
  pElement1.textContent = price;

  cardBody.appendChild(imgElement);
  cardBody.appendChild(pElement);
  cardBody.appendChild(pElement1);
}
createProductCard(
  "Dog",
  "400$",
  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
);

function createCommentMessage(author, message, timestamp) {
  const msgBody = document.querySelector(".msgContainer");
  const Author = document.createElement("p");
  const Message = document.createElement("p");
  const TimeStamp = document.createElement("p");

  Author.style.fontWeight = 700;
  Author.style.fontSize = "25px";

  Message.style.fontSize = "20px";
  Message.style.fontWeight = "700";

  TimeStamp.style.fontWeight = 700;
  TimeStamp.style.fontSize = "15px";

  Author.textContent = author;
  Message.textContent = message;
  TimeStamp.textContent = timestamp;

  msgBody.append(Author);
  msgBody.append(Message);
  msgBody.append(TimeStamp);
}
createCommentMessage("Messi", "Hello Jugadores", "22.11.2024");

function createMenuItem(name, price, description) {
  const itemBody = document.querySelector(".itemContainer");
  const nameElement = document.createElement("h3");
  const priceElement = document.createElement("span");
  const descriptionElement = document.createElement("p");

  nameElement.textContent = name;
  priceElement.textContent = price;
  descriptionElement.textContent = description;

  itemBody.appendChild(nameElement);
  itemBody.appendChild(priceElement);
  itemBody.appendChild(descriptionElement);
}
createMenuItem("Apple", "999$", "Very delicious fruitt");
