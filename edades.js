let edad = prompt("Introduce tu edad");
if (edad%1 == 0){
    if (isNaN(edad)){
        alert("Ingresa una edad valida");
    }
    else {
        if(edad <=1 && edad >=3){
        alert("Estas dentro de la clasificación Toddler ");
    }
        if(edad <=5 && edad >=3)
    {
        alert("Estas dentro de la clasificación Preschool");
    }
        if(edad <=12 && edad >=5)
    {
        alert("Estas dentro de la clasificación Gradeschooler");
    }
        if(edad <=18 && edad >=12)
    {
        alert("Estas dentro de la clasificación Teenager");
    }
        if(edad <=21 && edad >=18)
    {
        alert("Estas dentro de la clasificación Young Adult");
    }
        if(edad >=21)
    {
        alert("Estas dentro de la clasificación Adult");
    }
    }
}
else{
    alert("Ingresa un Numero superior a 0");
    }
