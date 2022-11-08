export function updateLocalStorage(set) {
    const tempArray = Array.from(set)
    localStorage.setItem('localfavCity', JSON.stringify(tempArray))
}
