function applyRules(str){
    let data = "";
    if(str){
        if(str.indexOf("--to--") !== -1){
            let arr =  str.split("--to--");            
            data = {
                "between" :  [
                    arr[0]+"T00:00:00",
                    arr[1]+"T23:59:59"
                ]
            }

        }else if(str.indexOf("|") !== -1){
            data = {
                'inq' :str.split("|") 
            }      
        }else{
            data = {
                'eq' : isNaN(str) ?  str : Number(str) 
            }
        }
    }
    return data;
}


function convertToJson(str){
    if(!str){
        return null;
    }
    let arr = str.split(",");
    let data = arr.reduce(function(obj,el){
        if(el){
            let strParts = el.split(":");
            let key = strParts[0].replace(/_/g, ".");
            let value  = applyRules(strParts[1]);
            obj[key]=value;
            return obj;
        }
    },{});

    return {
        "and" : data
    }
}

// example samples
convertToJson("interview_attendance:P,interview_date:2019-04-15--to--2019-04-15,status:CAP");
convertToJson("status:all,applied_date:2019-04-15--to--2019-04-15,screen_status:SR|NS");
convertToJson("location:mumbai|delhi|pune,list_type:S,min_education:1");
