function jugar() {
    let nivel = 1;

    // Nivel 1: Dados
    while (nivel === 1) {
        let dado1 = Math.floor(Math.random() * 12) + 1;
        let dado2 = Math.floor(Math.random() * 12) + 1;
        let suma = dado1 + dado2;

        alert(`Lanzaste los dados: ${dado1} y ${dado2}. Suma: ${suma}`);

        if (suma > 15) {
            nivel++;
        } else {
            alert("Dedicate a otra cosa");
            return;
        }
    }

    // Nivel 2: Número oculto
    while (nivel === 2) {
        let numeroOculto = Math.floor(Math.random() * 5) + 1;
        let intento1 = parseInt(prompt("Adivina el número oculto (1-5):"));
        let intento2 = parseInt(prompt("Adivina el número oculto (1-5):"));

        if (intento1 === numeroOculto || intento2 === numeroOculto) {
            nivel++;
        } else {
            alert("Eres malill@");
            return;
        }
    }

    // Nivel 3: Clave binaria
    while (nivel === 3) {
        let claveBinaria = Math.floor(Math.random() * 8).toString(2).padStart(3, '0');
        let intento1 = prompt("Adivina la clave binaria de 3 bits (ej: 101):");
        let intento2 = prompt("Adivina la clave binaria de 3 bits (ej: 101):");
        let intento3 = prompt("Adivina la clave binaria de 3 bits (ej: 101):");

        if (intento1 === claveBinaria || intento2 === claveBinaria || intento3 === claveBinaria) {
            nivel++;
        } else {
            alert("Eres buenicill@");
            return;
        }
    }

    // Nivel 4: Boss
    while (nivel === 4) {
        let respuestaBoss = parseInt(prompt("¿Cuánto es 2 + 2? (Contesta con un número):"));

        if (respuestaBoss === 4) {
            alert("You are de Best");
        } else {
            alert("Eres grande");
        }
        return;
    }
}

// Iniciar el juego
jugar();