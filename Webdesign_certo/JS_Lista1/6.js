function mostrarDobro(numero) {
    if (numero <= 0) {
        console.log("Só é aceito números positivos maiores que zero");
    } else {
        const dobro = numero * 2;
        console.log(`O dobro de ${numero} é ${dobro}`);
    }
}

mostrarDobro(5);  
mostrarDobro(-3); 
mostrarDobro(0);  
