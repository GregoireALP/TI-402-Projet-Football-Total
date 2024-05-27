
document.addEventListener("DOMContentLoaded", async function () {

    const res = await fetch(new Request("../data/classement_buteur.json"))
    const databuteur = await res.json();


    const butLigue1 = document.getElementById('but-ligue1');
    databuteur.ligue1.forEach(function (buteur, i) {

        var row = butLigue1.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butLigue1His = document.getElementById('but-ligue1-his');
    databuteur.ligue1his.forEach(function (buteur, i) {

        var row = butLigue1His.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butLigA = document.getElementById('but-liga');
    databuteur.liga.forEach(function (buteur, i) {

        var row = butLigA.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butLigAHis = document.getElementById('but-liga-his');
    databuteur.ligahis.forEach(function (buteur, i) {

        var row = butLigAHis.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butSerieA = document.getElementById('but-seriea');
    databuteur.seriea.forEach(function (buteur, i) {

        var row = butSerieA.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butSerieAHis = document.getElementById('but-seriea-his');
    databuteur.serieahis.forEach(function (buteur, i) {

        var row = butSerieAHis.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butPremierleague = document.getElementById('but-premierleague');
    databuteur.premierleague.forEach(function (buteur, i) {

        var row = butPremierleague.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butPremierLeagueHis = document.getElementById('but-premierleague-his');
    databuteur.premierleaguehis.forEach(function (buteur, i) {

        var row = butPremierLeagueHis.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butBundesliga = document.getElementById('but-bundesliga');
    databuteur.bundesliga.forEach(function (buteur, i) {

        var row = butBundesliga.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

    const butBundesligaHis = document.getElementById('but-bundesliga-his');
    databuteur.bundesligahis.forEach(function (buteur, i) {

        var row = butBundesligaHis.insertRow(i + 1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = buteur.nom;
        cell2.textContent = buteur.buts;
        cell3.textContent = buteur.matchs;
    });

});