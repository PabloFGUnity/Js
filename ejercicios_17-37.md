# Módulo de JS Básico

## Ejercicios

17. Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado.

18. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

19. Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará número negativos.

20. Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.

21. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos. Piensa como debemos inicializar las variables.

22. Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.

23. Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0. (Recuerda la estructura switch).

24. Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula según el siuiente criterio: la parte práctica vale el 10%; la parte de problemas vale el 50% y la parte teórica el 40%. El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado y volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. Las notas deben estar entre 0 y 10. Si no lo están no imprimirá las notas, mostrará un mensaje de error y volverá a pedir otro alumno.

25. Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de A y B con ese
    tamaño. Las A sólo se verán en el borde del cuadrado y las B en el interior.
    Ejemplo, para lado = 4 escribiría:

    AAAA

    ABBA

    ABBA

    AAAA

26. Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. En cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida por pantalla:
    Introduce el número 1º.
    ➢ 8 El cubo de 8 es 512.

27. Desarrollar un algoritmo que imprima la tabla de multiplicación del número N introducido por teclado. Para N = 13, el output sería:
    13 X 1 = 13
    13 X 2 = 26
    …
    13 X 10 = 130

28. Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
    atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
    • Investigar cómo hacer los intervalos en JS

29. Desarrollar una calculadora de factoriales para números introducidos por teclado.
    El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir, para
    N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120.

30. Algoritmo que lea un número entero (altura) y a partir de él cree una escalera invertida de
    asteriscos con esa altura. Deberá quedar así, si ponemos una altura de 5.

        *****
         ****
          ***
           **
            *

31. El siguiente es el menú de un restaurante de bocadillos. Diseñar un algoritmo capaz de leer el número de unidades consumidas de cada alimento ordenado y calcular la cuenta total.

    | PRODUCTO           | PRECIO |
    | ------------------ | ------ |
    | Bocadillo de jamón | 3,5    |
    | Cerveza            | 2,5    |
    | Refresco           | 2,0    |
    | Pan                | 0,65   |

32. Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado. Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda.

33. Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición junto con su índice y finalmente, la suma de todos los valores.

34. Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20. Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de cada iteración.

35. Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo array deberá tener los valores [5,4,3,2,1].

36. Crear una función que determine si dos arrays son iguales, comparados elemento a elemento. La función será parecida a :function isEqual (array1, array2) y devolverá true/false si los arrays son o no iguales. Para determinar si el parámetro array1 es un array podéis usar el método estático "Array.isArray(array1)" o el operador "array1 instanceof Array". Para probar si funciona usaréis estas llamadas:

    isEqual ([1,2,3],["1",2,"3"]) -> false
    isEqual ([1,2,3],[1,2,3]) -> true
    isEqual ([1,2,3],[1,2,3,4]) -> false
    isEqual ([1,2,3],'abc') -> false

Usad estos test:
console.assert(!isEqual([1, 2, 3], ["1", 2, "3"]), "Test1: no son iguales");
console.assert(isEqual([1, 2, 3], [1, 2, 3]), "Test2: no son iguales");
console.assert(!isEqual([1, 2, 3], [1, 2, 3, 4]), "Test3: no son iguales");
console.assert(!isEqual([1, 2, 3], "abc"), "Test4: no son iguales");

37. Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
    a) Obtenga cuántos números son mayores que 0.
    b) Calcule el promedio de los números positivos.
    c) Obtenga el promedio de todos los números
