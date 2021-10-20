/*==================================================================================================
  Requires
==================================================================================================*/
const spApi = require('./libraries/spApi');
const frameApi = require('./libraries/frameApi');
const fs = require('fs');

var commandSend = false;
/*==================================================================================================
  Global variables
==================================================================================================*/
const masterFrame = new frameApi.FrameMaster();
const slaveFrame = new frameApi.FrameSlave();

const serialCommunication = new spApi.SerialCommunication({
  port: 'COM3',
  baudRate: 115200,
  frameLenght: 6
});

masterFrame.pwmFrequency = 100;
masterFrame.pwmDutyCicle = 0;
deltaDutyCicle = 10;

/*==================================================================================================
  Events
==================================================================================================*/
serialCommunication.on('frame', (buffer, description) => {

  slaveFrame.assignFromBuffer(buffer);

  const time = new Date();

const str =
`*******
t:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}
-
M.id:${(commandSend == true)?  masterFrame.seqId : "---"}
M.c:${(commandSend == true)?  masterFrame.masterCommands : "---"}
M.f:${(commandSend == true)?  masterFrame.pwmFrequency : "---"}
M.dc:${(commandSend == true)?  masterFrame.pwmDutyCicle : "---"}
M.o:${(commandSend == true)?  masterFrame.auxOutput : "---"}
-
S.id:${slaveFrame.seqId}
S.st:${slaveFrame.slaveStatus}
S.f_ms:${slaveFrame.pumpFeedback_ms}
S.i:${slaveFrame.auxInput}
S.i:${slaveFrame.auxSlaveError}`

  console.log(str);

  commandSend = false;
});

/*==================================================================================================
  Functions
==================================================================================================*/
function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}

let write = async () => {

  if (slaveFrame.slaveStatus == 17) {
    masterFrame.masterCommands = 0;
  }
  else{
    masterFrame.masterCommands = 17;
    masterFrame.auxOutput++;
    if (masterFrame.pwmDutyCicle >= 75) {
      deltaDutyCicle = -10;
    }
    else if (masterFrame.pwmDutyCicle <= 15) {
      deltaDutyCicle = 10;
    }
    masterFrame.pwmDutyCicle += deltaDutyCicle;
  }
  masterFrame.incSeqId();
  await serialCommunication.writeFrame(masterFrame.convertToBuffer());
  commandSend = true;
}

let main = async () => {

  console.log('start');
  console.log('attendi 1 sec..');
  await wait(1000);

  console.log('Apro una connessione con Arduino...');
  console.log('Arduino si riavvia...');
  try {
    await serialCommunication.open();
  } catch (error) {
    console.log(error);
  }

  try {
    await serialCommunication.clearData();
  } catch (error) {
    console.log(error);
  }

   console.log('attendi 1 sec..');
   await wait(1000);

  try {
    console.log("Invio un frame generico ad Arduino..");
    setInterval(write, 2000);
    console.log("Frame trasmesso con successo!");
  } catch (error) {
    console.log(error);
  }

};

main();
