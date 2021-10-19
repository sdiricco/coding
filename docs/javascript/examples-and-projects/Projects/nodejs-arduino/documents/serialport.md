# Libreria node.js SerialPort
- [Libreria node.js SerialPort](#libreria-nodejs-serialport)
  - [Link utili](#link-utili)
  - [Primo script](#primo-script)
- [Leggere dati dalla seriale con SerialPort](#leggere-dati-dalla-seriale-con-serialport)
  - [Script lato nodejs](#script-lato-nodejs)
    - [Costruttore SerialPort()](#costruttore-serialport)
      - [parametro `path`](#parametro-path)
      - [parametro [, openOptions]](#parametro--openoptions)
      - [parametro [, openCallback]](#parametro--opencallback)
    - [Eventi SerialPort](#eventi-serialport)
      - [Evento open](#evento-open)
      - [Evento data](#evento-data)
  - [Sketch lato Arduino](#sketch-lato-arduino)
  - [SerialPort parser](#serialport-parser)
  - [parseInt applicato al Buffer SerialPort](#parseint-applicato-al-buffer-serialport)
    - [Lato Arduino](#lato-arduino)
    - [Lato node.js](#lato-nodejs)
    - [Endianess?](#endianess)
- [Trasmettere dati dalla seriale con SerialPort](#trasmettere-dati-dalla-seriale-con-serialport)
  - [SerialPort.write()](#serialportwrite)
    - [Esempio semplice di trasmissione dati con SerialPort](#esempio-semplice-di-trasmissione-dati-con-serialport)
    - [Esempio avanzato di trasmissione dati con SerialPort](#esempio-avanzato-di-trasmissione-dati-con-serialport)


## Link utili

- [Documentazione ufficiale](https://serialport.io/docs/)
- [Stream Interface](https://serialport.io/docs/api-stream)
- [Arduino & nodejs](https://github.com/codeadamca/arduino-to-nodejs)

## Primo script

Il seguente script stamperà una lista delle porte disponibili

```javascript
const SerialPort = require('serialport')
//Il metodo SerialPort.list() ritorna una promise che restituisce un array di PortInfo
//SerialPort.list(): Promise<PortInfo[]>
const USBarray = SerialPort.list();

USBarray.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
```

```bash
[
  {
      path: 'COM3',
      manufacturer: 'Arduino LLC (www.arduino.cc)',
      serialNumber: 'A413937353035101F0E0',
      pnpId: 'USB\\VID_2341&PID_0042\\A413937353035101F0E0',
      locationId: 'Port_#0001.Hub_#0002',
      vendorId: '2341',
      productId: '0042'
  }
]
```

Potrebbe essere utilizzato per verificare che sia collegato arduino alla porta USB

# Leggere dati dalla seriale con SerialPort

Uno script semplice per leggere dati dalla seriale è il seguente:

```javascript
var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
    baudRate: 115200
});

port.on('data', function (data) {
    console.log('Data:', data);
});
```

Come trasmettitore uso Arduino con il seguente sketch:

```cpp
uint8_t number_8[2];

uint16_t number_16 = 0xA031;


void setup(){
  Serial.begin(115200);
}  
void loop(){
  number_8[0] = number_16 & 0xFF;
  number_8[1] = (number_16 >> 8);
  Serial.write(number_8, 2);
  delay(1000);
}
```

Il risultato che vedrai sarà:

```bash
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
..
```
Anche se a volte potrai vedere una cosa del tipo:

```bash
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31>
Data: <Buffer a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
```

Spieghierò tutto in dettaglio qui sotto

## Script lato nodejs

Riprendiamo lo script

```javascript
var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
    baudRate: 115200
});

port.on('data', function (data) {
    console.log('Data:', data);
});
```

### Costruttore SerialPort()

In questo script chiamo il costruttore `SerialPort()` che ha una sintassi del tipo:

```javascript
new SerialPort(path [, openOptions] [, openCallback])
```

#### parametro `path` 
E' una `string` che rappresenta la porta che vuoi aprire. Nei sistemi Linux o Mac sarà qualcosa del tipo `/dev/tty.XXX` mentre nei sistemi Windows sarà qualcosa del tipo `COM1`.

Nel nostro caso, la porta è `COM3`. Per verificare quale sia la porta puoi usare `SerialPort.list()` e trovi uno script funzionante [qui](#primo-script) oppure puoi verificarla all'interno dell'IDE arduino in `Strumenti/porta` oppure ancora dallo strumento `Gestione dispositivi` di windows

#### parametro [, openOptions]

E' un oggetto con le seguenti proprietà:

```javascript
/**
 * @typedef {Object} openOptions
 * @property {boolean} [autoOpen=true] Automatically opens the port on `nextTick`.
 * @property {number=} [baudRate=9600] The baud rate of the port to be opened. This should match one of the commonly available baud rates, such as 110, 300, 1200, 2400, 4800, 9600, 14400, 19200, 38400, 57600, or 115200. Custom rates are supported best effort per platform. The device connected to the serial port is not guaranteed to support the requested baud rate, even if the port itself supports that baud rate.
 * @property {number} [dataBits=8] Must be one of these: 8, 7, 6, or 5.
 * @property {number} [highWaterMark=65536] The size of the read and write buffers defaults to 64k.
 * @property {boolean} [lock=true] Prevent other processes from opening the port. Windows does not currently support `false`.
 * @property {number} [stopBits=1] Must be one of these: 1 or 2.
 * @property {string} [parity=none] Must be one of these: 'none', 'even', 'mark', 'odd', 'space'.
 * @property {boolean} [rtscts=false] flow control setting
 * @property {boolean} [xon=false] flow control setting
 * @property {boolean} [xoff=false] flow control setting
 * @property {boolean} [xany=false] flow control setting
 * @property {object=} bindingOptions sets binding-specific options
 * @property {Binding=} Binding The hardware access binding. `Bindings` are how Node-Serialport talks to the underlying system. Will default to the static property `Serialport.Binding`.
 * @property {number} [bindingOptions.vmin=1] see [`man termios`](http://linux.die.net/man/3/termios) LinuxBinding and DarwinBinding
 * @property {number} [bindingOptions.vtime=0] see [`man termios`](http://linux.die.net/man/3/termios) LinuxBinding and DarwinBinding
 */
```

A noi interessa in questa fase solo la propietà: `baudRate`, quindi dovrò passare un oggetto che sarà fatto in questo modo:

```javascript
{
  baudRate: 115200
}
```

Naturalmente il baud rate dovrà essere sincronizzato con quello impostato lato trasmettitore che in questo caso è Arduino.

#### parametro [, openCallback]

E' una callback che è chiamata quando è stabilità la conessione. Noi non utilizziamo in questo momento la callback ma più avanti prevedo di utilizzarla per segnalare che la connessione è stabilita

```javascript
type openCallback = (Error|null) = {}
```

### Eventi SerialPort

La libreria SerialPort espone gli eventi `open`, `error`, `close`, `data`, `drain`. In node.js per mettersi in ascolto di un evento si utilizza il metodo `.on()` applicato alla classe `EventEmitter`. Nell'esempio, che riporto qui sotto mi metto in ascolto dell'evento `data` che restituisce come parametro della callback un `Buffer` che è un array di dati.

```javascript
port.on('data', function (data) {
    console.log('Data:', data);
});
```

Vediamo adesso in dettaglio gli eventi utili come `open` e `data`

#### Evento open

L'evento `open` si verifica quando la porta è aperta e quest si può verificare subito dopo l'invocazione del costruttore `SerialPort()` attraverso l'opzione `autoOpen` che di default è impostata a `true` oppure dopo il metodo manuale `open()` in caso `autoOpen` sia `false`


#### Evento data

Scatta questo evento quando vengono ricevuti dei dati. I dati sono un oggetto `Buffer`

## Sketch lato Arduino

Riporto lo sketch

```cpp
uint8_t number_8[2];

uint16_t number_16 = 0xA031;


void setup(){
  Serial.begin(115200);
}  
void loop(){
  number_8[0] = number_16 & 0xFF;
  number_8[1] = (number_16 >> 8);
  Serial.write(number_8, 2);
  delay(1000);
}
```

Lato Arduino viene inizializzata la porta seriale con un `baud rate` di `115200` e vengono trasmessi una coppia di byte attraverso `Serial.write()`. Avrei potuto inviare una stringa tramite `Serial.print()` ma per questa applicazione ho la necessità di trattare i dati di basso livello. Inoltre ho simulato una situazione in cui devo poter inviare dati numerici con una rappresentazione maggiore di 8 bit. In questo caso ho inviato un dato a 16 bit come un array di due byte

## SerialPort parser

Riporto lo script lato node.js

```javascript
var SerialPort = require('serialport');
var port = new SerialPort('COM3', {
    baudRate: 115200
});

port.on('data', function (data) {
    console.log('Data:', data);
});
```

A volte può capitare di vedere una cosa del tipo:

```bash
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31>
Data: <Buffer a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
```

Questo accade perchè lato ricezione non si conosce quanto è lungo il frame.
Il seguente script, fa uso di un `parser` che raggruppa i byte con una lunghezza stabilita attraverso `ByteLenght`

```javascript
const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
var port = new SerialPort('COM3', {
    baudRate: 115200
});

const parser = port.pipe(new ByteLength({length: 2}))
parser.on('data', function (data) {
  console.log('Data:', data);
});
```

In questo modo si è sicuri si quanti byte si attendono e il risultato all'interno del Buffer sarà quello atteso:

```bash
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
Data: <Buffer 31 a0>
```

Se provi a cambiare la proprietà `lenght` e metti ad esempio `8` vedrai:

```bash
Data: <Buffer 31 a0 31 a0 31 a0 31 a0>
Data: <Buffer 31 a0 31 a0 31 a0 31 a0>
Data: <Buffer 31 a0 31 a0 31 a0 31 a0>
```

Attenzione però che riceverai i dati ogni `4` secondi dal momento che Arduino invia due byte ogni secondo


## parseInt applicato al Buffer SerialPort

Abbiamo visto come inviare e ricevere dei byte Arduino/node.js.
Adesso voglio inviare da Arduino un numero intero a 16bit `50321` e voglio interpretarlo come intero lato nodejs, in pratica voglio inviare e ricevere un intero a 16 bit.

### Lato Arduino

Lato Arduino non cambia quasi niente. 
- Ho sostituito `number_16` con un numero rappresentato in decimale anzichè in esadecimle.
- Ho invertito la codifica della parte alta e della parte bassa, questo per motivi di endianess che spiegherò più avanti

```cpp
uint8_t number_8[2];

uint16_t number_16 = 50321;


void setup(){
  Serial.begin(115200);
}  
void loop(){
  //number_8[0] = number_16 & 0xFF;
  //number_8[1] = (number_16 >> 8);
  number_8[0] = (number_16 >> 8);
  number_8[1] = number_16 & 0xFF;
  Serial.write(number_8, 2);
  delay(1000);
}
```

### Lato node.js

Lato node.js ho applicato il metodo `parseInt` al buffer.

```javascript
const SerialPort = require('serialport')
const ByteLength = require('@serialport/parser-byte-length')
var port = new SerialPort('COM3', {
    baudRate: 115200
});

const parser = port.pipe(new ByteLength({length: 2}))
parser.on('data', function (data) {
  console.log('Data:', parseInt(data.toString('hex'), 16));
});
```

Adesso vedrai stampato:

```bash
Data: 50321
Data: 50321
Data: 50321
Data: 50321
Data: 50321
Data: 50321
Data: 50321
Data: 50321
Data: 50321
Data: 50321
```

Ovvero il valore trasmesso da Arduino.

### Endianess?

Quando trasmetti e ricevi dei byte su un canale di trasmissione devi sempre assicurarti di fare le cose in maniera corretta. Mi riferisco all'ordine dei byte in trasmissione e di conseguenza di ricezione. E' naturale pensare che l'ordine debba essere coerente altrimenti in ricezione non è possibile ricostruire i dati.

Per questo mi sono reso conto, sbagliando (per fortuna!) che l'endianess era sbagliato solo inviando un intero e reinterpretandolo. Ho dovuto invertire quindi (lato Arduino) la parte bassa con la parte alta

# Trasmettere dati dalla seriale con SerialPort

Per la trasmissione dati, si usa il metodo `.write()`.

`.write()` scrive i dati sulla porta seriale specificata. Memorizza i dati scritti se la porta non è aperta e li scrive dopo l'apertura della porta. L'operazione di scrittura non è bloccante. Quando ritorna, i dati potrebbero non essere ancora stati scritti sulla porta seriale.

**Nota 1 - Apertura di una connessione e Arduino**
Molti dispositivi come Arduino si ripristinano quando apri una connessione ad essi. In questi casi, la scrittura immediata sul dispositivo causerà la perdita dei dati trasmessi poiché i dispositivi non saranno pronti a ricevere i dati. Questo viene spesso aggirato facendo in modo che Arduino invii un byte "pronto" che il programma Node attende prima di scrivere. Spesso puoi anche farla franca aspettando un importo prestabilito, circa 400 ms. Vedere `ReadyParser` per una soluzione a questo problema.

**Nota 2 -  Gestione degli errori**
Se una porta viene disconnessa durante una scrittura, la scrittura produrrà un errore oltre all'evento `close`

**Nota 3 - Gestione degli errori**
Se si verifica un errore, il callback può o meno essere chiamato con l'errore come primo argomento. Per rilevare in modo affidabile gli errori di scrittura, aggiungi un listener per l'evento "errore".

## SerialPort.write()

Prototipo del metodo `.write()`:
```javascript
serialport.write(data: string|Buffer|Array<number>, encoding?: string, callback?: error => {}): boolean
```

**Parametri:**

- `data`: Può essere una `string`, un `Buffer` o `Array` di `number`.
- `encoding`: E' un parametro opzionale di tipo `string` e rappresenta la codifica che può essere `utf8`, `ascii`, `base64`, `binary`, `hex`
- `callback`: E' un parametro opzionale che rappresenta la callback chiamata al termine dell'operazione di scrittura. I dati potrebbero non essere ancora drenati nella porta sottostante.

**Tipo di ritorno**

Restituisce `false` se lo stream desidera che il codice chiamante attenda l'emissione dell'evento drain prima di continuare a scrivere dati aggiuntivi; altrimenti `vero`.


### Esempio semplice di trasmissione dati con SerialPort

Vediamo un esempio semplice di trasmissione dati con SerialPort. 
- Creo un `Buffer` che contiene un solo `byte` del valore di `65`.
- Per aggirare il problema del **reset di Arduino all'apertura della connessione**, vedi anche [qui](#trasmettere-dati-dalla-seriale-con-serialport), mi metto in ascolto di un *qualsiasi* dato da Arduino aspettando l'evento `data` che poi stampo a video.
- Solo in questo momento posso considerare stabilita la connessione quindi scrivo un dato, o meglio un byte dell'oggetto `Buffer`

Naturalmente non è una gestione ottimale ma volevo mantenere uno script semplice lato node.js

```javascript
var serialport = require("serialport");
const buf = Buffer.from([65]);

var sp = new serialport('COM3', {
  baudRate: 115200,
});

sp.on('data', data => {
    console.log('connection estabilished');
    console.log(parseInt(data.toString('hex'), 16));
    sp.write(buf);
});
```

Lato Arduino invece trasmetto il dato `233` finchè non verrà letto da node.js che rappresenta lo stato `READY` di Arduino. Quando node.js legge il dato mandato da Arduino e invia il byte `65`. Arduino riceve il dato, smette di trasmettere il dato `233` e valuta il dato ricevuto da node.js. Se è `65` accende il LED, se non è `65` spegna il LED

```cpp
byte incomingByte[1]; // for incoming serial data
bool isReadyTransimetted = false;

void setup() {
  Serial.begin(115200); // opens serial port, sets data rate to 9600 bps
  pinMode(13, OUTPUT);
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    isReadyTransimetted = true;
    // read the incoming byte:
    Serial.readBytes(incomingByte, 1);

    if (incomingByte[0] == 65){
      digitalWrite(13, HIGH); 
    }
    else{
      digitalWrite(13, LOW); 
    }
  }
  else{
    if (!isReadyTransimetted){
      Serial.write(233);
      delay(1000);
    }
  }
}
```

### Esempio avanzato di trasmissione dati con SerialPort

Questo esempio sarà un po' più interessante rispetto all'esempio precedente. Con node.js farò blinkare il LED di Arduino.
Lato node.js ho creato due funzioni...

```javascript
var serialport = require("serialport");
var byteFromArduino = '';
let connectionEstabilished = false;
let varToggle = false;
const buf = Buffer.from([65]);
const buf2 = Buffer.from([66]);

var sp = new serialport('COM3', {
  baudRate: 115200,
});

function write() //for writing
{
  if (connectionEstabilished){
    if (varToggle){
      console.log('LED ON, pin 13');
      sp.write(buf);
      varToggle = !varToggle;
    }
    else{
      console.log('LED OFF, pin 13');
      sp.write(buf2);
      varToggle = !varToggle;
    }
  }
}

function waitForConnection(){
  sp.on('data', function (data) 
  {
    byteFromArduino = parseInt(data.toString('hex'), 16); 
    console.log(byteFromArduino);
    if (byteFromArduino === 233){
      console.log('connection estabilished');
      connectionEstabilished = true;
    }
    else{
      console.log('connection not estabilished');
      connectionEstabilished = false;
    }

  });
}

sp.on('open', function() 
{
    // execute your functions
    waitForConnection();
    setInterval(write,1000);
});
```



