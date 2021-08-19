const gothic = (input) => {
    input = input.replace(/th/g, "𐌸")
    input = input.replace(/q'/g, "𐍁")
    input = input.replace(/z'/g, "𐍊")
    input = input.replace(/hw/g, "𐍈")
    input = input.replace(/a/g, "𐌰")
    input = input.replace(/b/g, "𐌱")
    input = input.replace(/g/g, "𐌲")
    input = input.replace(/d/g, "𐌳")
    input = input.replace(/e/g, "𐌴")
    input = input.replace(/q/g, "𐌵")
    input = input.replace(/z/g, "𐌶")
    input = input.replace(/h/g, "𐌷")
    input = input.replace(/i/g, "𐌹")
    input = input.replace(/k/g, "𐌺")
    input = input.replace(/l/g, "𐌻")
    input = input.replace(/m/g, "𐌼")
    input = input.replace(/n/g, "𐌽")
    input = input.replace(/j/g, "𐌾")
    input = input.replace(/u/g, "𐌿")
    input = input.replace(/p/g, "𐍀")
    input = input.replace(/r/g, "𐍂")
    input = input.replace(/s/g, "𐍃")
    input = input.replace(/t/g, "𐍄")
    input = input.replace(/w/g, "𐍅")
    input = input.replace(/f/g, "𐍆")
    input = input.replace(/x/g, "𐍇")
    input = input.replace(/o/g, "𐍉")

    return input;
}

export default gothic;
