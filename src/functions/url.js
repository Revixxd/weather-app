
export const cityUrl = (city)=>{
    if(city === undefined){
        return coordUrl
    }
    return(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=410e713617c25eb9e018ecafd290e053`
        )
    }

export const coordUrl = (array) => {
    const lat = array[0]
    const lon = array[1]
    return(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=410e713617c25eb9e018ecafd290e053`
    )

}

