# Retrogames e raspberry pi4

![retrogames](./images/retrogames.jpg)

## Quale stazione per emulare vecchie console gaming?

## Batocera

Il progetto [Batocera](https://batocera.org/) ha implementato un sistema operativo completo utilizzando Linux come base, come tanti altri progetti simili. Pertanto, è un progetto gratuito e open source.

Primi passi:

- [Come si installa](https://batocera.org/how_to_install). Per installare Batocera su Raspberry pi4 vai alla sezione [download](https://batocera.org/download) e scegli la versione per Raspberry pi4. Una volta ottenuto il file compresso dovrai scompattarlo e scrivere il file `.img` sulla scheda SD utilizzando uno specifico software come [balenaEtcher](https://www.balena.io/etcher/), [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/) oppure [Raspberry Pi imager](https://www.raspberrypi.org/software/). A questo punto puoi inserire la scheda SD e passara al passo successivo.
- [Come si configura la wifi](https://wiki.batocera.org/wifi_ssid?s[]=network). E' importante configurare la wifi per poter accedere alla memoria condivisa e caricare rom, bios o effettuare piccole modifiche. Accedi alle [impostazioni di emulationStation](https://wiki.batocera.org/emulationstation), vai alla voce **Network Settings**, abilita la wi-fi, **Enable WIFI**, scegli la wifi con cui collegarsi attraverso **WIFI SSID** e imposta la password attraverso **WIFI Key**. E' probabile che tu non riesca a vedere subito la wifi o che tu abbia qualche problema di connessione. Accedendo più volte a questo menù le voci dovrebbero aggiornarsi e dovresti essere in grado di risolvere. Sei connesso quando compare un indirizzo ip nel campo **IP Address** e il campo **status** risulta **CONNECTED**. A questo punto puoi usare l'indirizzo IP per connetterti dal PC. Su windows sarà sufficiente digitare l'indirizzo IP su esplora risorse `\\xxx.xxx.x.xx` oppure più semplicemente `\\BATOCERA` 
- [Come si aggiungono le rom](https://wiki.batocera.org/add_games)

Link utili:

- [Comandi base](https://wiki.batocera.org/basic_commands)
- [BIOS](https://wiki.batocera.org/what_are_bios_and_how_to_add_them?s[]=bios)

https://github.com/archtaurus/RetroPieBIOS