const carddisp = document.getElementById("numdisp");
const cardName = document.getElementById("name");
const monthdisp = document.getElementById("month");
const yeardisp = document.getElementById("year");
const monthjs = document.getElementById("CardMonth");
const yearjs = document.getElementById("cardyear");
const cardjs = document.getElementById("cardnum");
const namejs = document.getElementById("cardname");
const cvcdisp = document.getElementById("cvcode");
const cvcjs = document.getElementById("cvcnum");
const done = document.querySelector(".fill");
const send = document.getElementById("confirm");
const form = document.querySelector("form");


function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardNumber(e) {
    carddisp.innerText = format(e.target.value);
}
function setCardMonth(e) {
  monthdisp.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cvcdisp.innerText = format(e.target.value);
}
function setCardYear(e) {
  yeardisp.innerText = format(e.target.value);
}


function handleSubmit(e) {
    e.preventDefault();
    if (!namejs.value) {
      namejs.classList.add('error');
      namejs.parentElement.classList.add("err")
    } else {
      namejs.classList.remove("error");
      namejs.parentElement.classList.remove("err");
    }
    if (!cardjs.value) {
      cardjs.classList.add('error')
      cardjs.parentElement.classList.add("err");
    } else if (cardjs.value.length < 16) {
        cardjs.classList.add("error")
    } else {
      cardjs.classList.remove("error");
      cardjs.parentElement.classList.remove("err");
    }
    if (!monthjs.value) {
      monthjs.classList.add("error")
      monthjs.parentElement.classList.add("err");
    } else {
      monthjs.classList.remove("error");
      monthjs.parentElement.classList.remove("err");
    }
    if (!yearjs.value) {
      yearjs.classList.add("error")
      yearjs.parentElement.classList.add("err");
    } else {
      yearjs.classList.remove("error");
      yearjs.parentElement.classList.remove("err");
    }
    if (!cvcjs.value) {
      cvcjs.classList.add("error")
      cvcjs.parentElement.classList.add("err");
    } else {
      cvcjs.classList.remove("error");
      cvcjs.parentElement.classList.remove("err");
    }
    if (
      namejs.value && cardjs.value && monthjs.value && yearjs.value && cvcjs.value && cardjs.value.length == 16
    ) {
      done.classList.remove("hidden");
      form.classList.add("hidden");
    }

}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

namejs.addEventListener("keyup", setCardName);
cardjs.addEventListener("keyup", setCardNumber);
monthjs.addEventListener("keyup", setCardMonth);
cvcjs.addEventListener("keyup", setCardCvc);
yearjs.addEventListener("keyup", setCardYear);
send.addEventListener("click", handleSubmit);
fill
