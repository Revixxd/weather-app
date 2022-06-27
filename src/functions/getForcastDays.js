export function getForcastDays(array){
    console.log(array)
    const tempArray =[]
    if(array === undefined){
        return
    }else{
        array.map((element) => {
            if(element.dt_txt == "2022-06-30 15:00:00"){
                console.log(element)
            }else{

            }
        })
    }
}