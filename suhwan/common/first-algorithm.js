const network = {
    "Alice": ["Bob", "Charlie"],
    "Bob": ["Alice", "David"],
    "Charlie": ["Alice", "Eve"],
    "David": ["Bob"],
    "Eve": ["Charlie"]
};

function friendRecommendations(network, name) {
    const visited = [];
    const queue = [name];

    while (queue.length > 0) {
        const person = queue.pop();

        if (!visited.includes(person)) {
            visited.push(person);
            queue.push(...network[person]);
        }
    }

    const answer = [];
    for (const person of visited) {
        if (person != name && !network[name].includes(person)) {
            answer.push(person);
        }
    }

    return answer;
}

console.log(friendRecommendations(network, "Alice"));