function convertToRoman(num) {
    const obj = {
        0:['M',1000], 
        1:['D', 500], 
        2:['C', 100], 
        3:['L', 50], 
        4:['X', 10], 
        5:['V', 5], 
        6:['I', 1]
    };
    
    let result = '';
    
    for (let i = 0; i < 7; i++) {
        const [symbol, value] = obj[i];
        while (num >= value) {
            result += symbol;
            num -= value;
        }
        
        // Handle special cases (4, 9, 40, 90, etc.)
        if (i % 2 === 1) { // Only for D (500), L (50), V (5)
            const nextSymbol = obj[i+1][0];
            const nextValue = obj[i+1][1];
            const specialValue = value - nextValue;
            
            if (num >= specialValue) {
                result += nextSymbol + symbol;
                num -= specialValue;
            }
        }
    }
    
    return result;
}

// do not edit below this line
module.exports = convertToRoman
