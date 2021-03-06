const armenian = (input: string): string => {
    input = input.replace(/ee/g, "է")
    input = input.replace(/EE/g, "Է")
    input = input.replace(/ew/g, "և")
    input = input.replace(/e'/g, "ը")
    input = input.replace(/E'/g, "Ը")

    input = input.replace(/e/g, "ե")
    input = input.replace(/E/g, "Ե")

    input = input.replace(/zh/g, "ժ")
    input = input.replace(/ch\./g, "ճ")
    input = input.replace(/c'h/g, "ճ")
    input = input.replace(/C'h/g, "ճ")
    input = input.replace(/ch/g, "չ")
    input = input.replace(/sh/g, "շ")
    input = input.replace(/jh/g, "ջ")
    input = input.replace(/ZH/g, "Ժ")
    input = input.replace(/CH\./g, "Ճ")
    input = input.replace(/SH/g, "Շ")
    input = input.replace(/CH/g, "Չ")
    input = input.replace(/JH/g, "Ջ")

    input = input.replace(/t'/g, "թ")
    input = input.replace(/p'/g, "փ")
    input = input.replace(/k'/g, "ք")
    input = input.replace(/o'/g, "օ")
    input = input.replace(/c'/g, "ց")
    input = input.replace(/P'/g, "Փ")
    input = input.replace(/C'/g, "Ց")
    input = input.replace(/K'/g, "Ք")
    input = input.replace(/O'/g, "Օ")
    input = input.replace(/T'/g, "Թ")

    input = input.replace(/g\./g, "ղ")
    input = input.replace(/l\./g, "ղ")
    input = input.replace(/r\./g, "ռ")
    input = input.replace(/V\./g, "Վ")
    input = input.replace(/R\./g, "Ռ")
    input = input.replace(/G\./g, "Ղ")
    input = input.replace(/L\./g, "Ղ")


    input = input.replace(/I/g, "Ի")
    input = input.replace(/L/g, "Լ")
    input = input.replace(/X/g, "Խ")
    input = input.replace(/C/g, "Ծ")
    input = input.replace(/K/g, "Կ")
    input = input.replace(/J/g, "Ձ")
    input = input.replace(/M/g, "Մ")
    input = input.replace(/Y/g, "Յ")
    input = input.replace(/N/g, "Ն")
    input = input.replace(/O/g, "Ո")
    input = input.replace(/P/g, "Պ")
    input = input.replace(/S/g, "Ս")
    input = input.replace(/T/g, "Տ")
    input = input.replace(/R/g, "Ր")
    input = input.replace(/W/g, "Ւ")
    input = input.replace(/F/g, "Ֆ")
    input = input.replace(/U/g, "Սւ")
    input = input.replace(/a/g, "ա")
    input = input.replace(/b/g, "բ")
    input = input.replace(/g/g, "գ")
    input = input.replace(/d/g, "դ")
    input = input.replace(/z/g, "զ")
    input = input.replace(/i/g, "ի")
    input = input.replace(/l/g, "լ")
    input = input.replace(/x/g, "խ")
    input = input.replace(/c/g, "ծ")
    input = input.replace(/k/g, "կ")
    input = input.replace(/j/g, "ձ")
    input = input.replace(/m/g, "մ")
    input = input.replace(/y/g, "յ")
    input = input.replace(/n/g, "ն")
    input = input.replace(/o/g, "ո")
    input = input.replace(/p/g, "պ")
    input = input.replace(/s/g, "ս")
    input = input.replace(/v/g, "վ")
    input = input.replace(/t/g, "տ")
    input = input.replace(/r/g, "ր")
    input = input.replace(/w/g, "ւ")
    input = input.replace(/f/g, "ֆ")
    input = input.replace(/u/g, "ու")
    input = input.replace(/A/g, "Ա")
    input = input.replace(/B/g, "Բ")
    input = input.replace(/G/g, "Գ")
    input = input.replace(/D/g, "Դ")
    input = input.replace(/Z/g, "Զ")

    input = input.replace(/h/g, "հ")
    input = input.replace(/H/g, "Հ")


    input = input.replace(/\?/g, "՞")
    input = input.replace(/\./g, "։")
    input = input.replace(/\.'/g, "՝")
    input = input.replace(/;/g, "՟")
    input = input.replace(/;'/g, "՛")
    input = input.replace(/!/g, "՜")
    input = input.replace(/``/g, "«")
    input = input.replace(/''/g, "»")

    return input;
}

const armenianTranslitIso = (input: string): string => {
    input = input.replace(/ee/g, "ē")
    input = input.replace(/EE/g, "Ē")
    input = input.replace(/e'/g, "ë")
    input = input.replace(/E'/g, "Ë")

    input = input.replace(/zh/g, "ž")
    input = input.replace(/ch\./g, "č̣")
    input = input.replace(/c'h/g, "č̣")
    input = input.replace(/C'h/g, "Č̣")
    input = input.replace(/ch/g, "č")
    input = input.replace(/sh/g, "š")
    input = input.replace(/jh/g, "ǰ")
    input = input.replace(/ZH/g, "Ž")
    input = input.replace(/CH\./g, "Č̣")
    input = input.replace(/SH/g, "Š")
    input = input.replace(/CH/g, "Č")
    input = input.replace(/JH/g, "ǰ")

    input = input.replace(/o'/g, "ò")
    input = input.replace(/O'/g, "Ò")

    input = input.replace(/g\./g, "ġ")
    input = input.replace(/l\./g, "ġ")
    input = input.replace(/r\./g, "ṙ")
    input = input.replace(/R\./g, "Ṙ")
    input = input.replace(/G\./g, "Ġ")
    input = input.replace(/L\./g, "Ġ")


    input = input.replace(/C/g, "Ç")
    input = input.replace(/J/g, "Dz")
    input = input.replace(/Ow/g, "U")
    input = input.replace(/c/g, "ç")
    input = input.replace(/j/g, "dz")
    input = input.replace(/ow/g, "u")

    return input;
}


const armenianTranslitClassical = (input: string): string => {
    input = armenianTranslitIso(input);
    input = input.replace(/ë/g, "ə")
    input = input.replace(/Ë/g, "Ə")
    input = input.replace(/ç/g, "c")
    input = input.replace(/ġ/g, "ł")
    input = input.replace(/č/g, "č'")
    input = input.replace(/č̣/g, "č")
    input = input.replace(/ò/g, "ō")

    input = input.replace(/'/g, "ʿ")

    return input;
}

const fromArmenianToISO = (input: string): string => {

    input = input.replace(/Ա/g, "A");
    input = input.replace(/Բ/g, "B");
    input = input.replace(/Գ/g, "G");
    input = input.replace(/Դ/g, "D");
    input = input.replace(/Ե/g, "E");
    input = input.replace(/Զ/g, "Z");
    input = input.replace(/Է/g, "Ē");
    input = input.replace(/Ը/g, "Ë");
    input = input.replace(/Թ/g, "T’");
    input = input.replace(/Ժ/g, "Ž");
    input = input.replace(/Ի/g, "I");
    input = input.replace(/Լ/g, "L");
    input = input.replace(/Խ/g, "X");
    input = input.replace(/Ծ/g, "Ç");
    input = input.replace(/Կ/g, "K");
    input = input.replace(/Հ/g, "H");
    input = input.replace(/Ձ/g, "Dz");
    input = input.replace(/Ղ/g, "Ġ");
    input = input.replace(/Ճ/g, "Č̣");
    input = input.replace(/Մ/g, "M");
    input = input.replace(/Յ/g, "Y");
    input = input.replace(/Ն/g, "N");
    input = input.replace(/Շ/g, "Š");
    input = input.replace(/Ո/g, "O");
    input = input.replace(/Չ/g, "Č");
    input = input.replace(/Պ/g, "P");
    input = input.replace(/Ջ/g, "ǰ");
    input = input.replace(/Ռ/g, "Ṙ");
    input = input.replace(/Ս/g, "S");
    input = input.replace(/Վ/g, "V");
    input = input.replace(/Տ/g, "T");
    input = input.replace(/Ր/g, "R");
    input = input.replace(/Ց/g, "C’");
    input = input.replace(/Ւ/g, "W");
    input = input.replace(/Փ/g, "P’");
    input = input.replace(/Ք/g, "K’");
    input = input.replace(/Օ/g, "Ò");
    input = input.replace(/Ֆ/g, "F");
    input = input.replace(/ա/g, "a");
    input = input.replace(/բ/g, "b");
    input = input.replace(/գ/g, "g");
    input = input.replace(/դ/g, "d");
    input = input.replace(/ե/g, "e");
    input = input.replace(/զ/g, "z");
    input = input.replace(/է/g, "ē");
    input = input.replace(/ը/g, "ë");
    input = input.replace(/թ/g, "t’");
    input = input.replace(/ժ/g, "ž");
    input = input.replace(/ի/g, "i");
    input = input.replace(/լ/g, "l");
    input = input.replace(/խ/g, "x");
    input = input.replace(/ծ/g, "ç");
    input = input.replace(/կ/g, "k");
    input = input.replace(/հ/g, "h");
    input = input.replace(/ձ/g, "dz");
    input = input.replace(/ղ/g, "ġ");
    input = input.replace(/ճ/g, "č̣");
    input = input.replace(/մ/g, "m");
    input = input.replace(/յ/g, "y");
    input = input.replace(/ն/g, "n");
    input = input.replace(/շ/g, "š");
    input = input.replace(/ո/g, "o");
    input = input.replace(/չ/g, "č");
    input = input.replace(/պ/g, "p");
    input = input.replace(/ջ/g, "ǰ");
    input = input.replace(/ռ/g, "ṙ");
    input = input.replace(/ս/g, "s");
    input = input.replace(/վ/g, "v");
    input = input.replace(/տ/g, "t");
    input = input.replace(/ր/g, "r");
    input = input.replace(/ց/g, "c’");
    input = input.replace(/ւ/g, "w");
    input = input.replace(/փ/g, "p’");
    input = input.replace(/ք/g, "k’");
    input = input.replace(/օ/g, "ò");
    input = input.replace(/ֆ/g, "f");
    input = input.replace(/ու/g,"u");
    input = input.replace(/և/g, "ew");


    return input;
}

const fromArmenianToClassical = (input: string): string => {
    input = input.replace(/ու/g, "u");
    input = input.replace(/Ա/g, "A");
    input = input.replace(/Բ/g, "B");
    input = input.replace(/Գ/g, "G");
    input = input.replace(/Դ/g, "D");
    input = input.replace(/Ե/g, "E");
    input = input.replace(/Զ/g, "Z");
    input = input.replace(/Է/g, "Ē");
    input = input.replace(/Ը/g, "Ə");
    input = input.replace(/Թ/g, "Tʿ");
    input = input.replace(/Ժ/g, "Ž");
    input = input.replace(/Ի/g, "I");
    input = input.replace(/Լ/g, "L");
    input = input.replace(/Խ/g, "X");
    input = input.replace(/Ծ/g, "C");
    input = input.replace(/Կ/g, "K");
    input = input.replace(/Հ/g, "H");
    input = input.replace(/Ձ/g, "J");
    input = input.replace(/Ղ/g, "Ł");
    input = input.replace(/Ճ/g, "Č");
    input = input.replace(/Մ/g, "M");
    input = input.replace(/Յ/g, "Y");
    input = input.replace(/Ն/g, "N");
    input = input.replace(/Շ/g, "Š");
    input = input.replace(/Ո/g, "O");
    input = input.replace(/Չ/g, "Čʿ");
    input = input.replace(/Պ/g, "P");
    input = input.replace(/Ջ/g, "ǰ");
    input = input.replace(/Ռ/g, "Ṙ");
    input = input.replace(/Ս/g, "S");
    input = input.replace(/Վ/g, "V");
    input = input.replace(/Տ/g, "T");
    input = input.replace(/Ր/g, "R");
    input = input.replace(/Ց/g, "Cʿ");
    input = input.replace(/Ւ/g, "W");
    input = input.replace(/Փ/g, "Pʿ");
    input = input.replace(/Ք/g, "Kʿ");
    input = input.replace(/Օ/g, "Ō");
    input = input.replace(/Ֆ/g, "F");
    input = input.replace(/ա/g, "a");
    input = input.replace(/բ/g, "b");
    input = input.replace(/գ/g, "g");
    input = input.replace(/դ/g, "d");
    input = input.replace(/ե/g, "e");
    input = input.replace(/զ/g, "z");
    input = input.replace(/է/g, "ē");
    input = input.replace(/ը/g, "ə");
    input = input.replace(/թ/g, "tʿ");
    input = input.replace(/ժ/g, "ž");
    input = input.replace(/ի/g, "i");
    input = input.replace(/լ/g, "l");
    input = input.replace(/խ/g, "x");
    input = input.replace(/ծ/g, "c");
    input = input.replace(/կ/g, "k");
    input = input.replace(/հ/g, "h");
    input = input.replace(/ձ/g, "j");
    input = input.replace(/ղ/g, "ł");
    input = input.replace(/ճ/g, "č");
    input = input.replace(/մ/g, "m");
    input = input.replace(/յ/g, "y");
    input = input.replace(/ն/g, "n");
    input = input.replace(/շ/g, "š");
    input = input.replace(/ո/g, "o");
    input = input.replace(/չ/g, "čʿ");
    input = input.replace(/պ/g, "p");
    input = input.replace(/ջ/g, "ǰ");
    input = input.replace(/ռ/g, "ṙ");
    input = input.replace(/ս/g, "s");
    input = input.replace(/վ/g, "v");
    input = input.replace(/տ/g, "t");
    input = input.replace(/ր/g, "r");
    input = input.replace(/ց/g, "cʿ");
    input = input.replace(/ւ/g, "w");
    input = input.replace(/փ/g, "pʿ");
    input = input.replace(/ք/g, "kʿ");
    input = input.replace(/օ/g, "ō");
    input = input.replace(/ֆ/g, "f");
    input = input.replace(/և/g, "ew");


    return input;
}

export { armenian, armenianTranslitIso, armenianTranslitClassical, fromArmenianToClassical, fromArmenianToISO };
