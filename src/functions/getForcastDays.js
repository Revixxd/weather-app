export function getForcastDays(array, todayData){
    if(array !== undefined){
        const firstDate = (todayData.dt) - 10800
        const oneDayTime = 86400
        const dates = [firstDate]
        const returnArray = []

        for(var i = 0; i < 5; i++){
            dates.push(dates[i] + oneDayTime)
        }
        
        dates.map(date =>{
            array.map((element) => {
                if(element.dt === date){
                    returnArray.push(element)
                }
                return returnArray
            })
            return returnArray
        })
    return returnArray
    }else{
        return
    }
}
