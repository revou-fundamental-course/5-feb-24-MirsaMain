document.getElementById("convert").onclick = tempConvert;
document.getElementById("clear").onclick = clearForm;

function tempConvert() {
  var celcius = document.getElementById("celcius").value;
  var fahrenheit = document.getElementById("fahrenheit").value;
  var caraKalkulasi = "cek";

  if (fahrenheit != "") {
    celcius = (parseFloat(fahrenheit) - 32) / 1.8;
    caraKalkulasi = "(" + fahrenheit + "°F - 32) / 1.8 = " + celcius.toFixed(1) + "°C";
  } else {
    fahrenheit = parseFloat(celcius) * 1.8 + 32;
    caraKalkulasi = celcius + "°C * 1.8 + 32 = " + fahrenheit.toFixed(1) + "°F";
  }

  document.getElementById("celcius").value = parseFloat(celcius).toFixed(1);
  document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);

  //   Kalkulasi
  document.getElementById("kalkulasi").innerText = caraKalkulasi;
}

function clearForm() {
  document.getElementById("celcius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("kalkulasi").innerText = "";
}

const sr = ScrollReveal({
  distance: "65px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal("#home", { delay: 200, origin: "right" });
sr.reveal("#courses", { delay: 200, origin: "left" });
sr.reveal("#partners", { delay: 200, origin: "top" });
sr.reveal(".kolom", { delay: 200, origin: "top" });
sr.reveal(".kartu-tutor", { delay: 200, origin: "bottom" });
sr.reveal(".foot1", { delay: 200, origin: "top" });
sr.reveal(".foot2", { delay: 400, origin: "top" });
sr.reveal(".foot3", { delay: 600, origin: "top" });
sr.reveal(".foot4", { delay: 800, origin: "top" });
sr.reveal("#copyright", { delay: 200, origin: "bottom" });
