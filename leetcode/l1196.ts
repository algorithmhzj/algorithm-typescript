function maxNumberOfApples(arr: number[]): number {
    arr.sort(function (a, b) {
        return a - b
    })
    var result = 0
    var aux = 5000
    for (let i = 0; i < arr.length; i++) {
        aux = aux - arr[i]
        if (aux < 0) {
            break
        }
        result++
    }
    return result
}