import { photosUrl } from "../resources/imagesUrl"

export function getPhotosUrl (currentWeather){
    const tempPhoto = photosUrl.weather.find(element => element.name === (currentWeather))
    if(tempPhoto !== undefined){
        return(tempPhoto.url)
    }
}