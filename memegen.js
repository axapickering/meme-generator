document.addEventListener("DOMContentLoaded", () => {
const form = document.querySelector("#meme-info");
const container = document.querySelector("#meme-container");
const memes = document.querySelectorAll(".meme");

form.addEventListener("submit", event => {
  event.preventDefault();
  const topText = document.querySelector("#top-text").value;
  const bottomText = document.querySelector("#bottom-text").value;
  const image = document.querySelector("#meme-image-URL").value;
  container.insertAdjacentHTML("beforeend",`<div class="meme">
                                              <img class= "meme-image" src="${image}"></src>
                                              <h4 class="meme-top-text">${topText}</h4>
                                              <h4 class="meme-bottom-text">${bottomText}</h4>
                                            </div>`);
});alert("EventListener added");

memes.forEach(meme => meme.addEventListener("click",event => {
                                              event.currentTarget.classList.toggle("selected-meme");
                                            }));
});