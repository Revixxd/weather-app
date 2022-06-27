export function calculateTemp(degreInfo,temperature){
    if(degreInfo === "celcius"){
      return Math.round(temperature - 273.1)
    }else{
      return Math.round((((temperature - 273.1) *9) /5) +32)
    }
  }
