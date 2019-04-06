# Primo progettino per il corso di Interactive 3d Graphics

## Introduction

CrossySimulation is a 3d simulation of a crossroad regulated by traffic lights where cars enter the scene at the end of the road, then turn left, right or proceeds straight, than continue driving on the chosen road before leaving the scene at the end of the road, it's possible to regulate the car's spawn rate on every lane and change the traffic light color using the controls in the GUI.

## Membri del grupo

- Comuzzo Massimo, Matricola 131100
- Rovere Andrea, Matricola 128074

## Scena

La scena è ambientata in una zona rurale in cui è presente un incrocio tra quattor strade a due corsie, un numero di aberi e pini generarati in casualmente e alcune alture, tale incorcio è regolato da quattro semafori, uno per ogni strada, ogni intervallo di tempo una macchina può entrare nella scena da una o piu delle quattro strade, la frequenza con cui le macchine entrano nella scena per ogni strada può essere regolata tramite dei controlli della GUI.

 Le macchine procedono lungo la strada fino all'incrocio, una volta arrivate in prossimita dell' ncrocio le macchine decidono se girare a destra, a sinistra o continuare dritto, inoltre controllano se possono passare: controllano il colore del semaforo e danno la precedenza alle macchine alla loro destra se necessario. Una volta attraversato l' incrocio le auto proseguono fino alla fine della strada scelta, arrivate alla fine escono dalla scena, è inoltre possibile cambiare il colore dei semafori tramite l'apposio bottone della GUI.

Se le macchine non possono attraversare l'incrocio si incolonnano mantendendo una distanza di sicurezza l'una dall' altra, le la colonna ragigunge la fine della strada nessun altra macchina verra generata in quella strada fino a quando almeno uno slot e libero.



### Suddivisione del codice 

- Il file principale è index.html, ;

- nella cartella  sono stati inseriti tutti i codici necessari per la creazione degli alberi, delle macchine etc.

  

## Camera

La camera osserva la scena da una posizione di default, ma l' utente puo muoverla a piacere usando i comandi standard di rotazione, traslazione e zoom in e zoom out ( OrbitControl.js` ).

### Screenshot

![](C:\xampp\htdocs\cubes-2019-comuzzo-rovere\screenshot\sopra.PNG)



![](C:\xampp\htdocs\cubes-2019-comuzzo-rovere\screenshot\turning.PNG)





![](C:\xampp\htdocs\cubes-2019-comuzzo-rovere\screenshot\multiple.PNG)













![](C:\xampp\htdocs\cubes-2019-comuzzo-rovere\screenshot\full.PNG)





