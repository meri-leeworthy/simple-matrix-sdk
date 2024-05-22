"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaError = exports.deepConvertNumbersToStrings = exports.is = void 0;
function is(schema, t) {
    try {
        schema.parse(t);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.is = is;
function deepConvertNumbersToStrings(obj) {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
        throw new Error("Not an object");
    }
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "number") {
                newObj[key] = obj[key].toString();
            }
            else if (typeof obj[key] === "object" && obj[key] !== null) {
                newObj[key] = deepConvertNumbersToStrings(obj[key]);
            }
            else {
                newObj[key] = obj[key];
            }
        }
    }
    return newObj;
}
exports.deepConvertNumbersToStrings = deepConvertNumbersToStrings;
exports.schemaError = {
    errcode: "Unknown_result",
    error: "Result did not match expected schema",
};
