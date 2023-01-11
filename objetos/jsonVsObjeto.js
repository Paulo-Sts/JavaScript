// Diferenças entre Json e Objeto
// Json é um formato textual de dados, usado para interoperabilidade entre diferentes módulos/sistemas com diferentes tecnologias

// Objeto => Json
const obj = { a: 1, b: 2, c: 3, soma(){return a + b + c}}
console.log(JSON.stringify(obj))


// Json => Objeto
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 2.4, "b": "string", "c": true, "d": {}, "e": [] }')) // Formatos suportados por JSON