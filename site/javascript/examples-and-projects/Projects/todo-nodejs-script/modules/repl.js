const fs = require('fs');
const prompt = require('prompt-sync')();
const dbPath = 'db.json';

const  repl = function() {

    console.log(
    `LISTA DEI COMANDI:
    - SHOW: mostra gli elementi della lista
    - SEARCH @ val: cerca un elemento che abbia il valore "val"
    - INSERT @ val: inserisce un elemento nella lista
    - DELETE @ index: elimina l'elemento con indice "index" dalla lista
    - HISTORY: stampa lo storico dei comandi
    - QUIT: esce
    `);

    const store = {
        show(data){
            let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            for(i in db){
                console.log('--> (',i,') ',db[i]);
            }
        },
        search(data){
            let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            for(i in db){
                //il metodo search applicato ad un array ritorna >=0 se trova l'elemento passato come parametro
                if(db[i].search(data) >= 0){
                    console.log('--> (',i,') ',db[i]);
                }
            }
        },
        insert(data){
            let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            db.push(data);
            fs.writeFileSync(dbPath, JSON.stringify(db), 'utf8');
        },
        delete(data){
            let db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
            let newDb = [];
            //effettuo una copia di tutti gli elementi da db a newDb tranne quello da eliminare.
            //Cioè quello passato come argomento a delete()
            for (let index in db){
                if (index != data){
                    newDb.push(db[index]); 
                }
            }
            fs.writeFileSync(dbPath, JSON.stringify(newDb), 'utf8');
        }
    }

    let _db = {
        history: [],
        execute: function(command){
            const [action, argument = ''] = command.split(' @ ')

            switch(action){
                case 'HISTORY': //storia dei comandi passati 
                    this.history.push(command);
                    for(command of this.history){
                        console.log('-->', command);
                    }
                    break;
                case 'SHOW': //visualizza la lista to-do
                    this.history.push(command);
                    store.show(argument);
                    break;
                case 'SEARCH': //ricerca all'interno della lista
                    this.history.push(command);
                    store.search(argument);
                    break;
                case 'INSERT': //inserisce un valore dalla lista
                    this.history.push(command);
                    store.insert(argument);
                    break;
                case 'DELETE': //elimina un valore dalla lista
                    this.history.push(command);
                    store.delete(argument);
                    break;
                case 'QUIT': //esce
                    console.log('ciao');
                    break;
                default:
                    console.log('--> COMANDO NON RICONOSCIUTO');
                    break;
            }
        }
    }
    const fn = function(){
        let command = prompt("> ");
        _db.execute(command);
        if (command !== 'QUIT'){
            return fn();
        } else {
            return null;
        }
    }
    return fn;
}

module.exports = repl();