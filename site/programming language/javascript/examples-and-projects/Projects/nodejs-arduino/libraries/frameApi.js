class Frame {
    constructor() {

        /*_____________________________________________*/
        /*Section1*/
        this._seqId = 0;
        /*Section2*/
        this._masterCommands = 0;
        this._pwmFrequency = 0;
        this._pwmDutyCicle = 0;
        this._auxOutput = 0;
        /*Section3*/
        this._slaveStatus = 0;
        this._pumpFeedback_ms = 0;
        this._auxInput = 0;
        this._auxSlaveError = 0;

        /*_____________________________________________*/
        this._error = {
            onFrameReceived: 1,
            onFrameReceived: 2
        }

        /*_____________________________________________*/
        this._masterCommand = {
            startPwm: 1,
            stopPwm: 2,
            changePwmFrequency: 4,
            changePwmDutyCicle: 8,
            setAuxOutput: 16
        }
    }

    /*_____________________________________________*/
    //SET

    /*Section1*/
    set seqId(seqId){
        this._seqId = seqId;
    }
    /*Section2*/
    set masterCommands(masterCommands){
        this._masterCommands = masterCommands;
    }
    set pwmFrequency(pwmFrequency){
        this._pwmFrequency = pwmFrequency;
    }
    set pwmDutyCicle(pwmDutyCicle){
        this._pwmDutyCicle = pwmDutyCicle;
    }
    set auxOutput(auxOutput){
        this._auxOutput = auxOutput;
    }
    /*Section3*/
    set slaveStatus(slaveStatus){
        this._slaveStatus = slaveStatus;
    }
    set pumpFeedback_ms(pumpFeedback_ms){
        this._pumpFeedback_ms = pumpFeedback_ms;
    }
    set auxInput(auxInput){
        this._auxInput = auxInput;
    }
    set auxSlaveError(auxSlaveError){
        this._auxSlaveError = auxSlaveError;
    }

    /*_____________________________________________*/
    //GET

    /*Section1*/
    get seqId(){
        return this._seqId;
    }
    /*Section2*/
    get masterCommands(){
        return this._masterCommands;
    }
    get pwmFrequency(){
        return this._pwmFrequency;
    }
    get pwmDutyCicle(){
        return this._pwmDutyCicle;
    }
    get auxOutput(){
        return this._auxOutput;
    }
    /*Section3*/
    get slaveStatus(){
        return this._slaveStatus;
    }
    get pumpFeedback_ms(){
        return this._pumpFeedback_ms;
    }
    get auxInput(){
        return this._auxInput;
    }
    get auxSlaveError(){
        return this._auxSlaveError;
    }

    /*_____________________________________________*/
    clear(){
        /*Section1*/
        this._seqId = 0;
        /*Section2*/
        this._masterCommands = 0;
        this._pwmFrequency = 0;
        this._pwmDutyCicle = 0;
        this._auxOutput = 0;
        /*Section3*/
        this._slaveStatus = 0;
        this._pumpFeedback_ms = 0;
        this._auxInput = 0;
        this._auxSlaveError = 0;
    }

    /*_____________________________________________*/
    assignFromBuffer(buffer) {
        const arr = [...buffer];
        /*Section1*/
        this._seqId = arr[0];
        /*Section2*/
        this._masterCommands = arr[1];
        this._pwmFrequency = (arr[2]<<8) | (arr[3]);
        this._pwmDutyCicle = arr[4];
        this._auxOutput = arr[5];
        /*Section3*/
        this._slaveStatus = arr[6];
        this._pumpFeedback_ms = (arr[7]<<8) | (arr[8]);
        this._auxInput = arr[9];
        this._auxSlaveError = arr[10];
    }

    /*_____________________________________________*/
    convertToBuffer(){
        const arr = [];
        /*Section1*/
        arr[0] = this._seqId;
        /*Section2*/
        arr[1] = this._masterCommands;
        arr[2] = this._pwmFrequency >> 8;
        arr[3] = this._pwmFrequency & 0xFF;
        arr[4] = this._pwmDutyCicle;
        arr[5] = this._auxOutput;
        /*Section3*/
        arr[6] = this._slaveStatus;
        arr[7] = this._pumpFeedback_ms >> 8;
        arr[8] = this._pumpFeedback_ms & 0xFF;
        arr[9] = this._auxInput;
        arr[10] = this._auxSlaveError;
        return Buffer.from(arr);
    }

    /*_____________________________________________*/
    incSeqId(seqId){
        this._seqId++;
        if (this._seqId >= 256) {
            this._seqId = 0;
        }
    }

    /*_____________________________________________*/
    addMasterCommand(masterCommands){
        this._masterCommands |= (masterCommands & 0xFF);
    }

    /*_____________________________________________*/
    clearMasterCommand(masterCommands){
        this._masterCommands &= ( (~masterCommands) & 0xFF);
    }

    /*_____________________________________________*/
    isAuxSlaveError(auxSlaveError){
        const testMask = (auxSlaveError & 0xFF) & this._auxSlaveError;
        return (testMask == 0x00) ? false : true;
    }
}

