# Android

![](./images/android.jpg)

## Fix - Nexus 5x bootloop

### Android 8.1

Puoi trovare la guida che ho seguito su [xda](https://forum.xda-developers.com/t/blod-8-1-0-opm2-171019-029-apr-2018-fix.3784307/)

Ho seguito il primo metodo che esegue il fix sull'ultima versione della rom stock android (8.1). Il secondo, esegue il fix su una custom ROM (Lineage OS).

#### Materiale

Avrai bisogno di:
- Driver fastboot-adb windows: [adb-setup-1.4.3](./fix-nexus-5x/bootloop.7z) 
- minimal-adb-and-fastboot-tool: [platform-tools_r31.0.2-windows](./fix-nexus-5x/bootloop.7z) 
- Andorid 8.1 stock image: [stock image](https://developers.google.com/android/images#bullhead)
- custom bootloader: [boot](./fix-nexus-5x/bootloop.7z)

Dopodichè:

1. Installa i driver fastboot-adb
2. Accendi lo smartphone fastboot mode `POW + VOL- ` 
3. Scompatta la stock image ed esegui il file 'flash-all.bat'.
4. Quando si riavvia il telefono torna in fastboot mode
5. Copia il file `boot.img` all'internod della cartella `platform-tools_r31.0.2-windows/platform-tools`
6. Esegui il comando:

```bash
fastboot flash boot boot.img
```
