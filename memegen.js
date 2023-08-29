const form = document.querySelector("#meme-info");
const container = document.querySelector("#meme-container");
const removeButton = document.querySelector("#remove-button");

form.addEventListener("submit", event => {
  // preventing page reload
  event.preventDefault();
  // gathering form info to use for meme
  const topText = document.querySelector("#top-text").value.toUpperCase();
  const bottomText = document.querySelector("#bottom-text").value.toUpperCase();
  const image = document.querySelector("#meme-image-URL").value;

  // meme creation
  let meme = document.createElement("div");
  meme.classList.add("meme");
  meme.innerHTML = `<img class= "meme-image" src="${image}"></src>
  <h4 class="meme-top-text">${topText}</h4>
  <h4 class="meme-bottom-text">${bottomText}</h4>`;
  container.appendChild(meme);

  // adding event listener so we can select certain memes
  meme.addEventListener("click", event => {
    event.currentTarget.classList.toggle("selected-meme");
  })


});

// allows deletion of selected memes via backspace
document.addEventListener("keyup", event => {
  if (event.key === "Backspace") {
    let selectedMemes = document.querySelectorAll(".selected-meme");
    selectedMemes.forEach(meme => meme.remove());
  }
})


removeButton.addEventListener("click", event => {
  event.preventDefault();
  let selectedMemes = document.querySelectorAll(".selected-meme");
  selectedMemes.forEach(meme => meme.remove());
})
