function calculateMean(numsArray) {
    let sum = 0;
    for (let num of numsArray) {
        sum += Number(num);
    }
    return sum / numsArray.length;
}

function calculateMedian(numsArray) {
    let idx = Math.floor(numsArray.length / 2)
    return numsArray[idx];
}

function calculateModal(strArray) {
    /*     first we turn the string elements into actual numbers */
    let numsArray = [];
    for (let str of strArray) {
        numsArray.push(Number(str));
    }
    /*     Then we count the ocurrences of each number */
    const counts = {};
    for (let num of numsArray) {
        counts[num] = counts[num] ? counts[num] += 1 : counts[num] = 1;
    }
    sortedApperiencies = Object.values(counts).sort((a, b) => (b - a))

    for (let key in counts) {
        if (counts[key] === sortedApperiencies[0]) {
            return key;
        }
    }

}

function checkInputs(req) {
    arrOfStrings = req.query["nums"].split(",");
    for (let strElem of arrOfStrings) {
        if (Number(strElem) === NaN || arrOfStrings.length === 0) {
            throw new Error();
        }
    }
    return arrOfStrings;
}

module.exports = { calculateMean: calculateMean, calculateMedian: calculateMedian, calculateModal: calculateModal, checkInputs:checkInputs}