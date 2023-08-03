const utils = {};

utils.removeUndefinedKeys = async (obj) => {
    try {
        Object.keys(obj).forEach((key) => {
            if(obj[key] === "-1" || obj[key] === -1) {
                obj[key] = null;
            } else if (obj[key] === undefined || obj[key] === "") {
                delete obj[key];
            }
        });

        return obj;

    } catch (err) {
        throw new Error (err.message);
    }
};

module.exports = utils;