module.exports = function check(braces, bracketsConfig) {
    var matches = {};
    var stack = [];
    for (var i = 0; i < bracketsConfig.length; i++) {
        matches[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }
    for (var i = 0; i < braces.length; i++) {
        if (matches[braces[i]]) {
            if (matches[braces[i]] == braces[i] && stack.indexOf(braces[i]) != -1) {
                var element = stack.pop();
                if (element != braces[i]) {
                    return false;
                }
            } else {
                stack.push(braces[i]);
            }
        } else {
            if (braces[i] != matches[stack.pop()]) {
                return false;
            }
        }

    }
    return stack.length === 0;
}

/*console.log(check('(||)|', [
    ['|', '|'],
    ['(', ')']
]));*/