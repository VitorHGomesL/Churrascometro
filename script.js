/* 

crianças valem por 0.5 adultos.
--------------------------------------------------------------------
Carne- 400g de carne por pessoa para churrascos com menos de 6 horas
de duração, 650g para churrascos com mais de 6 horas de duração.
--------------------------------------------------------------------
Cerveja- 1200ml por adulto para churrascos com menos de 6 horas de 
duração, 2000ml para churrascos com mais de 6 horas de duração,
NÃO CONTANDO AS CRIANÇAS.
--------------------------------------------------------------------
Refrigerante - 1000ml por pessoa para churrascos com menos de 6 horas
de duração, 1500ml para churrascos acima de 6 horas.

*/

function calculos() {
    let carnefim;
    let cervafim;
    let refrifim;
    let adultos = document.getElementById("adultos").value;
    adultos = adultos * 1;
    let crianças = document.getElementById("kids").value;
    crianças = crianças * 0.5;
    let tempo = document.getElementById("tempo").value;
    tempo = tempo * 1;
    let carnecamp = document.getElementById("carneresult");
    let cervacamp = document.getElementById("cervejaresult");
    let refricamp = document.getElementById("refriresult");
    let fim = document.getElementById("Results");
    let pessoas = adultos + crianças;
    if (adultos == "" || crianças == "" || tempo == "") {
        alert("Insira os dados necessarios")
    }
    else if (tempo < 6) {
        carnefim = (pessoas * 400) / 1000;
        cervafim = Math.round((adultos * 1200) / 350);
        refrifim = (pessoas * 1000) / 1000;
        carnecamp.innerHTML = carnefim + " Kg de carne";
        cervacamp.innerHTML = cervafim + " latas de cerveja";
        refricamp.innerHTML = refrifim + " Litros";
        fim.style.display = "block";
    }
    else if (tempo >= 6) {
        carnefim = (pessoas * 650) / 1000;
        cervafim = (adultos * 2000) / 1000;
        refrifim = (pessoas * 1500) / 1000;
        carnecamp.innerHTML = carnefim + " Kg de carne";
        cervacamp.innerHTML = cervafim + " Latas de cerveja";
        refricamp.innerHTML = refrifim + " Litros ";
        fim.style.display = "block";
}
}
