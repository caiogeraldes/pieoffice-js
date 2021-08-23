"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const avestanTrans = (input) => {
    input = input.replace(/A/g, "ā");
    input = input.replace(/aa/g, "ā");
    input = input.replace(/Á/g, "ā̊");
    input = input.replace(/áá/g, "ā̊");
    input = input.replace(/á/g, "å");
    input = input.replace(/Ã/g, "ą̇");
    input = input.replace(/ãã/g, "ą̇");
    input = input.replace(/ã/g, "ą");
    input = input.replace(/ææ/g, "ə̄");
    input = input.replace(/æ/g, "ə");
    input = input.replace(/Æ/g, "ə̄");
    input = input.replace(/êê/g, "ə̄");
    input = input.replace(/ê/g, "ə");
    input = input.replace(/Ê/g, "ə̄");
    input = input.replace(/ee/g, "ē");
    input = input.replace(/E/g, "ē");
    input = input.replace(/oo/g, "ō");
    input = input.replace(/O/g, "ō");
    input = input.replace(/I/g, "ī");
    input = input.replace(/U/g, "ū");
    input = input.replace(/X/g, "x́");
    input = input.replace(/xw/g, "xᵛ");
    input = input.replace(/c/g, "č");
    input = input.replace(/j/g, "ǰ");
    input = input.replace(/th/g, "ϑ");
    input = input.replace(/dh/g, "δ");
    input = input.replace(/T/g, "t̰");
    input = input.replace(/B/g, "β");
    input = input.replace(/ngH/g, "ŋ́");
    input = input.replace(/ngW/g, "ŋᵛ");
    input = input.replace(/ng/g, "ŋ");
    input = input.replace(/gh/g, "γ");
    input = input.replace(/G/g, "ġ");
    input = input.replace(/ñ/g, "ń");
    input = input.replace(/N/g, "ṇ");
    input = input.replace(/m/g, "m");
    input = input.replace(/M/g, "m̨");
    input = input.replace(/Y/g, "ẏ");
    input = input.replace(/shy/g, "š́");
    input = input.replace(/sh/g, "š");
    input = input.replace(/zh/g, "ž");
    input = input.replace(/S/g, "ṣ̌");
    return input;
};
exports.default = avestanTrans;
