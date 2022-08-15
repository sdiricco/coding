# PS2 SOFT MOD

Tramite questa modifica software per la ps2 sarai in grado di lanciare i giochi della tramite hard disk SATA. 

![](images\ps2.jpg)

## Materiale hardware necessario

1. **Adattatore IDE-SATA**.  Dietro la ps2 è presente un *expansion bay* che ti permette di collegare un hard disk. Ho comprato l'adattatore su [aliexpress](https://it.aliexpress.com/), puoi scegliere l'interfaccia IDE (se hai un vecchio hard disk) o SATA (per gli hard disk più moderni). 

![](images\adattatore_IDE_SATA_PS2.jpg) 

2. **Hard disk IDE o Sata**. Puoi scegliere qualsiasi hard disk. Non ne vale comunque la pena optare per hard disk SSD, poichè non avrai prestazioni migliori. Infatti lo slot posteriore della ps2 era pensato per gli hard disk IDE. Ti consiglio comunque di utilizzare un hard disk in buono stato, non troppo vecchi o parzialmente corrotti perchè in questo caso potresti avere delle perdite di performance. Avrai bisogno anche di un adattatore IDE/SATA -> USB come interfaccia PC.

3. **Memory card ps2**. Vanno bennissimo le memory card standard sony da 8Mb da alloggiare al secondo slot in modo da non interferire con la memory card dei salvataggi. Questa memory card infatti servirà per lanciare il software Free MC boot all'avvio della playstation, una specie di sistema operativo che raggruppa tutta una serie di applicazioni tra cui OPL (Open PS2 Loader) per il caricamento dei giochi tramite hard disk.

| **Aggiornamento** |
|---|
| Per evitare tutta una serie di passaggi software puoi optare per comprare una memory card con già Free MC boot installato. Basta fare una ricerca di "fmcb ps2" su [aliexpress](https://it.aliexpress.com/). Comprando questa memory card risparmierai del tempo e sarai subito pronto per installare giochi.  |

3. **Computer con sistema operativo Windows**. I software che utilizzeremo saranno tutti piccoli eseguibili per windows

## Materiale software necessario

1. **WinHIIP**. E' il software centrale di tutta l'operazione. Ti permette di formattare e inizializzare l'hard disk in modo tale che sia visto correttamente dalla ps2. Lo utilizzerai inoltre anche per caricare i giochi.

## Procedura

### Prepara l'hard disk

- Collega l'hard disk scelto ad una porta USB del tuo computer. 
- Apri **WinHIIP** con i privilegi di amministratore.
- Clicca su **Select drive** e seleziona l'hard disk desiderato, attenzione a non scegliere gli hard disk di sistema!
- Clicca su **Format Drive**.
- Da questa modalità imposta **HD Loader 48bit** / **Full** e fai partire la procedura di formattazione.

![winhiip_ok](images\winhiip02_ok.gif)

Impiegherà circa 2 ore, dipende comunque dalla dimensione dell'hard disk.

#### Problemi?

E' possibile che **WinHIIP** non riesca a formattare l'hard disk.

![winhiip_notok](images\winhiip01_error.gif)

Se riscontri questo problema devi deinizializzare l'hard disk.
Apri lo strumento di Windows **Gestione Disco** (click destro sull'icona start di windows, oppure eseguendo una ricerca) ed elimina tutte le partizioni dell'hard disk.

![gestione disco](images\gestioneDisco.gif)

A questo punto puoi provare a formattare nuovamente il disco con **winhiip**, non dovresti aver più problemi.

### Carica i giochi

Per caricare i giochi utilizzerai ancora **WinHIIP**. 

- Apri **WinHIIP** con i privilegi di amministratore.
- Clicca su **Select drive** e seleziona l'hard disk desiderato, attenzione a non scegliere gli hard disk di sistema!
- Clicca su **Add Image(s)**
- Si aprirà un menù, clicca ancora su **Add Image(s)** per aggiungere giochi.
- Clicca su **Start** e attendi che la procedura sia finita

![add images winhiip](images\winhiip_add_images.gif)

#### I giochi non si avviano? Schermo bianco o nero?

Inanzitutto ricordati che se hai una ps2 europea devi scaricare giochi europei. Il formato americano non è supportato.

[Qui](https://www.ps2-home.com/forum/page/opl-game-compatibility-list) puoi trovare una lista di compatibilità di tutti i giochi per la ps2. Ti consiglio di consultarla nel caso tu avessi un problema specifico con un gioco.

Ti lascio comunque qualche consiglio e qualche pratica che nel mio caso ha funzionato per alcuni giochi.

#### USButils

E' un software che ti permette di applicare una patch software all' immagine `iso` del gioco e in molti casi è sufficiente per avviare il gioco.

![i più](images\usbutils_applypatch.gif)


#### BOOT File

Il boot file di un gioco è il file che viene caricato all'avvio di un gioco ed è necessario che sia impostato quello corretto.

Il boot file corretto lo trovi all'interno dell'immagine `iso`. Per navigare all'interno dell'immagine dovrai **montare** il disco. Un file `iso` è in realta un file che rappresenta un disco CD/DVD.

Una volta che sei all'interno dovrai cercare il file `SYSTEM.CNF`, aprirlo con un editor di testo e individuare il nome del file di boot

```txt
BOOT2 = cdrom0:\SLES_525.85;1
VER = 1.01
VMODE = PAL
```

In questo caso il file di boot è `SLES_525.85`. Verifica che questo file sia presente nella root principale del file `iso` e copia il nome del file.

![](images\boot_file.gif)

Per selezionare o cambiare il boot file del gioco apri **WinHIIP** con i privilegi di amministratore, seleziona il gioco e clicca su **Edit Image Settings**

![](images\winhiip_bootfile.gif)



