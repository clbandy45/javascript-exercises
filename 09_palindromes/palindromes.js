const palindromes = function (palindrome) {
    const alphaNumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const cleaned = palindrome.toLowerCase().split('').filter(char => alphaNumerical.includes(char)).join('');
    const reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
};


// Do not edit below this line
module.exports = palindromes;
