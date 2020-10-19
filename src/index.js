module.exports = function toReadable(number) {
    const numsWord = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    const numsWordTy = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const regex = /^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/;

    const before20 = (n) => numsWord[Number(n)];
    const after20 = (n) => numsWordTy[n[0]] + ' ' + numsWord[n[1]];


    const num = Number(number);
    if (isNaN(num)) return '';
    if (num === 0) return 'zero';

    const numStr = num.toString();
    if (numStr.length > 9) {
        throw new Error('overflow');
    }

    const [, n1, n2, n3, n4, n5] = ('000000000' + numStr).substr(-9).match(regex);

    let str = '';
    str += n1 != 0 ? (before20(n1) || after20(n1)) + 'crore ' : '';
    str += n2 != 0 ? (before20(n2) || after20(n2)) + 'lakh ' : '';
    str += n3 != 0 ? (before20(n3) || after20(n3)) + 'thousand ' : '';
    str += n4 != 0 ? before20(n4) + 'hundred ' : '';
    str += n5 != 0 && str != '' ? '' : '';
    str += n5 != 0 ? (before20(n5) || after20(n5)) : '';

    return str.trim();
}
