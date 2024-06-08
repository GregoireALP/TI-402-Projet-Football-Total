
function sendBet() {

    var betgrid = document.getElementById("bet-grid");


    try {
        var match1 = document.querySelector('input[name="match1"]:checked').value;
        var match2 = document.querySelector('input[name="match2"]:checked').value;
        var match3 = document.querySelector('input[name="match3"]:checked').value;
        var match4 = document.querySelector('input[name="match4"]:checked').value;
        var match5 = document.querySelector('input[name="match5"]:checked').value;
        var match6 = document.querySelector('input[name="match6"]:checked').value;

        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;

        if (nom == "" || prenom == "") {
            throw "empty";
        }

        betgrid.style.display = "none";
        document.getElementById("bet-res").style.display = "block";

        var score = 0;
        var isWin = false
        if (match1 == "1") {
            score += 1;
        }
        if (match2 == "N") {
            score += 1;
        }
        if (match3 == "1") {
            score += 1;
        }
        if (match4 == "2") {
            score += 1;
        }
        if (match5 == "1") {
            score += 1;
        }
        if (match6 == "N") {
            score += 1;
        }

        if(score >= 5) {
            isWin = true;
        }

        var nomres = document.getElementById("bet-res-nom");
        var prenomres = document.getElementById("bet-res-prenom");
        var betlose = document.getElementById("bet-lose");
        var betwin = document.getElementById("bet-win");

        nomres.textContent = "Nom: " + nom;
        prenomres.textContent = "Prénom: " + prenom;

        if(!isWin) {
            betlose.textContent = "Vous avez perdu. Vous avez obtenu " + score + " bon(s) résultat(s).";
        } else {
            betwin.textContent = "Vous avez gagné. Vous avez obtenu " + score + " bon(s) résultat(s).";
        }

        var betreset = document.getElementById("bet-reset");
        betreset.addEventListener("click", function() {
            betgrid.style.display = "block";
            document.getElementById("bet-res").style.display = "none";
            
            var radios = document.querySelectorAll('input[type="radio"]');
            for (var i = 0; i < radios.length; i++) {
                radios[i].checked = false;
            }

            document.getElementById("nom").value = "";
            document.getElementById("prenom").value = "";

            betlose.textContent = "";
            betwin.textContent = "";

        });

    } catch (e) {
        alert("Vous devez parier sur tous les matchs pour valider votre pari ET entrer votre nom et prénom.");
        return;
    }



}