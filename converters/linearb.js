const linearb = (input) => {
    input = input.replace(/-/g, "");

    input = input.replace(/\*132/g, "𐂗");
    input = input.replace(/\*142/g, "𐂜");
    input = input.replace(/\*146/g, "𐂞");
    input = input.replace(/\*150/g, "𐂟");
    input = input.replace(/\*152/g, "𐂡");
    input = input.replace(/\*153/g, "𐂢");
    input = input.replace(/\*154/g, "𐂣");
    input = input.replace(/\*155/g, "𐃞");
    input = input.replace(/\*157/g, "𐂥");
    input = input.replace(/\*158/g, "𐂦");
    input = input.replace(/\*160/g, "𐂨");
    input = input.replace(/\*161/g, "𐂩");
    input = input.replace(/\*164/g, "𐂬");
    input = input.replace(/\*165/g, "𐂭");
    input = input.replace(/\*166/g, "𐂮");
    input = input.replace(/\*167/g, "𐂯");
    input = input.replace(/\*168/g, "𐂰");
    input = input.replace(/\*169/g, "𐂱");
    input = input.replace(/\*170/g, "𐂲");
    input = input.replace(/\*171/g, "𐂳");
    input = input.replace(/\*172/g, "𐂴");
    input = input.replace(/\*174/g, "𐂶");
    input = input.replace(/\*177/g, "𐂸");
    input = input.replace(/\*178/g, "𐂹");
    input = input.replace(/\*179/g, "𐂺");
    input = input.replace(/\*180/g, "𐂻");
    input = input.replace(/\*18/g, "𐁐");
    input = input.replace(/\*181/g, "𐂼");
    input = input.replace(/\*182/g, "𐂽");
    input = input.replace(/\*183/g, "𐂾");
    input = input.replace(/\*184/g, "𐂿");
    input = input.replace(/\*185/g, "𐃀");
    input = input.replace(/\*189/g, "𐃁");
    input = input.replace(/\*190/g, "𐃂");
    input = input.replace(/\*19/g, "𐁑");
    input = input.replace(/\*200/g, "𐃟");
    input = input.replace(/\*201/g, "𐃠");
    input = input.replace(/\*202/g, "𐃡");
    input = input.replace(/\*203/g, "𐃢");
    input = input.replace(/\*204/g, "𐃣");
    input = input.replace(/\*205/g, "𐃤");
    input = input.replace(/\*206/g, "𐃥");
    input = input.replace(/\*207/g, "𐃦");
    input = input.replace(/\*208/g, "𐃧");
    input = input.replace(/\*209/g, "𐃨");
    input = input.replace(/\*210/g, "𐃩");
    input = input.replace(/\*211/g, "𐃪");
    input = input.replace(/\*212/g, "𐃫");
    input = input.replace(/\*213/g, "𐃬");
    input = input.replace(/\*214/g, "𐃭");
    input = input.replace(/\*215/g, "𐃮");
    input = input.replace(/\*216/g, "𐃯");
    input = input.replace(/\*217/g, "𐃰");
    input = input.replace(/\*218/g, "𐃱");
    input = input.replace(/\*219/g, "𐃲");
    input = input.replace(/\*220/g, "𐃄");
    input = input.replace(/\*221/g, "𐃳");
    input = input.replace(/\*222/g, "𐃴");
    input = input.replace(/\*226/g, "𐃵");
    input = input.replace(/\*227/g, "𐃶");
    input = input.replace(/\*228/g, "𐃷");
    input = input.replace(/\*229/g, "𐃸");
    input = input.replace(/\*22/g, "𐁒");
    input = input.replace(/\*232/g, "𐃈");
    input = input.replace(/\*234/g, "𐃊");
    input = input.replace(/\*236/g, "𐃋");
    input = input.replace(/\*245/g, "𐃐");
    input = input.replace(/\*246/g, "𐃑");
    input = input.replace(/\*248/g, "𐃓");
    input = input.replace(/\*249/g, "𐃔");
    input = input.replace(/\*250/g, "𐃹");
    input = input.replace(/\*251/g, "𐃕");
    input = input.replace(/\*252/g, "𐃖");
    input = input.replace(/\*253/g, "𐃗");
    input = input.replace(/\*255/g, "𐃙");
    input = input.replace(/\*256/g, "𐃚");
    input = input.replace(/\*257/g, "𐃛");
    input = input.replace(/\*258/g, "𐃜");
    input = input.replace(/\*259/g, "𐃝");
    input = input.replace(/\*305/g, "𐃺");
    input = input.replace(/\*34/g, "𐁓");
    input = input.replace(/\*47/g, "𐁔");
    input = input.replace(/\*49/g, "𐁕");
    input = input.replace(/\*56/g, "𐁖");
    input = input.replace(/\*63/g, "𐁗");
    input = input.replace(/\*64/g, "𐁘");
    input = input.replace(/\*65/g, "𐀎");
    input = input.replace(/\*79/g, "𐁙");
    input = input.replace(/\*82/g, "𐁚");
    input = input.replace(/\*83/g, "𐁛");
    input = input.replace(/\*86/g, "𐁜");
    input = input.replace(/\*89/g, "𐁝");
    input = input.replace(/AES/g, "𐂚");
    input = input.replace(/ALVEUS/g, "𐃅");
    input = input.replace(/ARBOR/g, "𐂷");
    input = input.replace(/AREPA/g, "𐂘");
    input = input.replace(/ARMA/g, "𐂫");
    input = input.replace(/AROM/g, "𐂑");
    input = input.replace(/AUR/g, "𐂛");
    input = input.replace(/BIGAE/g, "𐃌");
    input = input.replace(/BOSf/g, "𐂌");
    input = input.replace(/BOSm/g, "𐂍");
    input = input.replace(/CAPSUS/g, "𐃎");
    input = input.replace(/CAPf/g, "𐂈");
    input = input.replace(/CAPm/g, "𐂉");
    input = input.replace(/CERV/g, "𐂂");
    input = input.replace(/CORNU/g, "𐂠");
    input = input.replace(/CURRUS/g, "𐃍");
    input = input.replace(/CYP/g, "𐂒");
    input = input.replace(/DIPTE/g, "𐃒");
    input = input.replace(/EQUf/g, "𐂄");
    input = input.replace(/EQUm/g, "𐂅");
    input = input.replace(/EQU/g, "𐂃");
    input = input.replace(/GALEA/g, "𐃃");
    input = input.replace(/GRA/g, "𐂎");
    input = input.replace(/HASTA/g, "𐃆");
    input = input.replace(/HORD/g, "𐂏");
    input = input.replace(/JACULUM/g, "𐃘");
    input = input.replace(/KANAKO/g, "𐂔");
    input = input.replace(/KAPO/g, "𐂓");
    input = input.replace(/LANA/g, "𐂝");
    input = input.replace(/LUNA/g, "𐂵");
    input = input.replace(/MERI/g, "𐂙");
    input = input.replace(/MUL/g, "𐂁");
    input = input.replace(/OLE/g, "𐂕");
    input = input.replace(/OLIV/g, "𐂐");
    input = input.replace(/OVISf/g, "𐂆");
    input = input.replace(/OVISm/g, "𐂇");
    input = input.replace(/PUGIO/g, "𐃉");
    input = input.replace(/ROTA/g, "𐃏");
    input = input.replace(/SAGITTA/g, "𐃇");
    input = input.replace(/SUSf/g, "𐂊");
    input = input.replace(/SUSm/g, "𐂋");
    input = input.replace(/TELA/g, "𐂧");
    input = input.replace(/TUNICA/g, "𐂪");
    input = input.replace(/TURO2/g, "𐂤");
    input = input.replace(/VIN/g, "𐂖");
    input = input.replace(/VIR/g, "𐂀");
    input = input.replace(/da/g, "𐀅");
    input = input.replace(/de/g, "𐀆");
    input = input.replace(/di/g, "𐀇");
    input = input.replace(/do/g, "𐀈");
    input = input.replace(/du/g, "𐀉");
    input = input.replace(/dwe/g, "𐁃");
    input = input.replace(/dwo/g, "𐁄");
    input = input.replace(/je/g, "𐀋");
    input = input.replace(/jo/g, "𐀍");
    input = input.replace(/ju2/g, "𐀎");
    input = input.replace(/ju/g, "𐀎");
    input = input.replace(/ka/g, "𐀏");
    input = input.replace(/ke/g, "𐀐");
    input = input.replace(/ki/g, "𐀑");
    input = input.replace(/ko/g, "𐀒");
    input = input.replace(/ku/g, "𐀓");
    input = input.replace(/ma/g, "𐀔");
    input = input.replace(/me/g, "𐀕");
    input = input.replace(/mi/g, "𐀖");
    input = input.replace(/mo/g, "𐀗");
    input = input.replace(/mu/g, "𐀘");
    input = input.replace(/na/g, "𐀙");
    input = input.replace(/ne/g, "𐀚");
    input = input.replace(/ni/g, "𐀛");
    input = input.replace(/no/g, "𐀜");
    input = input.replace(/nu/g, "𐀝");
    input = input.replace(/nwa/g, "𐁅");
    input = input.replace(/ja/g, "𐀊");
    input = input.replace(/pa/g, "𐀞");
    input = input.replace(/pe/g, "𐀟");
    input = input.replace(/pi/g, "𐀠");
    input = input.replace(/po/g, "𐀡");
    input = input.replace(/pte/g, "𐁇");
    input = input.replace(/pu2/g, "𐁆");
    input = input.replace(/pu/g, "𐀢");
    input = input.replace(/qa/g, "𐀣");
    input = input.replace(/qe/g, "𐀤");
    input = input.replace(/qi/g, "𐀥");
    input = input.replace(/qo/g, "𐀦");
    input = input.replace(/ra2/g, "𐁈");
    input = input.replace(/ra3/g, "𐁉");
    input = input.replace(/ra/g, "𐀨");
    input = input.replace(/re/g, "𐀩");
    input = input.replace(/ri/g, "𐀪");
    input = input.replace(/ro2/g, "𐁊");
    input = input.replace(/ro/g, "𐀫");
    input = input.replace(/ru/g, "𐀬");
    input = input.replace(/sa/g, "𐀭");
    input = input.replace(/se/g, "𐀮");
    input = input.replace(/si/g, "𐀯");
    input = input.replace(/so/g, "𐀰");
    input = input.replace(/su/g, "𐀱");
    input = input.replace(/ta2/g, "𐁌");
    input = input.replace(/ta/g, "𐀲");
    input = input.replace(/te/g, "𐀳");
    input = input.replace(/ti/g, "𐀴");
    input = input.replace(/to/g, "𐀵");
    input = input.replace(/tu/g, "𐀶");
    input = input.replace(/two/g, "𐁍");
    input = input.replace(/u/g, "𐀄");
    input = input.replace(/wa/g, "𐀷");
    input = input.replace(/we/g, "𐀸");
    input = input.replace(/wi/g, "𐀹");
    input = input.replace(/wo/g, "𐀺");
    input = input.replace(/za/g, "𐀼");
    input = input.replace(/ze/g, "𐀽");
    input = input.replace(/zo/g, "𐀿");

    input = input.replace(/e/g, "𐀁");
    input = input.replace(/a2/g, "𐁀");
    input = input.replace(/a3/g, "𐁁");
    input = input.replace(/a/g, "𐀀");
    input = input.replace(/i/g, "𐀂");
    input = input.replace(/o/g, "𐀃");

    input = input.replace(/g,/g, "𐄀");
    input = input.replace(/V/g, "𐄾");
    input = input.replace(/M/g, "𐄸");
    input = input.replace(/N/g, "𐄹");
    input = input.replace(/T/g, "𐄼");
    input = input.replace(/P/g, "𐄺");
    input = input.replace(/Q/g, "𐄻");
    input = input.replace(/L/g, "𐄷");
    input = input.replace(/S/g, "𐄽");
    input = input.replace(/Z/g, "𐄿");

    input = input.replace(/1(\d\d\d\d)/g, "𐄫$1");
    input = input.replace(/2(\d\d\d\d)/g, "𐄬$1");
    input = input.replace(/3(\d\d\d\d)/g, "𐄭$1");
    input = input.replace(/4(\d\d\d\d)/g, "𐄮$1");
    input = input.replace(/5(\d\d\d\d)/g, "𐄯$1");
    input = input.replace(/6(\d\d\d\d)/g, "𐄰$1");
    input = input.replace(/7(\d\d\d\d)/g, "𐄱$1");
    input = input.replace(/8(\d\d\d\d)/g, "𐄲$1");
    input = input.replace(/9(\d\d\d\d)/g, "𐄳$1");

    input = input.replace(/1(\d\d\d)/g, "𐄢$1");
    input = input.replace(/2(\d\d\d)/g, "𐄣$1");
    input = input.replace(/3(\d\d\d)/g, "𐄤$1");
    input = input.replace(/4(\d\d\d)/g, "𐄥$1");
    input = input.replace(/5(\d\d\d)/g, "𐄦$1");
    input = input.replace(/6(\d\d\d)/g, "𐄧$1");
    input = input.replace(/7(\d\d\d)/g, "𐄨$1");
    input = input.replace(/8(\d\d\d)/g, "𐄩$1");
    input = input.replace(/9(\d\d\d)/g, "𐄪$1");
    
    input = input.replace(/1(\d\d)/g, "𐄙$1");
    input = input.replace(/2(\d\d)/g, "𐄚$1");
    input = input.replace(/3(\d\d)/g, "𐄛$1");
    input = input.replace(/4(\d\d)/g, "𐄜$1");
    input = input.replace(/5(\d\d)/g, "𐄝$1");
    input = input.replace(/6(\d\d)/g, "𐄞$1");
    input = input.replace(/7(\d\d)/g, "𐄟$1");
    input = input.replace(/8(\d\d)/g, "𐄠$1");
    input = input.replace(/9(\d\d)/g, "𐄡$1");

    input = input.replace(/1(\d)/g, "𐄐$1");
    input = input.replace(/2(\d)/g, "𐄑$1");
    input = input.replace(/3(\d)/g, "𐄒$1");
    input = input.replace(/4(\d)/g, "𐄓$1");
    input = input.replace(/5(\d)/g, "𐄔$1");
    input = input.replace(/6(\d)/g, "𐄕$1");
    input = input.replace(/7(\d)/g, "𐄖$1");
    input = input.replace(/8(\d)/g, "𐄗$1");
    input = input.replace(/9(\d)/g, "𐄘$1");

    input = input.replace(/0/g, "");

    input = input.replace(/1/g, "𐄇");
    input = input.replace(/2/g, "𐄈");
    input = input.replace(/3/g, "𐄉");
    input = input.replace(/4/g, "𐄊");
    input = input.replace(/5/g, "𐄋");
    input = input.replace(/6/g, "𐄌");
    input = input.replace(/7/g, "𐄍");
    input = input.replace(/8/g, "𐄎");
    input = input.replace(/9/g, "𐄏");

    return input;
};

export default linearb;
