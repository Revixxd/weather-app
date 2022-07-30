export function deleteTask(array, elementToDelete){
    let tempArray = Array.from(array)
    let newArray = [...tempArray].filter(item => item !== elementToDelete)
    return (newArray)
}