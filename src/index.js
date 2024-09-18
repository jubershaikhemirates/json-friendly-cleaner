function removeNulls(obj) {
    return removeValues(obj, null);
}

function removeValues(obj, excludeValues) {
    // Ensure excludeValues is an array for consistency
    const excludes = Array.isArray(excludeValues) ? excludeValues : [excludeValues];

    if (Array.isArray(obj)) {
        return obj
            .map(item => removeValues(item, excludes))
            .filter(item => !excludes.includes(item));
    } else if (obj !== null && typeof obj === 'object') {
        return Object.keys(obj)
            .reduce((acc, key) => {
                const value = removeValues(obj[key], excludes);
                if (!excludes.includes(value)) {
                    acc[key] = value;
                }
                return acc;
            }, {});
    }
    return obj;
}

module.exports = {
    removeNulls,
    removeValues
};
