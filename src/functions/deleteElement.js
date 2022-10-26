export function deleteElement(array, elementToDelete) {
    let tempArray = Array.from(array)
    let newArray = [...tempArray].filter((item) => item !== elementToDelete)
    localStorage.setItem('localfavCity', newArray)
    console.log(newArray)
    return newArray
}
