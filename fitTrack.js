
function weeklyStepsSummary(arrayOfSteps){
    if(Array.isArray(arrayOfSteps===false)){
        return "Invalid";
    }
    let totalSteps = 0;
    for(item of arrayOfSteps){
        if(typeof item !== 'number'){
            return "Invalid";
        }
        totalSteps+=item;
    }
    if(totalSteps>=50000){
        return {totalSteps,goalReched:true};
    }else{
        return {totalSteps,goalReched:false}
    }
}




let result=weeklyStepsSummary([8000,7500,9200,6000,10000,5500,4000]);
console.log(result);
result=weeklyStepsSummary("array");
console.log(result);
result=weeklyStepsSummary([8000,7500,9200,5000,10000,5500,4000]);
console.log(result);
result=weeklyStepsSummary([8000,7500,'9200',5000,10000,5500,4000]);
console.log(result);
