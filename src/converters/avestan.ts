const avestan = (input : string) : string => {
    input = input.replace(/A/g, "𐬁")
    input = input.replace(/aa/g, "𐬀")
    input = input.replace(/a/g, "𐬀")
    input = input.replace(/Á/g, "𐬃")
    input = input.replace(/áá/g, "𐬂")
    input = input.replace(/á/g, "𐬂")
    input = input.replace(/ãã/g, "𐬅")
    input = input.replace(/ã/g, "𐬄")
    input = input.replace(/ææ/g, "𐬆")
    input = input.replace(/æ/g, "𐬆")
    input = input.replace(/Æ/g, "𐬇")
    input = input.replace(/êê/g, "𐬆")
    input = input.replace(/ê/g, "𐬆")
    input = input.replace(/Ê/g, "𐬇")
    input = input.replace(/ee/g, "𐬈")
    input = input.replace(/e/g, "𐬈")
    input = input.replace(/E/g, "𐬉")
    input = input.replace(/oo/g, "𐬊")
    input = input.replace(/o/g, "𐬊")
    input = input.replace(/O/g, "𐬋")
    input = input.replace(/i/g, "𐬌")
    input = input.replace(/I/g, "𐬍")
    input = input.replace(/u/g, "𐬎")
    input = input.replace(/U/g, "𐬏")
    input = input.replace(/k/g, "𐬐")
    input = input.replace(/X/g, "𐬒")
    input = input.replace(/xw/g, "𐬓")
    input = input.replace(/x/g, "𐬑")
    input = input.replace(/c/g, "𐬗")
    input = input.replace(/j/g, "𐬘")
    input = input.replace(/th/g, "𐬚")
    input = input.replace(/t/g, "𐬙")
    input = input.replace(/dh/g, "𐬜")
    input = input.replace(/d/g, "𐬛")
    input = input.replace(/T/g, "𐬝")
    input = input.replace(/p/g, "𐬞")
    input = input.replace(/f/g, "𐬟")
    input = input.replace(/b/g, "𐬠")
    input = input.replace(/B/g, "𐬡")
    input = input.replace(/ngh/g, "𐬣")
    input = input.replace(/ngw/g, "𐬤")
    input = input.replace(/ng/g, "𐬢")
    input = input.replace(/gh/g, "𐬖")
    input = input.replace(/g/g, "𐬔")
    input = input.replace(/G/g, "𐬕")
    input = input.replace(/ñ/g, "𐬦")
    input = input.replace(/n/g, "𐬥")
    input = input.replace(/N/g, "𐬧")
    input = input.replace(/m/g, "𐬨")
    input = input.replace(/M/g, "𐬩")
    input = input.replace(/Y/g, "𐬪")
    input = input.replace(/y/g, "𐬫")
    input = input.replace(/v/g, "𐬬")
    input = input.replace(/r/g, "𐬭")
    input = input.replace(/shy/g, "𐬳")
    input = input.replace(/sh/g, "𐬱")
    input = input.replace(/zh/g, "𐬲")
    input = input.replace(/S/g, "𐬴")
    input = input.replace(/s/g, "𐬯")
    input = input.replace(/z/g, "𐬰")
    input = input.replace(/h/g, "𐬵")

    return input;
}

export default avestan;