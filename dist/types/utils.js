"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is = void 0;
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
