const hittite = (input: string): string => { // Special det
    input = input.replace(/'d/g, "π­"); // 8
    input = input.replace(/'m/g, "πΉ"); // 356
    input = input.replace(/gloss/g, "π±");
    // 248

    // Six letters
    input = input.replace(/GURUSH/g, "π");
    input = input.replace(/DINGIR/g, "π­"); // 8
    input = input.replace(/BABBAR/g, "π");
    // 316

    // Five letters
    input = input.replace(/ΓRIN/g, "π"); // 327
    input = input.replace(/sal|MUNUS|'f/g, "π©"); // 297
    input = input.replace(/URUDU/g, "π"); // 109
    input = input.replace(/GΓSPU|GESPU2/g, "ππ½π½");
    input = input.replace(/PΓ|TΓL|tΓΊl|GΓGIR|PU2|tul2|GIGIR2/g, "π₯"); // 180
    input = input.replace(/ISKUR/g, "π");
    input = input.replace(/LUGAL/g, "π"); // 115
    input = input.replace(/MUSEN/g, "π·");
    input = input.replace(/EZEN4/g, "τ"); // 107 (Special unicode)
    input = input.replace(/GASAN/g, "π½"); // 336
    input = input.replace(/NINDA/g, "π»");
    // 369

    // Four Letters
    input = input.replace(/ANSE/g, "π²"); // 302
    input = input.replace(/KARAS/g, "π ππ"); // 313a
    input = input.replace(/GΓR|GIR3/g, "π"); // 301
    input = input.replace(/EGIR/g, "π"); // 126
    input = input.replace(/GIS|iz/g, "π"); // 178
    input = input.replace(/DUMU/g, "π"); // 237
    input = input.replace(/SE12/g, "πΊ");
    input = input.replace(/GADA/g, "π°"); // 173
    input = input.replace(/SIG7/g, "π"); // 239
    input = input.replace(/BΓD|BAD3/g, "π¦"); // 114
    input = input.replace(/TUG2|TΓG/g, "π"); // 212
    input = input.replace(/tas3|tΓ s/g, "πΎ"); // 241
    input = input.replace(/tΓ©n|ten2|DIN/g, "π·");

    // Triple letters
    input = input.replace(/ANA/g, "ππΎ");
    input = input.replace(/INA/g, "πΏπΎ");
    input = input.replace(/ΓD|ID2/g, "ππ"); // 365
    input = input.replace(/MES/g, "π©"); // 360
    input = input.replace(/SUM/g, "π§"); // 350
    input = input.replace(/sar|SAR/g, "π¬"); // 353
    input = input.replace(/UTU|tam|pir/g, "π"); // 316
    input = input.replace(/dam/g, "π?"); // 298
    input = input.replace(/SΓ|SA3/g, "π?"); // 294
    input = input.replace(/lis/g, "πΊ"); // 286
    input = input.replace(/GE6/g, "πͺ"); // 267
    input = input.replace(/GIG/g, "πͺπ­"); // 269
    input = input.replace(/UGU/g, "ππ"); // 272
    input = input.replace(/gul/g, "π’"); // 271
    input = input.replace(/KUS/g, "π’"); // 210
    input = input.replace(/kis/g, "π§"); // 273
    input = input.replace(/UDU/g, "π»"); // 210
    input = input.replace(/NIR/g, "πͺ"); // 204
    input = input.replace(/UZU/g, "π"); // 203
    input = input.replace(/dur/g, "π"); // 202
    input = input.replace(/kal|dan/g, "π"); // 196
    input = input.replace(/mar/g, "π₯"); // 191
    input = input.replace(/gur/g, "π₯"); // 185
    input = input.replace(/hat/g, "πΊ"); // 174
    input = input.replace(/DUG/g, "π"); // 162
    input = input.replace(/GIM/g, "πΆ"); // 165
    input = input.replace(/GU4|GUD/g, "π"); // 157
    input = input.replace(/kum/g, "π£"); // 120
    input = input.replace(/hΓ©|he2/g, "πΆ"); // 113
    input = input.replace(/SES/g, "π"); // 79
    input = input.replace(/ARAD/g, "π΄"); // 16
    input = input.replace(/zΓ©|ze2/g, "π’"); // 108
    input = input.replace(/pΓ­|pi2/g, "π"); // 153
    input = input.replace(/kΓ‘n|kan2/g, "π·");
    input = input.replace(/pΓ‘t|pat2/g, "π"); // 13
    input = input.replace(/pΓ‘r|par2/g, "π");
    input = input.replace(/tΓ‘k|tak2/g, "π");
    input = input.replace(/SΓG|SIG/g, "π ");
    input = input.replace(/pal|BAL/g, "π"); // 4
    input = input.replace(/GΓL|[ie]k/g, "π");
    input = input.replace(/MΓ|ME3/g, "π"); // 82
    input = input.replace(/az|AS\./g, "π"); // 92
    input = input.replace(/ABI/g, "ππ");
    input = input.replace(/ABU/g, "ππ");
    input = input.replace(/GAL/g, "π²"); // 242
    input = input.replace(/GAM/g, "π΅"); // 247
    input = input.replace(/pur/g, "π"); // 245
    input = input.replace(/ISH/g, "π");
    input = input.replace(/KUR/g, "π³"); // 329
    input = input.replace(/KΓR/g, "π½");
    input = input.replace(/LIM/g, "π");
    input = input.replace(/SAG/g, "π"); // 192
    input = input.replace(/URU/g, "π·"); // 237
    input = input.replace(/ZAG/g, "π "); // 238
    input = input.replace(/BAT/g, "π");
    input = input.replace(/AMA/g, "πΌ");
    input = input.replace(/h[ae]r|mur/g, "π―"); // 333
    input = input.replace(/mas/g, "π");
    input = input.replace(/s[ie]r/g, "π"); // 5
    input = input.replace(/tar/g, "π»"); // 7
    input = input.replace(/ker/g, "π«");
    input = input.replace(/kas/g, "π"); // 153
    input = input.replace(/kat/g, "π°"); // 173
    input = input.replace(/hal/g, "π¬"); // 2
    input = input.replace(/ka4/g, "π‘"); // 21
    input = input.replace(/wi5/g, "πΎ"); // 131
    input = input.replace(/rat/g, "π₯");
    input = input.replace(/nam/g, "π"); // 39
    input = input.replace(/lam/g, "π΄"); // 306
    input = input.replace(/lum/g, "π"); // 310
    input = input.replace(/GAG|DU3|DΓ/g, "π"); // 75
    input = input.replace(/kam|TU7/g, "π°");
    // 357

    // Double letters
    input = input.replace(/um|UM/g, "π"); // 98
    input = input.replace(/in/g, "π"); // 354
    input = input.replace(/pu/g, "π"); // 339
    input = input.replace(/se/g, "πΊ"); // 338
    input = input.replace(/[ie]m/g, "π"); // 337
    input = input.replace(/ut/g, "π"); // 316
    input = input.replace(/uz/g, "π»"); // 340
    input = input.replace(/gu/g, "π"); // 304
    input = input.replace(/ul/g, "π"); // 275
    input = input.replace(/zu/g, "πͺ"); // 209
    input = input.replace(/ba/g, "π"); // 205
    input = input.replace(/al/g, "π "); // 183
    input = input.replace(/am/g, "π"); // 168
    input = input.replace(/du/g, "πΊ"); // 128
    input = input.replace(/uk/g, "π"); // 93
    input = input.replace(/BE/g, "π"); // 13
    input = input.replace(/ΓS/g, "π"); // 13
    input = input.replace(/ΓR/g, "π΄"); // 16
    input = input.replace(/BI/g, "π");
    input = input.replace(/DU/g, "π");
    input = input.replace(/GU/g, "π");
    input = input.replace(/HI/g, "π­");
    input = input.replace(/IA/g, "π");
    input = input.replace(/IM/g, "π");
    input = input.replace(/LΓ/g, "π½"); // 78
    input = input.replace(/MA/g, "π ");
    input = input.replace(/UL/g, "π");
    input = input.replace(/UR/g, "π¨");
    input = input.replace(/SI/g, "π ");
    input = input.replace(/ZA/g, "π");
    input = input.replace(/QΓ/g, "π ");
    input = input.replace(/as|RΓ/g, "πΈ"); // 1
    input = input.replace(/ni|LΓ/g, "π");
    input = input.replace(/en|EN/g, "π");
    input = input.replace(/NA4/g, "ππ");
    input = input.replace(/KΓ/g, "π¬");
    input = input.replace(/ip/g, "π");
    input = input.replace(/gi/g, "π");
    input = input.replace(/qa/g, "π‘");
    input = input.replace(/[aeiu]h/g, "π΄"); // 332
    input = input.replace(/ak/g, "π"); // 81
    input = input.replace(/an/g, "π­"); // 8
    input = input.replace(/ar/g, "π"); // 289
    input = input.replace(/at/g, "π"); // 105
    input = input.replace(/da/g, "π"); // 214
    input = input.replace(/di/g, "π²"); // 312
    input = input.replace(/es/g, "π");
    input = input.replace(/ga/g, "π΅"); // 159
    input = input.replace(/ha/g, "π©"); // 367
    input = input.replace(/he/g, "π­");
    input = input.replace(/hi/g, "π­"); // 335
    input = input.replace(/hu/g, "π·");
    input = input.replace(/ia/g, "π"); // 215
    input = input.replace(/[ie]r/g, "π"); // 77
    input = input.replace(/is/g, "π"); // 151
    input = input.replace(/[ei]t/g, "π"); // 215
    input = input.replace(/ka/g, "π"); // 133
    input = input.replace(/k[ie]/g, "π "); // 313
    input = input.replace(/ku/g, "πͺ"); // 206
    input = input.replace(/la/g, "π·"); // 95
    input = input.replace(/ap/g, "π"); // 97
    input = input.replace(/l[ie]/g, "π·"); // 343
    input = input.replace(/lu/g, "π»"); // 210
    input = input.replace(/ma/g, "π "); // 208
    input = input.replace(/me/g, "π¨"); // 357
    input = input.replace(/mi/g, "πͺ"); // 267
    input = input.replace(/mu/g, "π¬"); // 17
    input = input.replace(/na/g, "πΎ"); // 15
    input = input.replace(/ne/g, "π"); // 169
    input = input.replace(/nu/g, "π‘"); // 11
    input = input.replace(/pa/g, "πΊ"); // 174
    input = input.replace(/ra/g, "π"); // 233
    input = input.replace(/ri/g, "π");
    input = input.replace(/ru/g, "π");
    input = input.replace(/sa/g, "π"); // 158
    input = input.replace(/si/g, "π"); // 288
    input = input.replace(/su|SU/g, "π");
    input = input.replace(/ta/g, "π«"); // 160
    input = input.replace(/te/g, "πΌ"); // 249
    input = input.replace(/ti/g, "πΎ"); // 37
    input = input.replace(/tu/g, "π"); // 346
    input = input.replace(/un/g, "π¦"); // 197
    input = input.replace(/up/g, "π"); // 152
    input = input.replace(/us/g, "π"); // 132
    input = input.replace(/wa/g, "πΏ"); // 317
    input = input.replace(/za/g, "π"); // 366
    input = input.replace(/zi/g, "π£");
    input = input.replace(/ur/g, "π¨");
    input = input.replace(/BI/g, "π");
    input = input.replace(/BU/g, "π");

    // Single letters
    input = input.replace(/a|A/g, "π"); // 364
    input = input.replace(/e/g, "π"); // 187
    input = input.replace(/i|I/g, "πΏ"); // 217
    input = input.replace(/ΓΊ/g, "π"); // 195
    input = input.replace(/Γ|u/g, "π"); // 261
    input = input.replace(/Γ/g, "π");
    // 199


    // NUMBERS
    input = input.replace(/1\d/g, "π") // 261
    input = input.replace(/2/g, "π«") // 361
    input = input.replace(/3/g, "π") // 367
    input = input.replace(/4/g, "π") // 370
    input = input.replace(/5/g, "π") // 371
    input = input.replace(/6/g, "π") // 372
    input = input.replace(/7/g, "π") // 373
    input = input.replace(/8/g, "π") // 374
    input = input.replace(/9/g, "π") // 375

    input = input.replace(/-/g, "");

    return input;
}

export default hittite;
