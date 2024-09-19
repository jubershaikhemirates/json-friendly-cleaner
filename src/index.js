/**
 * Removes null values from an object or array.
 * @param {Object|Array} data - The input object or array.
 * @returns {Object|Array} A new object or array with null values removed.
 */
function removeNulls(data) {
    return removeValues(data, [null]);
}

/**
 * Removes specified values from an object or array.
 * @param {Object|Array} data - The input object or array.
 * @param {Array} excludeList - List of values to be excluded.
 * @returns {Object|Array} A new object or array with specified values removed.
 * @throws {TypeError} If input types are invalid.
 */
function removeValues(data, excludeList) {
    if (data === null || typeof data !== 'object') {
        return data;
    }

    if (!Array.isArray(excludeList)) {
        throw new TypeError('excludeList must be an array');
    }

    if (Array.isArray(data)) {
        return data
            .map(item => removeValues(item, excludeList))
            .filter(item => !excludeList.includes(item));
    }

    return Object.entries(data).reduce((acc, [key, value]) => {
        const processedValue = removeValues(value, excludeList);
        if (!excludeList.includes(processedValue)) {
            acc[key] = processedValue;
        }
        return acc;
    }, {});
}

module.exports = {
    removeNulls,
    removeValues
};
