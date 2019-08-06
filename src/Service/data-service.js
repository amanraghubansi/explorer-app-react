// export default class ContinentDataManager{
//     static masterContinentData={};

//     static getContinentData(code){
//         return ContinentDataManager.masterContinentData[code] || null;
//     }

//     static setContinentData(code,data){
//         if(code && data){
//             ContinentDataManager.masterContinentData[code] = data;
//             return true;
//         }
//         return false;
//     }
// }

class ContinentDataManager{
    constructor(){
        if(! ContinentDataManager.instance){
          this.masterContinentData = {};
          ContinentDataManager.instance = this;
        }
        return ContinentDataManager.instance;
    }

    getContinentData(code){
        return this.masterContinentData[code] || null;
    }

    setContinentData(code,data){
        if(code && data){
            this.masterContinentData[code] = data;
        }
    }
}

const continentDataManager = new ContinentDataManager();
Object.freeze(continentDataManager);

export default continentDataManager;