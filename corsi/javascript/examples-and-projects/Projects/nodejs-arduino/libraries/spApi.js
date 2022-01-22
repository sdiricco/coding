const serialport = require("serialport");
const ByteLength = require('@serialport/parser-byte-length');

class SerialCommunication extends serialport {

    constructor(device = { port: port, baudRate: baudRate, frameLenght: frameLenght }) {
        super(device.port, {
            baudRate: device.baudRate,
            autoOpen: false
        });
        this._config = {
            frameLenght: device.frameLenght
        }
        this._status = {
            open: false,
            connectionEstabilished: false
        }
    }

    open() {
        return new Promise((resolve, reject) => {
            super.open(err => {
                if (err) {
                    reject(err);
                }
                else {
                    this._status.open = true;
                    resolve(true);
                }
            });
        });
    }

    clearData() {
        return new Promise ((resolve, reject) => {
            super.flush( err => {
                if (err){
                    reject(err);
                }
                    
                else {
                    resolve(true);
                }
            });
        });
    }

    writeFrame(masterBuffer) {
        return new Promise((resolve, reject) => {
            super.write(masterBuffer, err => {
                if (err)
                    reject(err);
                else
                    resolve("[Success: write completed]");
            });
        });
    }

    on(eventData, fnCallback) {
        if (eventData === 'frame'){
            const parser = super.pipe(new ByteLength({ length: this._config.frameLenght }));
            parser.on('data', data => {
                fnCallback(data, "Frame Received:");
            });
        }
        else{
            super.on(eventData, data => {
                fnCallback(data, "Data:");
            });
        }
    }
}

module.exports = { SerialCommunication: SerialCommunication };
