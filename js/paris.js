
function sendBet() {

    var betgrid = document.getElementById("bet-grid");

    try {
        var match1 = document.querySelector('input[name="match1"]:checked').value;
        var match2 = document.querySelector('input[name="match2"]:checked').value;
        var match3 = document.querySelector('input[name="match3"]:checked').value;
        var match4 = document.querySelector('input[name="match4"]:checked').value;
        var match5 = document.querySelector('input[name="match5"]:checked').value;
        var match6 = document.querySelector('input[name="match6"]:checked').value;

        betgrid.style.display = "none";


    } catch (e) {
        alert("Vous devez parier sur tous les matchs pour valider votre pari.");
        return;
    }



}