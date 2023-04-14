# Máquina Enigma

<a href="https://www.repostatus.org/#wip"><img src="https://www.repostatus.org/badges/latest/wip.svg" alt="Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public." /></a><br>
Este es un proyecto hecho para estudiar cómo funcionaba la máquina [Enigma](https://es.wikipedia.org/wiki/Enigma_(m%C3%A1quina)) usada durante la WWII por la armada Alemana, mejorar mis capacidades en criptología, y estudiar el funcionamiento de esta máquina que mediante pulsos eléctricos, pines y rotores, incrementa las posibilidades de adivinar el mensaje en cientos de quintillones.

## Funcionamiento
### Rotores
Tiene tres rotores, organizados de esta forma según sus conexiones mediante cables:
- Rotor 1: JGDQOXUSCAMIFRVTPNEWKBLZYH
- Rotor 2: NTZPSFBOKMWRCJDIVLAEYUXHGQ
- Rotor 3: JVIUBHTCDYAKEQZPOSGXNRMWFL <br>
Cada vez que el rotor 1 da una vuelta completa, el 2 avanza uno, y cuando el 2 avanza uno completo, el 3 avanza uno, entendiéndose como un reloj, y sus cables llevan la electricidad a diferentes sitios según la posición del rotor, que cambia cada vez que se pulsa una tecla. Un ejemplo, pulsas la A que te lleva mediante el rotor 1 a la J, que rota y la A pasa a ser la G en el rotor 1, la J nos lleva a la N en el rotor 2, que nos lleva a la J en el rotor 3, que sería la letra que se mostraría en la configuración estándar. Digo estándar, porque los rotores también se pueden girar manualmente a una configuración que no sea la estándar, añadiendo muchas más configuraciones, y mucha más dificultad para obtener el código por fuerza bruta.

### Pines
![pines](https://www.cryptomuseum.com/crypto/enigma/i/img/300002/047/full.jpg)
Suponiendo que en el paso anterior hemos obtenido una J ante un input de una A, tenemos unos pines que pasan la electricidad de una letra a otra, por lo que no solo debemos escribir el código adecuado, sino que tenemos que tener una configuración adecuada de los pines, si no, obtendremos una frase sin sentido.

### Conclusión
Entre los giros de los rotores, que al escribir "MOTO" la primera "O" no será la misma letra que la segunda, las configuraciones manuales de los rotores y los pines, y que las palabras se tienen que escribir en el orden adecuado para que los rotores den los giros adecuados para mostrar las letras correctas, la encriptación de esta máquina fue muy efectiva, presentándose como un proyecto muy complejo e interesante.

