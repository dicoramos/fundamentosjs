//tipo de dado
//boleanos 

//conversão implícita
const numero = 456;
const numeroString = "456";//ou const numeroString = Number("456");

console.log(numero === numeroString);//compara não só o valor, mas também o tipo (false)
console.log(numero == numeroString);//compara o valor (true)

console.log(numero + numeroString);//concatena 456456

// conversão explícita

//função Number()
//função String()
console.log(numero + Number(numeroString));//converte string em número


