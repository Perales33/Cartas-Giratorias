//Idea original: https://www.youtube.com/watch?v=c0eigGnotm0
const numeroCartas = 16;
let cartas = [];
let cartasSeleccionadas = [];
let valorEmpleado = [];
let movimientos = 0;
let intentos = 0;
let carta = '<div class="carta"><div class="espalda" id="espalda"></div><div class="frente" id="frente"></div></div>';

function activacion(cartita) {
    if (movimientos < 2) {
        //Verificación de que no hay cartas previamente elegidas, la carta en la posición sea distinta a la que pulsemos despueés,y que la carta actual no contiene la clase activadas.
        if (!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== cartita.target && !cartita.target.classList.contains('activadas')){
        //Añade la clase activadas a la carta que se a la que se ha hecho click y que sea distinta a la anterior.
            cartita.target.classList.add('activadas');
        //Añade la carta  a las cartas seleccionadas y aumenta el contador de movimientos
            cartasSeleccionadas.push(cartita.target);
            //Añade un movimiento a movimientos y añade un movimiento a los intentos
            if(++movimientos == 2){
                intentos++;
            //Actualiza el número de intentos actuales, cada dos cartas seleccionadas 
                document.querySelector('#intento').innerHTML = 'Llevas ' + intentos + ' energías recogidas'
            //Evalua el número de intentos actuales y ejecuta las funciones if, donde se van añadiendo clases con CSS y quitandoselas con JavaScript en base al número de intentos actuales.
                if (intentos < 10) {
                    document.querySelector(".body").classList.add("intentos-5");  
                    
                }
                else if(intentos < 20) {
                    document.querySelector(".body").classList.add("intentos-10");
                    document.querySelector(".body").classList.remove("intentos-5");
                    //Llamada a la funcion cambio_cartas_10 (Descrita más abajo)
                    cambio_carta_10();
                }
                else if (intentos < 30){
                    document.querySelector(".body").classList.add("intentos-15");
                    document.querySelector(".body").classList.remove("intentos-10");
                    //Llamada a la funcion cambio_cartas_15 (Descrita más abajo)
                    cambio_carta_15();
                }
                //En caso de llegar al intento 31, se ejecuta el último if y se muestra la pantalla de game over. Además, se pone el juego y los intentos el display a none.
                else if (intentos < 31){
                    document.getElementById("intento").style.display = "none";
                    document.getElementById("juego").style.display = "none";
                    document.querySelector(".body").classList.remove("intentos-15");
                    document.querySelector(".body").classList.add("game-over");
                    alert("¡¡¡¡You lose!!!!")
                }
                //Evalua el valor que tiene las dos cartas, y en el caso de que sean iguales al final, se añaden al array de cartas seleccionadas, se ponen los intentos a 0 y al final se llama a la función victoria()
                if(cartasSeleccionadas[0].querySelectorAll('.frente')[0].innerHTML == cartasSeleccionadas[1].querySelectorAll('.frente')[0].innerHTML){
                    cartasSeleccionadas = [];
                    movimientos = 0;
                    victoria();
                } 
               //En caso contrario, se pone un intervalo donde se elimina a las cartas seleccionadas la clase activadas, se pone las cartas seleccionadas en vacio, la variable movimientos, que servirá para contar los movimientos actuales se pone a 0.
               //Además, se llama a la función reiniar (Explicada más abajo). Todo tiene un intervalo de 600ms
                else {
                    setTimeout(() =>{
                        cartasSeleccionadas[0].classList.remove('activadas');
                        cartasSeleccionadas[1].classList.remove('activadas');
                        cartasSeleccionadas = [];
                        movimientos = 0;
                        reiniciar();
                    }, 600)
                }
            }
        }
    } 
}
//En caso de que sean todas las cartas iguales, se seleccionan todas las cartas con la clase activadas, y se evalua si la longitud de las cartas giradas es el mismo de las cartas creadas inialmente.
//Si es así, se pone la clase victoria que cambia el fondo del cuerpo, se quita la clase de intentos-15,y se pone con display el juego y los intentos.
function victoria() {
    const cartasGiradas = document.querySelectorAll('.activadas');
    if (cartasGiradas.length === numeroCartas) {
        document.querySelector('.body').classList.add("victoria");
        document.querySelector(".body").classList.remove("intentos-15")
        document.getElementById("intento").style.display = "none";
        document.getElementById("juego").style.display = "none";
        alert("¡¡¡¡You Win!!!!")
    }
}
//En caso de que la carta sea distinta, y para hacerlo más dificil, cogemos todas las cartas y le quitamos la clase activadas a todas.
function reiniciar () {
    document.querySelectorAll(".carta").forEach(carta => {
        carta.classList.remove('activadas')
    })
}
//Añade la clase carta-10 a todas las cartas cuando hay más de 20 intentos contados. Y quita la clase espalda
function cambio_carta_10(){
    document.querySelectorAll(".espalda").forEach(espalda => {
        espalda.classList.add("carta-10");
        espalda.classList.remove("espalda");
    })
}
//Añade la clase carta-15 a todas las cartas cuando hay más de 30 intentos contados. Y quita la clase anterior
function cambio_carta_15(){
    document.querySelectorAll(".carta-10").forEach(espalda => {
        espalda.classList.add("carta-15");
        espalda.classList.remove("carta-10");
    })
}
//Recorre la variable numeroCartas y por cada iteración:
    //1. Crea un elemento llamado div y le añade un elemento div.
    //2. Añade al html del div la carta definida la parte superior del texto.
    //3. Añade la variable div al array de cartas que se incluiran en el documento
    //4. Coge el id del juego y le añade la carta creada en la posición actual de i.
    //5. Se llama a la funcion valoraleatorio() (Definida un poco más abajo)
    //6. Se le añade el valor que hemos generado aleatoriamente a la carta actual
    //7. Se le añade a la carta el event click con la función activacion definida anteriormente
for (let i = 0; i < numeroCartas; i++){
    let div = document.createElement('div');
    div.innerHTML = carta;
    cartas.push(div);
    document.querySelector('#juego').append(cartas[i]);
    valoraleatorio();
    cartas[i].querySelectorAll('.frente')[0].innerHTML = valorEmpleado[i];
    cartas[i].querySelectorAll('.carta')[0].addEventListener('click', activacion);
}
//Con esta funcion genera un valor aleatorio
function valoraleatorio () {
    //Hacemos una función matemática, la cual le daremos el valor a una variable aleatorio y le pasamos un valor entre el número entre el minimo del valor de minimo de las cartas y el número de cartas totales, pero lo dividimos entre dos
    //Pero a esto le sumamos 1 para que el mínimo no sea 0.
    let aleatorio = Math.floor((Math.random()*numeroCartas*0.5)+1);
    //Le damos el valor a la carta y mediante filter le permitimos que si en el caso de que el valor empleado sea mayor a dos, que vuelva a generar otro hasta tener todos que sean distintos (Buscar que sean coindentes las cartas).
    let valorCarta = valorEmpleado.filter(valorCarta => valorCarta === aleatorio);
    if (valorCarta.length < 2) {
        valorEmpleado.push(aleatorio); 
    }
    else {
        valoraleatorio();
    }
}
//Permite indicarte al boton de inicio mediante un onclick que se ejecute el juego
function inicio(){
    document.getElementById("inicio").style.display = "none";
    document.getElementById("juego").style.display = "flex";
    document.getElementById("intento").style.display ="block";
    document.querySelector(".body").classList.add("intentos-5"); 
}
