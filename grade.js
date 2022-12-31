function calculate() {
  var a = parseInt(document.getElementById("entryNumOne").value);
  var b = parseInt(document.getElementById("entryNumTwo").value);
  var c = parseInt(document.getElementById("entryNumThree").value);
  var d = parseInt(document.getElementById("entryNumFour").value);
  var e = parseInt(document.getElementById("entryNumFive").value);
  var f = parseInt(document.getElementById("entryNumSix").value);
  var g = parseInt(document.getElementById("entryNumSeven").value);
  var h = parseInt(document.getElementById("entryNumEight").value);
  var i = parseInt(document.getElementById("entryNumNine").value);
  var j = parseInt(document.getElementById("entryNumTen").value);
  var k = parseInt(document.getElementById("entryNumEleven").value);
  var l = parseInt(document.getElementById("entryNumTwelve").value);
  if (
    a > 60 ||
    b > 60 ||
    c > 60 ||
    d > 60 ||
    e > 60 ||
    f > 60 ||
    g > 60 ||
    h > 60 ||
    i > 60 ||
    j > 60 ||
    k > 60 ||
    l > 60
  ) {
    alert("Please, enter your right obtained marks");
  } else {
    var obtain = a + b + c + d + e + f + g + h + i + j + k + l;
    document.getElementById("obtain").innerHTML = obtain;
    var per = parseFloat((obtain / 720) * 100).toFixed(2);
    document.getElementById("per").innerHTML = per + "%";
    var avr = parseFloat(obtain / 12).toFixed(2);
    document.getElementById("avr").innerHTML = avr;
    // ...............................................
    if (
      a >= 15 &&
      b >= 15 &&
      c >= 15 &&
      d >= 15 &&
      e >= 15 &&
      f >= 15 &&
      g >= 15 &&
      h >= 15 &&
      i >= 15 &&
      j >= 15 &&
      k >= 15 &&
      l >= 15
    ) {
      document.getElementById("remarks").innerHTML = "Pass";
    } else if (
      a >= 50 &&
      b >= 50 &&
      c >= 50 &&
      d >= 50 &&
      e >= 50 &&
      f >= 50 &&
      g >= 50 &&
      h >= 50 &&
      i >= 50 &&
      j >= 50 &&
      k >= 50 &&
      l >= 50
    ) {
      document.getElementById("remarks").innerHTML = "Excellent";
    } else if (
      a < 50 &&
      b < 50 &&
      c < 50 &&
      d < 50 &&
      e < 50 &&
      f < 50 &&
      g < 50 &&
      h < 50 &&
      i < 50 &&
      j < 50 &&
      k < 50 &&
      l < 50
    ) {
      document.getElementById("remarks").innerHTML = "Good";
    } else {
      document.getElementById("remarks").innerHTML =
        "Go for Recheck/Resubmittion";
      alert("Try to submit/recheck your assignment within deadline");
    }

    if (
      avr >= 15 &&
      a >= 15 &&
      b >= 15 &&
      c >= 15 &&
      d >= 15 &&
      e >= 15 &&
      f >= 15 &&
      g >= 15 &&
      h >= 15 &&
      i >= 15 &&
      j >= 15 &&
      k >= 15 &&
      l >= 15
    ) {
      document.getElementById("reward").textContent = "ACC";
    } else if (avr >= 48 && obtain >= 576) {
      document.getElementById("reward").textContent = "SCIC";
    } else {
      document.getElementById("reward").textContent = "Reset Course";
      alert(
        "Sorry!If you did not complete this course 'or' get average pass mark within extended deadline,you don't get access to 'Advance Crash Course'"
      );
    }
  }
}
