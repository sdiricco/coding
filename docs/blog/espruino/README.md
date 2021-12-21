# Espruino

![espruino](./images/espruino.png)

[Espruino](https://www.espruino.com/) è un interprete JavaScript open source per microcontrollori.

Le board ufficialmente sviluppate da espruino le puoi trovare su [Espruino - shop](https://shop.espruino.com/espruino-boards).

## ESP8266

In questa guida vedremo come installare il firmware espruino sul microcontrollore [ESP8266](https://www.espressif.com/en/products/socs/esp8266).

![iot](./images/iot.jpg)

L'ESP8266 è un chip con Wi-Fi integrato a basso costo, con supporto completo al protocollo TCP/IP e funzionalità da microcontrollore prodotto dall'azienda cinese di Shanghai Espressif Systems. Il chip è spesso utilizzato in molti prodotti IOT

## Installazione del firmware espruino su ESP8266

Strumenti necessari:

- [python](https://www.python.org/), necessario per lanciare lo script [esptool](https://github.com/espressif/esptool).
- [esptool](https://github.com/espressif/esptool), uno script python in grado di eseguire il flash del firmware espruino su ESP8266.
- [firmware](https://www.espruino.com/Download), l'interprete javascript da installa su ESP8266 per permettere l'esecuzione di file `js`

Procedura.

1. Installa [python](https://www.python.org/) per il tuo sistema operativo. Puoi verificare che sia stato installato attraverso il comando `python3 --version`

```bahs
>>> python3 --version

Python 3.8.6
```

2. Installa il gestore dei pacchetti python [pip](https://pypi.org/project/pip/). Puoi verificare che sia stato installato attraverso il comando `pip --version`

```bash
>>> pip --version

pip 20.1.1 from /usr/lib/python3/dist-packages/pip (python 3.8)
```


|Nota|
|---|

Su linux puoi installare python e pip lanciando i comandi:
```bash
sudo apt-get install python3
sudo apt-get install python3-pip
```



3. Installa il pacchetto [esptool](https://github.com/espressif/esptool) tramite il comando:

```bash
pip install esptool
```

Per verificare che sia stato installato correttamente digita `python3 -m esptool version`

```bahs
>>> python3 -m esptool version

esptool.py v3.0
3.0
```

Digitando `python3 -m esptool` puoi accedere a tutti i comandi forniti da esptool

```bash
esptool.py v3.0
usage: esptool [-h] [--chip {auto,esp8266,esp32,esp32s2,esp32s3beta2,esp32c3}] [--port PORT] [--baud BAUD] [--before {default_reset,no_reset,no_reset_no_sync}]
               [--after {hard_reset,soft_reset,no_reset}] [--no-stub] [--trace] [--override-vddsdio [{1.8V,1.9V,OFF}]] [--connect-attempts CONNECT_ATTEMPTS]
               {load_ram,dump_mem,read_mem,write_mem,write_flash,run,image_info,make_image,elf2image,read_mac,chip_id,flash_id,read_flash_status,write_flash_status,read_flash,verify_flash,erase_flash,erase_region,version,get_security_info}
               ...

esptool.py v3.0 - ESP8266 ROM Bootloader Utility

positional arguments:
  {load_ram,dump_mem,read_mem,write_mem,write_flash,run,image_info,make_image,elf2image,read_mac,chip_id,flash_id,read_flash_status,write_flash_status,read_flash,verify_flash,erase_flash,erase_region,version,get_security_info}
                        Run esptool {command} -h for additional help
    load_ram            Download an image to RAM and execute
    dump_mem            Dump arbitrary memory to disk
    read_mem            Read arbitrary memory location
    write_mem           Read-modify-write to arbitrary memory location
    write_flash         Write a binary blob to flash
    run                 Run application code in flash
    image_info          Dump headers from an application image
    make_image          Create an application image from binary files
    elf2image           Create an application image from ELF file
    read_mac            Read MAC address from OTP ROM
    chip_id             Read Chip ID from OTP ROM
    flash_id            Read SPI flash manufacturer and device ID
    read_flash_status   Read SPI flash status register
    write_flash_status  Write SPI flash status register
    read_flash          Read SPI flash content
    verify_flash        Verify a binary blob against flash
    erase_flash         Perform Chip Erase on SPI flash
    erase_region        Erase a region of the flash
    version             Print esptool version
    get_security_info   Get some security-related data

optional arguments:
  -h, --help            show this help message and exit
  --chip {auto,esp8266,esp32,esp32s2,esp32s3beta2,esp32c3}, -c {auto,esp8266,esp32,esp32s2,esp32s3beta2,esp32c3}
                        Target chip type
  --port PORT, -p PORT  Serial port device
  --baud BAUD, -b BAUD  Serial port baud rate used when flashing/reading
  --before {default_reset,no_reset,no_reset_no_sync}
                        What to do before connecting to the chip
  --after {hard_reset,soft_reset,no_reset}, -a {hard_reset,soft_reset,no_reset}
                        What to do after esptool.py is finished
  --no-stub             Disable launching the flasher stub, only talk to ROM bootloader. Some features will not be available.
  --trace, -t           Enable trace-level output of esptool.py interactions.
  --override-vddsdio [{1.8V,1.9V,OFF}]
                        Override ESP32 VDDSDIO internal voltage regulator (use with care)
  --connect-attempts CONNECT_ATTEMPTS
                        Number of attempts to connect, negative or 0 for infinite. Default: 7.

```

4. Connetti ESP8266 al PC e digita `python3 -m esptool  flash_id`. Dovrebber risponderti con alcune informazioni riguardo il tipo del chip.
   
```bash
python3 -m esptool  flash_id

esptool.py v3.0
Found 1 serial ports
Serial port /dev/ttyUSB0
Connecting.....
Detecting chip type... ESP8266
Chip is ESP8266EX
Features: WiFi
Crystal is 26MHz
MAC: ec:fa:bc:32:cd:a6
Uploading stub...
Running stub...
Stub running...
Manufacturer: ef
Device: 4016
Detected flash size: 4MB
Hard resetting via RTS pin...
```

Di queste informazioni, memorizza `Serial port` che indica la porta seriale a cui è connesso `ESP8266`, in questo caso è `/dev/ttyUSB0`, `Device` che identifica il nome del dispositivo che in questo caso è il `4016` e `Detected flash size` che rappresenta la memoria flash, che in questo caso vale `4MB`.

5. Scarica il firmware dal sito ufficiale di [espruino](https://www.espruino.com/Download). Puoi scegliere tra:

- Cutting Edge build: `espruino_2v08.191_esp8266.tgz`
- Cutting Edge build: `espruino_2v08.191_esp8266_4mb.tgz`

La differenza tra i due firmware la puoi trovare [qua](http://www.espruino.com/EspruinoESP8266#firmware-updates).

|content *)|espruino_2v00_esp8266|espruino_2v00_esp8266_4mb|
|---|---|---|
|Modules|NET, TELNET, CRYPTO, only SHA1, NEOPIXEL, Storage|NET, TELNET, GRAPHICS, CRYPTO only SHA1, NEOPIXEL,Storage|
|JS variables|1700|1600|
|save pages|4 x 4096 byte|48 x 4096 byte|
|getState()|{"sdkVersion": "2.2.1(6ab97e9), "cpuFrequency": 160, "freeHeap": 10672, "maxCon": 10, "flashMap": "512KB:256/256","flashKB": 512,"flashChip": "0xXX 0x4013"}|{"sdkVersion": "2.2.1(6ab97e9)", "cpuFrequency": 160, "freeHeap": 12416, "maxCon": 10, "flashMap": "4MB:1024/1024", "flashKB": 4096,"flashChip": "0xXX 0x4016"}|
|getFreeFlash()|use 'Storage' module to save data|[{ "addr": 2097152, "length": 1048576 }, { "addr": 3145728, "length": 262144 }, { "addr": 3407872, "length": 262144}, { "addr": 3670016, "length": 262144 }, { "addr": 3932160, "length": 262144 }]|
|chip_id and flash_size|4013-4015 use --flash_size 512KB|4016-4018 use
--flash_size 4MB-c1|
|max image size|468 KB|812 KB|

In breve il firmware `espruino_2v00_esp8266_4mb` contiene la libreria `GRAPHICS` rispetto al firmware `espruino_2v00_esp8266`. Da notare tuttavia che a seconda del `chip_id` è necessario installare un firmware piuttosto di un altro. In particolare dal momento che il mio ESP8266 è un `4016` posso installare il firmware `espruino_2v00_esp8266_4mb`

6. Una volta scelto il firmware giusto scompatta il file scaricato. Nel mio caso, installerò il firmware `espruino_2v00_esp8266_4mb`.

7. Cancella la flash. Il seguente comando cancellerà il contenuto della flash. Assicurati di riportere il nome della porta corretto, nel mio caso è `/dev/ttyUSB0`(Ricorda che puoi ricevere informazioni sul tuo ESP8266 connesso digitando `python3 -m esptool  flash_id`). 

```bash
> python3 -m esptool --port /dev/ttyUSB0 --baud 115200 erase_flash

esptool.py v3.0
Serial port /dev/ttyUSB0
Connecting....
Detecting chip type... ESP8266
Chip is ESP8266EX
Features: WiFi
Crystal is 26MHz
MAC: ec:fa:bc:32:cd:a6
Uploading stub...
Running stub...
Stub running...
Erasing flash (this may take a while)...
Chip erase completed successfully in 6.0s
Hard resetting via RTS pin...
```

8. Esegui il flash del firmware. Posizionati all'interno della cartella appena scaricata e scampattata del firmware espruino per ESP8266, nel mio caso `espruino_2v08.191_esp8266_4mb`. Per flashare questo firmware digita:

```bash
python3 -m esptool --port /dev/ttyUSB0 --baud 115200 write_flash --flash_freq 80m --flash_mode qio --flash_size 4MB 0x0000 "boot_v1.6.bin" 0x1000 espruino_esp8266_user1.bin 0x3FC000 esp_init_data_default.bin 0x3FE000 blank.bin
```

Ricordati di controllare il nome della porta seriale.

```bash
python3 -m esptool --port /dev/ttyUSB0 --baud 115200 write_flash --flash_freq 80m --flash_mode qio --flash_size 4MB 0x0000 "boot_v1.6.bin" 0x1000 espruino_esp8266_user1.bin 0x3FC000 esp_init_data_default.bin 0x3FE000 blank.bin

esptool.py v3.0
Serial port /dev/ttyUSB0
Connecting....
Detecting chip type... ESP8266
Chip is ESP8266EX
Features: WiFi
Crystal is 26MHz
MAC: ec:fa:bc:32:cd:a6
Uploading stub...
Running stub...
Stub running...
Configuring flash size...
Flash params set to 0x004f
Compressed 3856 bytes to 2763...
Wrote 3856 bytes (2763 compressed) at 0x00000000 in 0.2 seconds (effective 124.8 kbit/s)...
Hash of data verified.
Compressed 533716 bytes to 350945...
Wrote 533716 bytes (350945 compressed) at 0x00001000 in 30.9 seconds (effective 138.0 kbit/s)...
Hash of data verified.
Compressed 128 bytes to 75...
Wrote 128 bytes (75 compressed) at 0x003fc000 in 0.0 seconds (effective 92.7 kbit/s)...
Hash of data verified.
Compressed 4096 bytes to 26...
Wrote 4096 bytes (26 compressed) at 0x003fe000 in 0.0 seconds (effective 4906.3 kbit/s)...
Hash of data verified.

Leaving...
Hard resetting via RTS pin...
```

|Nota|
|---|

Se vuoi flashare il firmare `espruino_2v08.191_esp8266` devi digitare:

```bash
python3 -m esptool --port /dev/ttyUSB0 --baud 115200 write_flash --flash_freq 40m --flash_mode qio --flash_size 4m 0x0000 "boot_v1.6.bin" 0x1000 espruino_esp8266_user1.bin 0x7C000 esp_init_data_default.bin 0x7E000 blank.bin
```

Una guida completa su questi comandi la puoi trovare su [ESP8266 - Flashing](http://www.espruino.com/ESP8266_Flashing)

Vedi anche [Quick start USB](http://www.espruino.com/Quick+Start+USB)




	



## Come flashare un file js su un microcontrollore espruino


Per vedere tutte le opzioni di programmazione di espruino ti consiglio di dare un'occhiata alla sezione di programmazione sul [sito ufficiale](https://www.espruino.com/Programming).

Puoi usare:

- [Espuino IDE](https://www.espruino.com/ide/), ma solo con google chrome. Con chromium non funziona.
- []

## Primi passi con javascript ed espruino

Puoi dare un'occhiata al [tutorial](https://www.espruino.com/Quick+Start+Code)

## Comandi basilari

```js
1+2
```

```js
//set D16 pin to high
digitalWrite(D16,1)
```

```js
//read D16 pin
digitalRead(D16);
```

```js
  //Set D16 to high
  //after 200ms Set D16 to low
  function flash() {
    digitalWrite(D16,1);
    setTimeout(function() {
      digitalWrite(D16,0);
    }, 200);
  }

  flash();
```


```js
function flash() {
  digitalWrite(D16,1);
  setTimeout(function() {
    digitalWrite(D16,0);
  }, 200);
}

if (digitalRead(D15)) flash();
```

```js
//When press D15, flash will be executed  

function flash() {
  digitalWrite(D16,1);
  setTimeout(function() {
    digitalWrite(D16,0);
  }, 200);
}

setInterval(function() {
  if (digitalRead(D15)) flash();
}, 500);
```

```js

var Hh, Mm, Ss, mm;
function initOLED(){
  oled.setFont8x12();
  oled.drawString("init OLDED 789");
  oled.flip();
}

require("Font8x12").add(Graphics);
I2C1.setup({ scl: D5, sda: D4 });
var oled = require("SSD1306").connect(I2C1, initOLED, { rst: D16, height : 32, width:128 });

function orario(){
  var data = new Date();
  Hh = data.getHours() + ":";
  Mm = data.getMinutes() + ":";
  Ss = data.getSeconds();
  oled.clear();
  oled.drawString("Ora:"); 
  oled.drawString(Hh + Mm + Ss,0,16); 
  oled.flip();
}
setInterval(orario,1000);
```

## Led blink

```js
var  on = false;
var pin = D16;
setInterval(function() {
  on = !on;
  digitalWrite(pin, on);
}, 500);
```

```js
function start(){
  g.setFont8x12();
  g.drawString("Ciao mondo");
  g.flip();
  console.log(g.getFonts());
}

require("Font4x4Numeric").add(Graphics);
require("Font8x12").add(Graphics);
I2C1.setup({ scl: D5, sda: D4 });
var g = require("SSD1306").connect(I2C1, start, { rst: D16, height : 32, width:128   });
```

### Orologio con display NOKIA 5110

Puoi trovare il progetto [qua](https://www.espruino.com/Pico+Clock). Riporto comunque il codice completo che comprende l'adattamento NodeMCU.

```js

/*
GND	GND	GND
LIGHT	Any	GND (backlight on)
VCC	3.3v	3.3
CLK	SPI SCK	D3
DIN	SPI MOSI	D5
DC	Any	D6
CE	Any	D7
RST	Any	D8
*/

var g;

var MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

function draw() {
  g.clear();
  var t = new Date();
  var date = t.getDate()+" "+MONTHS[t.getMonth()]+" "+t.getFullYear();
  var time = t.getHours()+":" +
       ("0"+t.getMinutes()).substr(-2);
  var secs = ("0"+t.getSeconds()).substr(-2);
  // top left date
  g.setFontBitmap();
  g.drawString(date,0,0);
  // middle time
  g.setFontVector(20);
  var timeWidth = g.stringWidth(time);
  g.drawString(time,(g.getWidth()-timeWidth-12)/2,10);
  // seconds over to the right
  g.setFontBitmap();
  g.drawString(secs,(g.getWidth()+timeWidth-8)/2,26);
  // send to LCD
  g.flip();
}

function onInit() {
  clearInterval();
  // Setup SPI
  var spi = new SPI();
  spi.setup({ sck:NodeMCU.D3, mosi:NodeMCU.D5 });
  // Initialise the LCD
  g = require("PCD8544").connect(spi,NodeMCU.D6,NodeMCU.D7,NodeMCU.D8, function() {
    // When it's initialised, set up an animation at 20fps (50ms per frame)
    setInterval(draw, 1000);
  });
}

onInit();
```


### Snake

```js
// Setup SPI
var spi = new SPI();
// Graphics
var g;
// Current score
var score = 0;
// Snake position and direction
var pos, dir;
// previous snake positions
var history = [];
//initial snake lenght
var snakeLength = 5;
// a list of apple locations (that the snake can eat)
var apples = [];
//initial speed
var speed = 120;

var idOnFrame = 0;

function beep(state){
  digitalWrite(NodeMCU.D4, state);
}

function updateSnake() {
  // remove old score...
  beep(1);
  g.setColor(0);  
  g.fillRect(0,0,g.getWidth(),5);
  g.setColor(1);
  g.drawString(score);
  beep(0);
  clearInterval();
  speed = (speed <= 20) ? 20: speed-5;
  idOnFrame = setInterval(onFrame, speed);
}

function newApple() {
  var p;
  // keep coming up with random locations until there
  // is nothing drawn where we want to put the apple
  do {
    p = { x : Math.round(Math.random()*g.getWidth()),
          y : 6 + Math.round(Math.random()*(g.getHeight()-6)) };
  } while (g.getPixel(p.x, p.y));
  // draw the apple, and save it inthe array
  g.setPixel(p.x, p.y);
  apples.push(p);
}

function start() {
  // clear screen
  g.clear();
  g.drawRect(0,6,g.getWidth()-1, g.getHeight()-1);

  speed = 150;
  // Setup snake position
  pos = {x:g.getWidth()/2,y:g.getHeight()/2}; // centre of the screen
  history = [[pos.x, pos.y]]; // reset the 'history' list
  g.setPixel(pos.x, pos.y);
  dir = {x:1,y:0}; // the direction of the snake
  // Now add randomly positioned apples
  apples = [];
  for (var i=0;i<10;i++)
    newApple();
  // update the screen  
  g.flip();

  // reset score
  score = 0;
  updateSnake(); 
  // When a button is pressed, rotate the snake
  setWatch(function(e) {
      rotate(-1);
  }, NodeMCU.D1, { repeat:true, edge:"rising", debounce: 10});
  setWatch(function(e) {
      rotate(1);
  }, NodeMCU.D2, { repeat:true, edge:"rising", debounce: 10});
}

// When Espruino starts up...
function onInit() {
  clearInterval();
  clearWatch();
  // Setup SPI
  spi.setup({ sck:NodeMCU.D3, mosi:NodeMCU.D5 });
  // Initialise the LCD
  g = require("PCD8544").connect(spi,NodeMCU.D6,NodeMCU.D7,NodeMCU.D8, function(){
    // When it's initialised, clear it and write some text
    g.clear();
    g.drawString("Hello",0,0);
    // send the graphics to the display
    g.flip();
    start();
  });
}

function gameOver() {
  // stop the game
  beep(1);
  clearWatch();
  clearInterval();
  // write 'game over' on the screen
  g.clear();
  var s = "Game Over!";
  g.drawString(s, (g.getWidth()-g.stringWidth(s))/2, g.getHeight()/2-4);
  g.flip();
  beep(0);
  // when the button is pressed, restart
  setWatch(function(e) {
    start();
  }, NodeMCU.D2, { edge:"rising", debounce: 20});
}

// called every 'frame' of the game
function onFrame() {
  pos.x += dir.x;
  pos.y += dir.y;
  // remove tail
  while (history.length>=snakeLength) {
    var p = history.shift(); // remove first item from list
    g.setPixel(p[0], p[1], 0); // clear that pixel
  }
  // add current position onto the end
  history.push([pos.x, pos.y]);

  if (g.getPixel(pos.x, pos.y)) {
    // check for apples
    var wasApple = false;
    for (var i in apples)
      if (apples[i].x==pos.x && apples[i].y==pos.y) {
        wasApple = true;
        // delete this apple
        apples.splice(i,1);
        // add a new apple
        newApple();
        // change score and increase snake length
        snakeLength += 1;
        score += 10;
        updateSnake();
        // break out so we don't check any more apples
        break;
      }
    if (!wasApple)
      gameOver();
  } else {
    g.setPixel(pos.x, pos.y);
    g.flip();
  }
}


function rotate(d) {
  if (dir.x) {
    dir = {x:0,y:d*dir.x};
  } else {
    dir = {x:-d*dir.y,y:0};
  }
}

onInit();
```


