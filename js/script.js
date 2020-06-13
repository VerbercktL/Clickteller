function msg() {
    alert("Hello Javatpoint");
}

function getTime() {
    var date = new Date();
    var uur = date.getHours();
    var dag = date.getDay();
    var aanspreking;
    var dagbepaling;
    
   
   
    
    //if else structuur
    if (uur > 0 && uur < 6){
        aanspreking="Goedenacht Lenn";
    }else if(uur > 6 && uur<9){
        aanspreking="Goedemorgend Lenn";
    }else if(uur > 9 && uur<17){
        aanspreking="Goeiedag Lenn";
    }else if(uur > 17 && uur<24){
        aanspreking="Goedeavond Lenn";
    }
    
    switch (dag){
        case 0:
            dagbepaling="zondag";
            break;
        case 1:
            dagbepaling="maandag";
            break;
        case 2:
            dagbepaling="dinsdag";
            break;
        case 3:
            dagbepaling="woensdag";
            break;
        case 4:
            dagbepaling="donderdag";
            break;
        case 5:
            dagbepaling="vrijdag";
            break;
        case 6:
            dagbepaling="zaterdag";
            break;
    }
    
    document.getElementById("ptext").innerHTML= aanspreking + ", het is vandaag " + dagbepaling;

}