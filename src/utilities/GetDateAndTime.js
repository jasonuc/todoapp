
export function getDateTime() {
    const currentDate = new Date()
    let dateString = currentDate.toLocaleString()
    return dateString
}