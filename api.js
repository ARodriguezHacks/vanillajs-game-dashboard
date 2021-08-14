// const randomMessage = function () {
//   setTimeout(() => {
//     const h3 = document.createElement("h3");
//   });
// };

const randomMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 5000);
});

randomMessage.then((value) => {
  console.log(value);
});

console.log(randomMessage);

const images = fetch("https://picsum.photos/v2/list?limit=3")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log(images);
