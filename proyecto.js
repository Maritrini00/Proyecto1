const RentaMesa= mesaID =>{
    let mesa=document.getElementById(mesaID);

    if(mesa.src.match('mesaOff.PNG')){
        mesa.src='mesaOn.PNG';
        tiempo(mesaID,"si");
    }else{
        mesa.src='mesaOff.PNG';
        tiempo(mesaID,"no");
        
        }
    
}
    
    const tiempo = (mesaID,renta) =>{
        let inicioRenta =document.getElementById("inicio"+mesaID)
        let finRenta= document.getElementById("fin"+mesaID)
        var Price;
        let finalPrice= document.getElementById("precio"+mesaID);
        let laHoraI = new Date();
        let horarioI = laHoraI.getHours();
        let minuteroI = laHoraI.getMinutes();
        let segunderoI = laHoraI.getSeconds();
        let laHoraF = new Date();
        let horarioF = laHoraF.getHours();
        let minuteroF = laHoraF.getMinutes();
        let segunderoF = laHoraF.getSeconds();
        if(minuteroI<10)
            minuteroI = "0" + minuteroI;
        if(segunderoI<10)
            segunderoI = "0" + segunderoI;
        if(minuteroF<10)
            minuteroF = "0" + minuteroF;
        if(segunderoF<10)
            segunderoF = "0" + segunderoF;

        if(renta=="si" && inicioRenta.innerHTML=="Hora de Inicio: "){
            inicioRenta.innerHTML= "Hora de Inicio: "+horarioI+":"+minuteroI+":"+segunderoI;
           
        }
        if(renta=="no" && finRenta.innerHTML=="Hora Final: " && finalPrice.innerHTML=="Precio: 0"){
            finRenta.innerHTML= "Hora Final: "+horarioF+":"+minuteroF+":"+segunderoF;
            let minutosTot=parseFloat(minuteroF)-parseFloat(minuteroI);
            Price=presio(minutosTot); 
            finalPrice.innerHTML="Precio: "+Price;   
        }
    }
    
    function presio(minuto){
        let price =minuto*0.83;
        return price;
    }