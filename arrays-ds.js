function reverseArray(a) {
    // Write your code here
    for(let i = 0; i < a.length / 2; i++) {
        let temp = a[a.length - i - 1];
        a[a.length - i - 1] = a[i];
        a[i] = temp;
    }
    return a;
}