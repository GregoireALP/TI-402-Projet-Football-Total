document.addEventListener("DOMContentLoaded", async function () {

  const res = await fetch(new Request("../data/classement_ligue1.json"))
  const classementligue1 = await res.json();

  const classLigue1 = document.getElementById('classements_ligue1');
  classementligue1.forEach(function (equipe, i) {

      var row = classLigue1.insertRow(i + 1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);



      cell1.textContent = equipe.POSITION;
      cell2.textContent = equipe.CLUB;
      cell3.textContent = equipe.POINTS;
      cell4.textContent = equipe.JOUÉS;
      cell5.textContent = equipe.GAGNÉS;
      cell6.textContent = equipe.NULS;
      cell7.textContent = equipe.PERDUS;
      cell8.textContent = equipe.BUTS_POUR;
      cell9.textContent = equipe.BUTS_CONTRE;
      cell10.textContent = equipe.DIFF;

  });
});

document.addEventListener("DOMContentLoaded", async function () {

  const res = await fetch(new Request("../data/classement_liga.json"))
  const classementliga = await res.json();

  const classLiga = document.getElementById('classements_liga');
  classementliga.forEach(function (equipe, i) {

      var row = classLiga.insertRow(i + 1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);



      cell1.textContent = equipe.POSITION;
      cell2.textContent = equipe.CLUB;
      cell3.textContent = equipe.POINTS;
      cell4.textContent = equipe.JOUÉS;
      cell5.textContent = equipe.GAGNÉS;
      cell6.textContent = equipe.NULS;
      cell7.textContent = equipe.PERDUS;
      cell8.textContent = equipe.BUTS_POUR;
      cell9.textContent = equipe.BUTS_CONTRE;
      cell10.textContent = equipe.DIFF;

  });
});

document.addEventListener("DOMContentLoaded", async function () {

  const res = await fetch(new Request("../data/classement_seriea.json"))
  const classementseriea = await res.json();

  const classSeriea = document.getElementById('classements_serieA');
  classementseriea.forEach(function (equipe, i) {

      var row = classSeriea.insertRow(i + 1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);



      cell1.textContent = equipe.POSITION;
      cell2.textContent = equipe.CLUB;
      cell3.textContent = equipe.POINTS;
      cell4.textContent = equipe.JOUÉS;
      cell5.textContent = equipe.GAGNÉS;
      cell6.textContent = equipe.NULS;
      cell7.textContent = equipe.PERDUS;
      cell8.textContent = equipe.BUTS_POUR;
      cell9.textContent = equipe.BUTS_CONTRE;
      cell10.textContent = equipe.DIFF;

  });
});


document.addEventListener("DOMContentLoaded", async function () {

  const res = await fetch(new Request("../data/classement_premierleague.json"))
  const classementpremierleague = await res.json();

  const classpremierleague = document.getElementById('classements_premierleague');
  classementpremierleague.forEach(function (equipe, i) {

      var row = classpremierleague.insertRow(i + 1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);



      cell1.textContent = equipe.POSITION;
      cell2.textContent = equipe.CLUB;
      cell3.textContent = equipe.POINTS;
      cell4.textContent = equipe.JOUÉS;
      cell5.textContent = equipe.GAGNÉS;
      cell6.textContent = equipe.NULS;
      cell7.textContent = equipe.PERDUS;
      cell8.textContent = equipe.BUTS_POUR;
      cell9.textContent = equipe.BUTS_CONTRE;
      cell10.textContent = equipe.DIFF;

  });
});

document.addEventListener("DOMContentLoaded", async function () {

  const res = await fetch(new Request("../data/classement_bundesliga.json"))
  const classementbundesliga = await res.json();

  const classbundeliga = document.getElementById('classements_bundesliga');
  classementbundesliga.forEach(function (equipe, i) {

      var row = classbundeliga.insertRow(i + 1);

      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);
      var cell9 = row.insertCell(8);
      var cell10 = row.insertCell(9);



      cell1.textContent = equipe.POSITION;
      cell2.textContent = equipe.CLUB;
      cell3.textContent = equipe.POINTS;
      cell4.textContent = equipe.JOUÉS;
      cell5.textContent = equipe.GAGNÉS;
      cell6.textContent = equipe.NULS;
      cell7.textContent = equipe.PERDUS;
      cell8.textContent = equipe.BUTS_POUR;
      cell9.textContent = equipe.BUTS_CONTRE;
      cell10.textContent = equipe.DIFF;

  });
});
