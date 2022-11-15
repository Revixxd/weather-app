export const cityUrl = (city) => {
    if (city === undefined) {
        return coordUrl
    }
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4ef69c0833663e4956a91fbe52823615`
}

export const coordUrl = (array) => {
    const lat = array[0]
    const lon = array[1]
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=4ef69c0833663e4956a91fbe52823615`
}
