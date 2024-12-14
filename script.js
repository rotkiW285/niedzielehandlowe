var niedzieleHandlowe = [
  "2024-12-15",
  "2024-12-22",
  "2025-01-26",
  "2025-04-13",
  "2025-04-27",
  "2025-06-29",
  "2025-08-31",
  // "2025-12-07", jesli prezydent podpisze ustawe
  "2025-12-14",
  "2025-12-21",
];

function czyNiedzielaHandlowa() {
  var dzisiaj = new Date();
  var rok = dzisiaj.getFullYear();
  var miesiac = dzisiaj.getMonth() + 1;
  var dzien = dzisiaj.getDate();

  var dzisiejszaData = rok + "-" + pad(miesiac) + "-" + pad(dzien);

  if (niedzieleHandlowe.includes(dzisiejszaData)) {
    return true;
  } else {
    return false;
  }
}

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
    wynik = "<p class='nh' style='color: lime;'>Tak! <br><br> Następna handlowa będzie " + najblizszaData + "</p>";
  } else {
    wynik = "<p class='nh' style='color: red;'>Nie, najbliższa handlowa będzie " + najblizszaData + "</p>";
  }
  document.write(wynik);

  var jsonOutput = document.createElement("api");
  jsonOutput.textContent = generujJSONNiedzielaHandlowa();
  document.body.appendChild(jsonOutput);
}

function generujJSONNiedzielaHandlowa() {
  var dzisiajHandlowa = czyNiedzielaHandlowa();
  var najblizszaNiedziela = znajdzNajblizszaNiedzieleHandlowa();

  var wynik = {
    isHandlowa: dzisiajHandlowa,
    nextHandlowa: najblizszaNiedziela
  };

  return JSON.stringify(wynik, null, 2);
}

sprawdzNiedzieleHandlowa();