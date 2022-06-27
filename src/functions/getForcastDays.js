export function getForcastDays(array, todayData){
    if(array !== undefined){
        console.log(array)
        const firstDate = (todayData.dt) - 10800
        const oneDayTime = 86400
        const dates = [firstDate]

        for(var i = 0; i < 5; i++){
            dates.push(dates[i] + oneDayTime)
        }

        const tempset = new Set()
        
        dates.map(date =>{
            array.map((element) => {
                if(element.dt == date){
                    tempset.add(element)
                }else{

                }
            })
        })
    return tempset
    }else{
        return
    }

}

// 2022-06-30