/*______________________________________________________________________________________________________________________________*/
class FrameMaster {
    constructor() {
        /*_____________________________________________*/
        /*Section1*/
        this._seqId= 0;
        /*Section2*/
        this._masterCommands= 0;
        this._pwmFrequency= 0;
        this._pwmDutyCicle= 0;
        this._auxOutput= 0;

        /*_____________________________________________*/
        this._error = {
            onFrameReceived: 1,
            onFrameReceived: 2
        }

        /*_____________________________________________*/
        this._masterCommand = {
            startPwm: 1,
            stopPwm: 2,
            changePwmFrequency: 4,
            changePwmDutyCicle: 8,
            setAuxOutput: 16
        }
    }

    /*_____________________________________________*/
    //SET

    /*Section1*/
    set seqId(seqId){
        this._seqId = seqId & 0xFF;
    }
    /*Section2*/
    set masterCommands(masterCommands){
        this._masterCommands = masterCommands & 0xFF;
    }
    set pwmFrequency(pwmFrequency){
        this._pwmFrequency = pwmFrequency & 0xFFFF;
    }
    set pwmDutyCicle(pwmDutyCicle){
        this._pwmDutyCicle = Math.round(pwmDutyCicle * 2.55) & 0xFF ;
    }
    set auxOutput(auxOutput){
        this._auxOutput = auxOutput & 0xFF;
    }

    /*_____________________________________________*/
    //SET

    /*Section1*/
    get seqId(){
        return this._seqId;
    }
    /*Section2*/
    get masterCommands(){
        return this._masterCommands;
    }
    get pwmFrequency(){
        return this._pwmFrequency;
    }
    get pwmDutyCicle(){
        return Math.round(this._pwmDutyCicle/2.55);
    }
    get auxOutput(){
        return this._auxOutput;
    }

    /*_____________________________________________*/
    clear(){
        /*Section1*/
        this._seqId= 0;
        /*Section2*/
        this._masterCommands= 0;
        this._pwmFrequency= 0;
        this._pwmDutyCicle= 0;
        this._auxOutput= 0;
    }

    /*_____________________________________________*/
    assignFromBuffer(buffer) {
        const arr = [...buffer];
        /*Section1*/
        this._seqId = arr[0];
        /*Section2*/
        this._masterCommands = arr[1];
        this._pwmFrequency = (arr[2]<<8) | (arr[3]);
        this._pwmDutyCicle = arr[4];
        this._auxOutput = arr[5];
    }

    /*_____________________________________________*/
    convertToBuffer(){
        const arr = [];
        /*Section1*/
        arr[0] = this._seqId;
        /*Section2*/
        arr[1] = this._masterCommands;
        arr[2] = this._pwmFrequency >> 8;
        arr[3] = this._pwmFrequency & 0xFF;
        arr[4] = this._pwmDutyCicle;
        arr[5] = this._auxOutput;
        return Buffer.from(arr);
    }

