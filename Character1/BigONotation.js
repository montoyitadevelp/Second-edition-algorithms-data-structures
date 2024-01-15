//O(1) Tiempo constante, no cambia con respecto a su entrada

//O(n) Tiempo lineal, debe hacer n operaciones
function exampleLinear(n) {
    for (let i = 0; i < n; i++) {
        //console.log('O(n)', i);
    }
}

exampleLinear(5);

//O(n²) Tiempo cuadratico, debe hacer n^2 operaciones. Un for anidado se multiplica por si mismo
function exampleQuadratic(n) {
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            //console.log('O(n²):', j);
        }
    }
}

exampleQuadratic(5);


//O(n^3) Tiempo cubico, debe hacer n^3 operaciones. Un for anidado se multiplica por si mismo
function exampleCubic(n) {
    for (let i = 0; i < n; i++) {
        //console.log(i);
        for (let j = i; j < n; j++) {
            //console.log(j);
            for (let k = j; j < n; j++) {
                //console.log(k);
            }
        }
    }
}

exampleCubic(5);

//O(log n) Tiempo logaritmico, debe hacer log n operaciones. El for se multiplica por 2 cada vez que se ejecuta.
function exampleLogarithmic(n) {
    for (let i = 2; i <= n; i = i * 2) {
        console.log(i);
    }
}

exampleLogarithmic(1000000) //Solo lo hace 19.9315686 veces
