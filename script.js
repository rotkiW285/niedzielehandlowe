var niedzieleHandlowe = [
  "2023-06-25",
  "2023-08-27",
  "2023-12-10",
  "2023-12-17",
  "2024-01-28",
];

function czyNiedzielaHandlowa() {
  var dzisiaj = new Date();
  var rok = dzisiaj.getFullYear();
  var miesiac = dzisiaj.getMonth() + 1; // Dodajemy 1, ponieważ miesiące są indeksowane od 0.
  var dzien = dzisiaj.getDate();

  var dzisiejszaData = rok + "-" + pad(miesiac) + "-" + pad(dzien); // Formatujemy datę jako "YYYY-MM-DD".

  if (niedzieleHandlowe.includes(dzisiejszaData)) {
    return true;
  } else {
    return false;
  }
}

// Funkcja pomocnicza do dodawania zera przed liczbami jednocyfrowymi.
function pad(number) {
  return number < 10 ? "0" + number : number;
}

function znajdzNajblizszaNiedzieleHandlowa() {
  var dzisiaj = new Date();
  var dzisiajTimestamp = dzisiaj.getTime();
  var najblizszaData = null;

  niedzieleHandlowe.forEach(function (data) {
    var dataTimestamp = new Date(data).getTime();
    if (dataTimestamp > dzisiajTimestamp && (najblizszaData === null || dataTimestamp < new Date(najblizszaData).getTime())) {
      najblizszaData = data;
    }
  });

  if (najblizszaData) {
    var najblizszaDateObj = new Date(najblizszaData);
    var dzien = najblizszaDateObj.getDate();
    var miesiac = najblizszaDateObj.getMonth() + 1;
    var rok = najblizszaDateObj.getFullYear();

    var formattedDate = pad(dzien) + "." + pad(miesiac) + "." + rok;
    return formattedDate;
  } else {
    return null;
  }
}

function sprawdzNiedzieleHandlowa() {
  var wynik = "";
  var najblizszaData = znajdzNajblizszaNiedzieleHandlowa();

  if (czyNiedzielaHandlowa()) {
    document.querySelector("h1").classList.add("niedziela-handlowa");
    wynik = "<p class='nh' style='color: lime;'>Dzisiaj jest niedziela handlowa! <br> Następna będzie " + najblizszaData + "</p>";
  } else {
    wynik = "<p class='nh' style='color: red;'>Nie, najbliższa niedziela handlowa jest " + najblizszaData + "</p>";
  }
  document.write(wynik);
}

sprawdzNiedzieleHandlowa();
