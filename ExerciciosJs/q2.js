function tipoTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado1 == lado3){
        console.log("Triângulo Equilátero")
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log("Triângulo Isósceles")
    } else{
        console.log("Triângulo Escaleno")
    }
}

tipoTriangulo(1,1,1)
tipoTriangulo(1,1,2)
tipoTriangulo(1,2,1)
tipoTriangulo(1,3,2)