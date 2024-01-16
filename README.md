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
Si f(n) es O(g(n)), entonces kf(n) es O(g(n)), para cualquier constante k > 0. La primera regla es la regla del coeficiente, que elimina coeficientes no relacionados con el tamaño de entrada, n. Esto se debe a que como n se acerca al infinito, el otro coeficiente se vuelve insignificante

