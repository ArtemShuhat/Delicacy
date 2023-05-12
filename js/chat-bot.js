"use strict";
const phrases = ["Hello", "Click to open menu", "Have some questions? Call this number: 044-202-75-89", "delivery"];
const bye = "Bye!";

function splitString(str, len) {
  let result = [];
  while (str.length > len) {
    result.push(str.substr(0, len));
    str = str.substr(len);
  }
  result.push(str);
  return result.join("<br>");
}

$("#send").click(function () {
  let q = $("#chat-message").val(),
    form = $("#chatbot form")[0];

  if (q.trim() != "") {
    let qFormatted = splitString(q.trim(), 30);
    $("#answers").append(`<div class="human_answ">${qFormatted}</div>`);
    let ql = q.toLowerCase();
    let bl = bye.substr(0, bye.length - 1).toLowerCase();
    setTimeout(function () {
      if (ql.search(bl) != -1) {
        $("#answers").append(`<div class="bot_answ">${bye}</div>`);
      } else if (ql === "hello") {
        $("#answers").append(`<div class="bot_answ">${phrases[0]}</div>`);
      } else if (ql === "menu") {
        if (window.location.href.includes("menu.html")) {
          $("#answers").append(`<div class="bot_answ">You are already on the menu</div>`);
        } else {
          $("#answers").append(
            `<div class="bot_answ" style="cursor: pointer" onclick="window.location.replace('./src/menu.html'); $('#menu').html('This is the menu')">${phrases[1]}</div>`
          );
        }
      } else if (ql === "number") {
        $("#answers").append(`<div class="bot_answ">${phrases[2]}</div>`);
      } else {
        $("#answers").append(`<div class="bot_answ">${phrases[Math.floor(Math.random() * phrases.length)]}</div>`);
      }
      form.scrollTo({
        top: form.scrollHeight + form.clientHeight,
        behavior: "smooth",
      });
    }, 1000);
  }
  return false;
});
