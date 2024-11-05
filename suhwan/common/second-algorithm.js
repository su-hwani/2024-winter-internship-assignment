function isEmpty(value) {
    answer = false;

    if (value === null || value === undefined) {
        answer = true;
    }
    else if (typeof value === 'string') {
        answer = value.trim() === '';
    }
    else if (Array.isArray(value)) {
        answer = value.length === 0 || value.every(isEmpty);
    }
    else if (typeof value === 'object') {
        answer = Object.keys(value).length === 0 || Object.values(value).every(isEmpty);
    }
    return answer;
}

console.log(isEmpty(null)) // 출력: true
console.log(isEmpty({})) // 출력: true
console.log(isEmpty(0)) // 출력: false
console.log(isEmpty(false)) // 출력: false
console.log(isEmpty([{}, {a:[]}])) // 출력: true
console.log(isEmpty({a: null, b: ''})) // 출력: true