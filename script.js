
    var guessnumber = document.getElementById("guessnumber");
    var result = document.getElementById("result");
    var score = document.getElementById("score");
    var checkBtn = document.getElementById("checkBtn");
    var playAgainBtn = document.getElementById("playAgainBtn");

    var random = Math.floor(Math.random() * 10) + 1;
    var tscore = 10;

    function check() {
      var enternumber = Number(guessnumber.value);

      if (enternumber === random) {
        result.textContent = "🎉 Right! You guessed it!";
        alert("🏆 YOU WON!");
        endGame();
      } else {
        tscore -= 1;
        if (tscore === 0) {
          result.textContent = "💥 Game Over! The number was " + random;
          alert("❌ You lost! Try again.");
          endGame();
        } else {
          result.textContent = enternumber > random ? "📉 Too high! Try again." : "📈 Too low! Try again.";
        }
        score.textContent = "Score: " + tscore;
      }
    }

    function endGame() {
      checkBtn.disabled = true;
      guessnumber.disabled = true;
      playAgainBtn.style.display = "inline-block";
    }

    function resetGame() {
      tscore = 10;
      random = Math.floor(Math.random() * 10) + 1;
      guessnumber.value = "";
      result.textContent = "🤔 Start guessing!";
      score.textContent = "Score: 10";
      checkBtn.disabled = false;
      guessnumber.disabled = false;
      playAgainBtn.style.display = "none";
    }
 