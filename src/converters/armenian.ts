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

export { armenian, armenianTranslitIso, armenianTranslitClassical };
