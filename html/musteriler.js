var mutlu = {
    id: 1,
    isim: "mutlu",
    yas: 25,
    adres: "Umraniye/iSTANBUL",
    hesapLimiti: 20000
}

function musterileriyükle(insan) {

    var idElement = document.getElementById("id");
    idElement.innerHTML = insan.id;


    var isimElement = document.getElementById("isim");
    isimElement.innerHTML = insan.isim;

    var yasElement = document.getElementById("yas");
    yasElement.innerHTML = insan.yas;

    var adresElement = document.getElementById("adres");
    adresElement.innerHTML = insan.adres;

    var hesapLimitiElement = document.getElementById("hesaplimiti");
    hesapLimitiElement.innerHTML = insan.hesapLimiti;

}


function yeniyukle(insan) {

    var idElement = document.getElementById("yenimusteri-id");
    idElement.innerHTML = insan.id;


    var isimElement = document.getElementById("yenimusteri-isim");
    isimElement.innerHTML = insan.isim;

    var yasElement = document.getElementById("yenimusteri-yas");
    yasElement.innerHTML = insan.yas;

    var adresElement = document.getElementById("yenimusteri-adres");
    adresElement.innerHTML = insan.adres;

    var hesapLimitiElement = document.getElementById("yenimusteri-hesapLimiti");
    hesapLimitiElement.innerHTML = insan.hesapLimiti;

}
function yukle() {
    musterileriyükle(mutlu);
}


function yenimusteriekle() {
    var yenimusteri = {};

    var textId = document.getElementById("text-id");
    yenimusteri.id = textId.value;

    var textİsim = document.getElementById("text-isim");
    yenimusteri.isim = textİsim.value;


    var textYas = document.getElementById("text-yas");
    yenimusteri.yas = textYas.value;

    var textAdres = document.getElementById("text-adres");
    yenimusteri.adres = textAdres.value;

    var textHesapLimiti = document.getElementById("text-hesapLimiti");
    yenimusteri.hesapLimiti = textHesapLimiti.value;

    textId.value = "";
    textİsim.value = "";
    textYas.value = "";
    textAdres.value = "";
    textHesapLimiti.value = "";


    var table = document.getElementById("table");
    var tablebody = table.getElementsByTagName("tbody")[0];

    var yenisatir = tablebody.insertRow();

    var idTd = yenisatir.insertCell();
    idTd.innerHTML = yenimusteri.id;

    var isimTd = yenisatir.insertCell();
    isimTd.innerHTML = yenimusteri.isim;
    
    var yasTd = yenisatir.insertCell();
    yasTd.innerHTML = yenimusteri.yas;

    var adresTd = yenisatir.insertCell();
    adresTd.innerHTML = yenimusteri.adres;

    var hesapLimitiTd = yenisatir.insertCell();
    hesapLimitiTd.innerHTML = yenimusteri.hesapLimiti;






}



