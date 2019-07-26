var correct = 0;
var incorrect = 0;
var unanswered = 5;

$("#unanswered-score").text(unanswered);


$("#q1").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q2").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q3").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q4").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q5").on("click", function () {
  unanswered--
  incorrect++
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q6").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q7").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q8").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q9").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q10").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q11").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q12").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q13").on("click", function () {
  correct++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q14").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#q15").on("click", function () {
  incorrect++
  unanswered--
  $("#correct-score").text(correct);
  $("#incorrect-score").text(incorrect);
  $("#unanswered-score").text(unanswered);
})

$("#results").hide()
$("#questions").hide()


$("#startbutton").on("click", function () {
  $("#questions").show()
  $("#startbutton").hide()


  setTimeout(sixtySeconds, 4000 * 10);

  function sixtySeconds() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    $("#questions").hide()
    $("#results").show()


    alert("Time is up")
    $('html, body').animate({
      scrollTop: 0
    }, 'fast');
  }
});