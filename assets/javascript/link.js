const links = document.querySelectorAll("header ul li a");
/*Verificar  se o link e igual do url*/
function selecItem(link) {
  var href = link.href;
  var url = document.location.href;
  if (url.includes(href)) {
    link.classList.add("active");
  }
}
links.forEach(selecItem);

//Ativar itens do orçamento//

const parametros = new URLSearchParams(location.search);
function activeProduct(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}
parametros.forEach(activeProduct);
//Perguntas

const questions = document.querySelectorAll(".question button");
function activeQuestion(event) {
  const question = event.currentTarget;
  const controls = question.getAttribute("aria-controls");
  const response = document.getElementById(controls);
  response.classList.toggle("active");
  const active = response.classList.contains("active");
  question.setAttribute("aria-expanded", "true");
}
function eventQuestion(question) {
  question.addEventListener("click", activeQuestion);
}
questions.forEach(eventQuestion);

//Galeria de bicicletas
const gallerys = document.querySelectorAll(".bicicleta-imagens img");
const galleryContainer = document.querySelector(".bicicleta-imagens");
function trocarimage(event) {
  const img = event.currentTarget;
  galleryContainer.prepend(img);
}
function eventGallery(image) {
  image.addEventListener("click", trocarimage);
}
gallerys.forEach(eventGallery);

//Ativando puglin

if (window.SimpleAnime) {
  new SimpleAnime();
}
