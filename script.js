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
    let remaining = num;
    
    for (const key in obj) {
        const [symbol, value] = obj[key];
        while (remaining >= value) {
            result += symbol;
            remaining -= value;
        }
        
        // Handle subtractive notation (4, 9, 40, etc.)
        if (value.toString().startsWith('5') || value.toString().startsWith('50') || value.toString().startsWith('500')) {
            const nextKey = parseInt(key) + 1;
            if (obj[nextKey]) {
                const [nextSymbol, nextValue] = obj[nextKey];
                const combinedValue = value - nextValue;
                if (remaining >= combinedValue && combinedValue > 0) {
                    result += nextSymbol + symbol;
                    remaining -= combinedValue;
                }
            }
        }
    }
    
    return result;
}