    /*_____________________________________________*/
    incSeqId(){
        this._seqId++;
        if (this._seqId >= 256) {
            this._seqId = 0;
        }
    }

    /*_____________________________________________*/
    addMasterCommand(masterCommands){
        this._masterCommands |= (masterCommands & 0xFF);
    }

    /*_____________________________________________*/
    clearMasterCommand(masterCommands){
        this._masterCommands &= ( (~masterCommands) & 0xFF);
    }
}

/*______________________________________________________________________________________________________________________________*/
class FrameSlave {
    constructor() {

        /*_____________________________________________*/
        /*Section1*/
        this._seqId= 0;
        /*Section3*/
        this._slaveStatus= 0;
        this._pumpFeedback_ms= 0;
        this._auxInput= 0;
        this._auxSlaveError= 0;

        /*_____________________________________________*/
        this._error = {
            onFrameReceived: 1,
            onFrameReceived: 2
        }

        /*_____________________________________________*/
        this._masterCommand = {
            startPwm: 1,
            stopPwm: 2,
            changePwmFrequency: 4,
            changePwmDutyCicle: 8,
            setAuxOutput: 16
        }
    }

    /*_____________________________________________*/
    //SET

    /*Section1*/
    set seqId(seqId){
        this._seqId = seqId & 0xFF;
    }
    /*Section2*/
    set slaveStatus(slaveStatus){
        this._slaveStatus = slaveStatus & 0xFF;
    }
    set pumpFeedback_ms(pumpFeedback_ms){
        this._pumpFeedback_ms = pumpFeedback_ms & 0xFFFF;
    }
    set auxInput(auxInput){
        this._auxInput = auxInput & 0xFF;
    }
    set auxSlaveError(auxSlaveError){
        this._auxSlaveError = auxSlaveError & 0xFF;
    }

    /*_____________________________________________*/
    //GET

    /*Section1*/
    get seqId(){
        return this._seqId;
    }
    /*Section2*/
    get slaveStatus(){
        return this._slaveStatus;
    }
    get pumpFeedback_ms(){
        return this._pumpFeedback_ms;
    }
    get auxInput(){
        return this._auxInput;
    }
    get auxSlaveError(){
        return this._auxSlaveError;
    }

    /*_____________________________________________*/
    clear(){
        /*Section1*/
        this._seqId= 0;
        /*Section3*/
        this._slaveStatus= 0;
        this._pumpFeedback_ms= 0;
        this._auxInput= 0;
        this._auxSlaveError= 0;
    }

    /*_____________________________________________*/
    assignFromBuffer(buffer) {
        const arr = [...buffer];
        /*Section1*/
        this._seqId = arr[0];
        /*Section2*/
        this._slaveStatus = arr[1];
        this._pumpFeedback_ms = (arr[2]<<8) | (arr[3]);
        this._auxInput = arr[4];
        this._auxSlaveError = arr[5];
    }

    /*_____________________________________________*/
    convertToBuffer(){
        const arr = [];
        /*Section1*/
        arr[0] = this._seqId;
        /*Section2*/
        arr[1] = this._slaveStatus;
        arr[2] = this._pumpFeedback_ms >> 8;
        arr[3] = this._pumpFeedback_ms & 0xFF;
        arr[4] = this._auxInput;
        arr[5] = this._auxSlaveError;
        return Buffer.from(arr);
    }

    /*_____________________________________________*/
    incSeqId(seqId){
        this._packet.seqId++;
    }

    /*_____________________________________________*/
    isAuxSlaveError(auxSlaveError){
        const testMask = (auxSlaveError & 0xFF) & this._auxSlaveError;
        return (testMask == 0x00) ? false : true;
    }
}

module.exports = { Frame: Frame, FrameMaster: FrameMaster, FrameSlave: FrameSlave };
