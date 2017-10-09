let request = require('request');

function random_choice(options) {
    return options[Math.floor(Math.random()*options.length)];
}

function random_vowel() {
    let vowels = 'aeiou';
    return random_choice(vowels.split(''));
}

function random_consonant() { 
    // Taken from https://gist.github.com/malross/57287af9ec80563ae8d12a14d27d1020
    let consonants = [
        "b",
        "bl",
        "br",
        "c",
        "ch",
        "cl",
        "cr",
        "d",
        "dr",
        "f",
        "fl",
        "fr",
        "g",
        "gl",
        "gr",
        "k",
        "kr",
        "l",
        "m",
        "n",
        "p",
        "ph",
        "pl",
        "pr",
        "r",
        "s",
        "sh",
        "st",
        "t",
        "th",
        "tr",
        "v",
        "x",
        "z"
    ];
    return random_choice(consonants);
}

function random_syllable() {
    return random_consonant() + random_vowel();
}

let antibody = "";
let number_of_parts = Math.floor(Math.random() * 2) + 2;
for (let i = 0; i < number_of_parts; i++) {
    antibody += random_syllable();
}
antibody += random_choice([random_consonant() + 'umab', 'zumab', 'ximab', random_consonant() + 'omab']);
let payload = {"text": "_Antibody of the day:_ *" + antibody + "*", "username": 'mabbot'};
request({
    url: 'https://hooks.slack.com/services/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',
    method: "POST",
    json: true,
    body: payload
});
