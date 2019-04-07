### 27/03/2019
- Abbiamo scelto di fare una rappresentazione in stile voxel di un incrocio stradale

---

### 28/03/2019
- Per rendere la scena più dinamica e interattiva abbiamo pensato che l'utente potrebbe cambiare il colore del semaforo tramite un pulsante ed eventualmente regolare il livello di traffico della scena
- inoltre il colore delle auto potrebbe essere scelto in maniera casuale

---

### 29/03/2019
- oltre all'incrocio la scena si presentava troppo vuota così abbiamo creato degli alberi e successivamente degli abeti per aggiungere diversità alla vegetazione

---

### 30/03/2019
- abbiamo scelto di posizionare gli alberi in posizioni casuali ad ogni ricaricamento della pagina per aumentare il realismo della scena ed evitare che l'utente veda sempre la stessa configurazione

---

### 01/04/2019
- abbiamo aggiunto la generazione delle auto in maniera casuale in base ad un parametro selezionato dall'utente. Prima abbiamo messo uno slider per tutte le strade poi abbiamo deciso di metterne 4 uno per ogni strada così da poter avere una maggiore configurabilità
- abbiamo implementato la coda di auto e le animazioni di attraversamento dell'incrocio

---

### 02/04/2019
- abbiamo aggiunto la scelta casuale del colore delle auto
- abbiamo riorganizzato il codice in modo da riutilizzare le geometrie in modo da alleggerire lo stadio Geometry

---

### 03/04/2019
- abbiamo incrementato la y delle auto perché le ruote erano visibili al di sotto della strada

---

### 04/04/2019
- abbiamo iniziato a lavorare al codice per la generazione del terrain ma abbiamo visto che il terrain degradava in maniera conspicua le performance anche perché volevamo utilizzare una heightmap di 146x146. Abbiamo pensato che si potrebbe utilizzare un unico blocco per più valori altimetrici adiacenti in modo da ridurre il numero di faces e migliorare le performance

---

### 05/04/2019
- abbiamo implementato la strategia per il terrain ideata il giorno precedente

---

### 06/04/2019
- La linea che divide le corsie implementata tramite la classe THREE.Line aveva dei brutti effetti visivi da certe angolazioni così la abbiamo sostituita con una BoxGeometry
