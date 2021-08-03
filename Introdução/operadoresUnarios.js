//São operadores que interagem com apenas um operando

let a = 10

//incremento
++a
a++
console.log(a)

//decremento
--a
a--
console.log(a)

//OBS: Os operadores podem ser fixados antes ou após a variável e sua posição influencia a precedência da operação em expressões

let b = 1
let c = 2
console.log(++b == c--)//Nessa expressão a comparação tem precedência sobre a subtração pos-fixada retornando assim o valor como true
console.log(b == c) //Podemos ver que agora retorna false