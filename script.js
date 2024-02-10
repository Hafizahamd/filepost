

let imgbox =  document.getElementById("imgbox");
let Qrimg = document.getElementById("Qrimg");
let Qrtext =  document.getElementById("Qrtext");







function QRGenerate(){


    Qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtext.value;
    imgbox.classList.add("show-img");

}