export function deleteElement(array, elementToDelete) {
    let tempArray = Array.from(array)
    let newArray = new Set(
        [...tempArray].filter((item) => item !== elementToDelete)
    )

    return newArray
}
