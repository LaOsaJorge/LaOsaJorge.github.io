

let aNumeroDePie = [12,35,47,48];


console.log(nNumeroDePie[0]);

console.log(nNumeroDePie[2]);

for (let index = 0; index < aNumeroDePie.length; index++)
{
    console.log(aNumeroDePie[index]);
}


aNumeroDePie.push(38);

console.log("DESPUES")


aNumeroDePie.forEach((valor,indice) => 
{
    console.log(indice +":"+ valor);
});

let ultimoElemento = aNumeroDePie.pop();

console.log("DESPUES DE DESPUES")

aNumeroDePie.forEach((valor,indice) =>
{
    console.log(indice +":"+ valor);
});


console.log("el ultimo elemento fue "+aultimoElemento);




const aPersonas = ["Jose","Chema","Pepe","Bartolito","Begoña"];

aPersonas[0] = "Josito";

aPersonas.forEach((valor,indice) => 
{
    console.log(indice+":"+valor);
});


console.log("**************** ")
let aux;
aux = aPersonas [2];
aPersonas[2]=aPersonas[3];
aPersonas[3] = aux;

aPersonas.forEach((valor,indice) => 
    {
        console.log(indice+":"+valor);
    });
    
console.log(aPersonas);

aPersonas.sort();

console.log(aPersonas);


let aNumerosPotencias2= [32,64,128,16,8,4,2,1]

aNumerosPotencias2.sort

console.log(aNumerosPotencias2);

aNumerosPotencias2.sort((a, b) => a - b);

console.log(aNumerosPotencias2);
