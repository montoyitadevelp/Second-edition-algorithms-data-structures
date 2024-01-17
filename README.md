# Capitulo 1

**Introducción a la notacion Big O**

La notacion Big O nos ayuda a medir el tiempo de complejidad y tiempo espacial de un algoritmo. En pocas palabras nos indica cuanta velocidad le lleva al procesador (CPU) ejecutarse y a la memoria (RAM) ocuparse.

> ⚖ **Complejidades más comunes de Big O**

[![Big O Notation](https://res.cloudinary.com/practicaldev/image/fetch/s--XufjLD9T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://thepracticaldev.s3.amazonaws.com/i/z4bbf8o1ly77wmkjdgge.png)](https://res.cloudinary.com/practicaldev/image/fetch/s--XufjLD9T--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://thepracticaldev.s3.amazonaws.com/i/z4bbf8o1ly77wmkjdgge.png)

Constante `O(1)`
Logaritmico `O(log n)`
Lineal `O(n)`
Cuadratico `O(n²)`
Cubico `O(n3)`

> 🚧 **Reglas de la Big O**

### Regla del coeficiente

Si f(n) es O(g(n)), entonces kf(n) es O(g(n)), para cualquier constante k > 0. La primera regla es la regla del coeficiente, que elimina coeficientes no relacionados con el tamaño de entrada, n. Esto se debe a que como n se acerca al infinito, el otro coeficiente se vuelve insignificante.

### Regla de la suma

La regla de la suma es intuitiva de entender; se pueden añadir complejidades temporales. Imaginemos un algoritmo maestro en el que intervienen otros dos algoritmos. La notación Big-O de ese algoritmo es simplemente la suma de las otras dos notaciones Big-O.

- Si f(n) es O(h(n)) y g(n) es O(p(n)), entonces f(n)+g(n) es O(h(n)+p(n)).
- Es importante aplicar primero la regla del coeficiente.

### Regla del producto

La regla del producto simplemente indica cómo se pueden multiplicar los Big-O.

- Si f(n) es O(h(n)) y g(n) es O(p(n)), entonces f(n)g(n) es O(h(n)p(n))

### Regla polinómica

La regla polinómica establece que las complejidades de tiempo polinómico tienen una notación Big-O de  el mismo grado polinómico. Matemáticamente, es como sigue:

- Si f(n) es un polinomio de grado k, entonces f(n) es O(nk)

### Resumen

Big-O es importante para analizar y comparar la eficiencia de los algoritmos. El análisis de Big-O comienza observando el código y aplicando las reglas para simplificar la notación Big-O. A continuación se enumeran las reglas más utilizadas:

- Eliminación de coeficientes/constantes (regla de los coeficientes)
- Suma de Big-Os (regla de la suma)
- Multiplicación de Big-Os (regla del producto)
- Determinación del polinomio de la notación Big-O observando bucles (regla del polinomio)
