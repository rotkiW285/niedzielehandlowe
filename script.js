var niedzieleHandlowe = [
    "2023-06-25",
    "2023-08-27",
    "2023-12-17",
    "2023-12-24"
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

  function sprawdzNiedzieleHandlowa() {
    var wynik = "";
    if (czyNiedzielaHandlowa()) {
      document.querySelector("h1").classList.add("niedziela-handlowa");
      wynik = "Dzisiaj jest niedziela handlowa!";
    } else {
      wynik = "Dzisiaj nie jest niedziela handlowa.";
    }
    document.write("<p>" + wynik + "</p>");
  }

  sprawdzNiedzieleHandlowa();