import { SCHEMA, SHOW_LOADER } from "../constants/constants";
import pubSub from "../utilities/pubSub";

const req_headers = {
  "Accept": "application/json",
  "Content-Type": "application/json"
};
let isAbortControllerExists = false;
if ("AbortController" in window) {
    isAbortControllerExists = true;
}
let controller,signal;

function toggleLoader(val){
    pubSub.publish(SHOW_LOADER,val);
}


export async function getContinentDetailsByCode (code){
    toggleLoader(true);
    if (controller !== undefined) {
        // Cancel the previous request
        controller.abort();
    }

    // Feature detect
    if (isAbortControllerExists) {
        controller = new AbortController();
        signal = controller.signal;
    }

    try{
        const responce = await fetch("https://countries.trevorblades.com/", {
            body: JSON.stringify(SCHEMA.CONTINENT_DETAIL).replace("code_placeholder",code),
            headers: req_headers,
            method: "POST",
            signal : signal
        });
        toggleLoader(false);
        return responce.json();
    }catch(e){
        toggleLoader(false);
        console.log("Error occured for continent having code : " , code);
    }
    

}

export async function getContinents (){
    toggleLoader(true);
    const responce = await fetch("https://countries.trevorblades.com/", {
        body: JSON.stringify(SCHEMA.CONTINENTS_LIST),
        headers: req_headers,
        method: "POST"
        });
    toggleLoader(false);
    return responce.json();

}