# Enigma Machine

<a href="https://www.repostatus.org/#abandoned"><img src="https://www.repostatus.org/badges/latest/abandoned.svg" alt="Project Status: Abandoned – Initial development has started, but there has not yet been a stable, usable release; the project has been abandoned and the author(s) do not intend on continuing development." /></a><br>

> [!WARNING]
> This project was created as an analysis and personal study on cryptology. I made the previous research, and found that it was too complex to implement for my knowledge.
> Then, on date <b>14/NOV/2024</b>, this project will be set as public archived, so the research and design can be used. Remember to check the LICENSE if yo do so.

This project was created to study how the [Enigma machine](https://en.wikipedia.org/wiki/Enigma_machine) used by the German navy during WWII worked, to improve my cryptology skills, and to understand the operation of this machine, which, through electrical pulses, pins, and rotors, increases the guessing possibilities of the message into hundreds of quintillions.

### Operation
### Rotors

It has three rotors, arranged in this way according to their connections via cables:
- Rotor 1: JGDQOXUSCAMIFRVTPNEWKBLZYH
- Rotor 2: NTZPSFBOKMWRCJDIVLAEYUXHGQ
- Rotor 3: JVIUBHTCDYAKEQZPOSGXNRMWFL

Each time rotor 1 completes a full rotation, rotor 2 advances one position, and when rotor 2 completes a full rotation, rotor 3 advances one position, similar to the movement of a clock. The cables carry the electricity to different locations depending on the rotor position, which changes each time a key is pressed. For example, if you press "A," it goes through rotor 1 to "J," which rotates, and "A" becomes "G" in rotor 1. "J" then leads to "N" in rotor 2, which leads to "J" in rotor 3, which would be the displayed letter in the standard configuration. I say "standard" because the rotors can also be manually rotated to a non-standard configuration, adding many more settings and much more difficulty in obtaining the code by brute force.

### Pins
![pins](https://www.cryptomuseum.com/crypto/enigma/i/img/300002/047/full.jpg)
Assuming in the previous step we got a "J" as an output from an "A" input, there are pins that pass the electricity from one letter to another, meaning that we not only have to enter the correct code, but we also need an appropriate pin configuration; otherwise, we’ll get a nonsensical phrase.

### Conclusion
Between the rotor rotations, where typing "MOTO" would make the first "O" different from the second, the manual configurations of the rotors and pins, and the requirement that words be typed in the correct order for the rotors to rotate and display the correct letters, the encryption of this machine was highly effective, presenting a complex and fascinating project.
