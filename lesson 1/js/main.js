/* Базовые селекторы */

$("#id"); // Обращение по идентификатору (id) Элемент 1.
$(".class"); // Обращение по классу .class Элементов может быть несколько
$("div"); // Обращение по тегу
$("*"); // Обращение ко всем элементам

$(document).ready(function() {
  //   $("h2").css("border", "1px solid red");
  //   $("h2 + p").css("fontSize", "36px");
  //outer and inner
  //parent and children
  //prev + next
  //prev ~ next
  //   $("h2 ~ p").css("border", "2px solid blue");
  //a[href]
  //a[download]
  //a[href='#']
  //a[href^='http']start with
  //a[href!='#']
  //a[href$='ru']ended on ru
  //a[href*='la'] contains 'la'
  //a[href='#'],[download]or
  //a[href='#'][download] only 2 attr
  //fillter
  //   $("*:not(p)").css("background", "white");
  //   $("p:gt(0)").css("font-size", "38px");
  //   $("p:lt(1)").css("font-size", "38px");
  //   $("*:header").css("font-size", "58px");
  //   $("input:hidden").css("visibility", "visible");
  //   $("p:lang(ru)").css("font-size", "38px");
  //   $("p:contains(lorem)").css("font-size", "38px");
  //   $("p:empty")
  // .text("I am here")
  // .css("border", "3px solid red");
  //   $("p:has(span)").css("font-size", "38px");
  //   $("p:parent").css("border", "3px solid red");
  //   $("td:parent").css("background", "rgb(255,220,200)");
  //   $("input").css("border", "1px solid red");
  //   $("input:button").css("border", "1px solid red");
  //   $("input:checkbox").css("display", "block");
  //   $("input:radio").css("display", "block");
  //   $("input:text").css("display", "block");
  //   $("input:password").css("display", "block");
  //   $("input:submit").css("display", "block");
  //   $("input:reset").css("display", "block");
  //   $("input").focusin(function() {
  //     console.log(this);
  //     if ($("input:disabled")) {
  //       console.log(this);
  //     }
  //   });
  //   $("input:disabled").css("border", "3px solid red");
  //   $("input:enabled").css("border", "3px solid red");
  //events
  //   $("button").click(function(e) {
  //     e.preventDefault();
  //     console.log(this);
  //   });
  //   $("h2").dbclick(function(e) {
  //     e.preventDefault();
  //     console.log(this);
  //   });
  //   $("h2").mouseenter(function() {
  //     $("h2").toggle(
  //       1000,
  //       function() {
  //         $("h2").css("color", "red");
  //       },
  //       function() {
  //         $("h2").css("color", "blue");
  //       },
  //       function() {
  //         $("h2").css("color", "");
  //       }
  //     );
  //   });
  //   $("h2").mouseenter(function() {
  //     $(this).css("color", "red");
  //   });
  //   $("h2").mouseleave(function() {
  //     $(this).css("color", "");
  //   });
  //   $("p").mousedown(function() {
  //     $("h2").css("color", "blue");
  //   });
  // });
  //   $("p").mousedown(function() {
  //     $(this).toggle(
  //       function() {
  //         $(this).css("color", "blue");
  //       },
  //       function() {
  //         $(this).css("color", "red");
  //       },
  //       function() {
  //         $(this).css("color", "");
  //       }
  //     );
  //   });
  //   $("p").css("color", "red");
  //   $("p").mousemove(function() {
  //     $(this).toggle(function() {
  //       $(this).toggle(true);
  //     });
  //   });
  //   $("input").keydown(function(e) {
  //     console.log($(this).val());
  //     $(this).css("background", "red");
  //   });
  //   $("input").keyup(function(e) {
  //     // console.log($(this).val());
  //     $("p").text($(this).val());
  //     $(this).css("background", "red");
  //   });
  //   $("input").keypress(function(e) {
  //     if (e.which === 100) {
  //       console.log("You win");
  //     }
  //     console.log(e.which);
  //   });
  //BOM events
  //   $(window).resize(function() {
  //     console.log("you are changing sizes");
  //   });
  //   $(window).scroll(function(e) {
  //     console.log(e.currentTarget.pageYOffset);
  //   });
  //   $("p").click(function(e) {
  //     e.preventDefault();
  //     $("body").append("<p>Added elements</p>");
  //   });
  //   $("ul").on("click", "li", function(e) {
  //     e.preventDefault();
  //     $("ul").append("<li>Added elements</li>");
  //   });
  //delete event handler
  //   function addAndStop(e) {
  //     $("ul").append("<li>Add element</li>");
  //     $("ul").off("click");
  //   }
  //   $("ul").on("click", "li", addAndStop);
  //   $("input").focusin(function(e) {
  //     e.preventDefault();
  //     $(this).css("border", "1px solid red");
  //   });
});
