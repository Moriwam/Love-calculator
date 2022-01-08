var yourName = document.getElementById("your-name"),
  theirName = document.getElementById("their-name"),
  calcBtn = document.querySelector("button"),
  yourlovescoreis = document.getElementById("yourlovescoreis"),
  loveScore = Math.random() * 100,
  loveInfo = document.getElementById("loveinfo"),
  reloadBtn = document.getElementById("reload");
loveScore = Math.floor(loveScore) + 1;
// Love Score Counter
function love() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  (async function () {
    var i = 0;
    while (i < loveScore) {
      document.getElementById("score").innerHTML = i + "%";
      await sleep(20);
      i++;
    }
  })();
}
// Add eventlistener to button
calcBtn.addEventListener("click", function (e) {
  loveScore = Math.random() * 100; //delete this line if you want to keep the same value in the same session.
  e.preventDefault();
  if (yourName.value == "" && theirName.value == "") {
    alert("You must input both names");
  }
  //lovescore conditions
  else if (loveScore <= 10) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Get the hell out of here..";
  } else if (loveScore <= 20) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML =
      "<b>You</b> and " +
      "<b>" +
      capitalize_Words(theirName.value) +
      "</b>" +
      " You and your lover are just friends";
  } else if (loveScore <= 30) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " You and your lover are just friends..!! ";
  } else if (loveScore <= 40) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Your lover have another affair";
  } else if (loveScore <= 50) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Concentrate on your study";
  } else if (loveScore <= 60) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Stop dreaming";
  } else if (loveScore <= 70) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Build a better carrier for marrying your lover";
  } else if (loveScore <= 80) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Talk to your family about your lover.";
  } else if (loveScore <= 100) {
    yourlovescoreis.innerHTML = "Your love percentage is";
    love();
    reloadBtn.style.display = "block";
    loveInfo.innerHTML = " Get married";
  }
});
