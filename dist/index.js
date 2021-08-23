"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allConverters = exports.glagolitic = exports.hk_iso = exports.hk_iast = exports.hk_deva = exports.oscan = exports.ogham = exports.carian = exports.lydian = exports.lycian = exports.luwian = exports.hittite = exports.gothic = exports.oldpersian = exports.avestanTranslit = exports.avestan = exports.armenianTranslitClassical = exports.armenianTranslitIso = exports.armenian = exports.cypriot = exports.linearb = exports.polygreek = exports.pie = void 0;
const pie_js_1 = require("./converters/pie.js");
exports.pie = pie_js_1.default;
const polytonicgreek_js_1 = require("./converters/polytonicgreek.js");
exports.polygreek = polytonicgreek_js_1.default;
const linearb_js_1 = require("./converters/linearb.js");
exports.linearb = linearb_js_1.default;
const cypriot_js_1 = require("./converters/cypriot.js");
exports.cypriot = cypriot_js_1.default;
const armenian_js_1 = require("./converters/armenian.js");
Object.defineProperty(exports, "armenian", { enumerable: true, get: function () { return armenian_js_1.armenian; } });
Object.defineProperty(exports, "armenianTranslitIso", { enumerable: true, get: function () { return armenian_js_1.armenianTranslitIso; } });
Object.defineProperty(exports, "armenianTranslitClassical", { enumerable: true, get: function () { return armenian_js_1.armenianTranslitClassical; } });
const avestan_js_1 = require("./converters/avestan.js");
Object.defineProperty(exports, "avestan", { enumerable: true, get: function () { return avestan_js_1.avestan; } });
Object.defineProperty(exports, "avestanTranslit", { enumerable: true, get: function () { return avestan_js_1.avestanTranslit; } });
const oldpersian_js_1 = require("./converters/oldpersian.js");
exports.oldpersian = oldpersian_js_1.default;
const gothic_js_1 = require("./converters/gothic.js");
exports.gothic = gothic_js_1.default;
const hittite_js_1 = require("./converters/hittite.js");
exports.hittite = hittite_js_1.default;
const luwian_js_1 = require("./converters/luwian.js");
exports.luwian = luwian_js_1.default;
const lycian_js_1 = require("./converters/lycian.js");
exports.lycian = lycian_js_1.default;
const lydian_js_1 = require("./converters/lydian.js");
exports.lydian = lydian_js_1.default;
const carian_js_1 = require("./converters/carian.js");
exports.carian = carian_js_1.default;
const ogham_js_1 = require("./converters/ogham.js");
exports.ogham = ogham_js_1.default;
const oscan_js_1 = require("./converters/oscan.js");
exports.oscan = oscan_js_1.default;
const vedic_js_1 = require("./converters/vedic.js");
Object.defineProperty(exports, "hk_deva", { enumerable: true, get: function () { return vedic_js_1.hk_deva; } });
Object.defineProperty(exports, "hk_iast", { enumerable: true, get: function () { return vedic_js_1.hk_iast; } });
Object.defineProperty(exports, "hk_iso", { enumerable: true, get: function () { return vedic_js_1.hk_iso; } });
const glagolitic_js_1 = require("./converters/glagolitic.js");
exports.glagolitic = glagolitic_js_1.default;
const allConverters = [
    {
        value: "pie",
        label: "Proto-Indo-European",
        converter: pie_js_1.default
    },
    {
        value: "polygreek",
        label: "Polytonic Greek",
        converter: polytonicgreek_js_1.default
    },
    {
        value: "linearb",
        label: "Linear B",
        converter: linearb_js_1.default
    },
    {
        value: "cypriot",
        label: "Cypriot Syllabary",
        converter: cypriot_js_1.default
    }, {
        value: "armenian",
        label: "Armenian",
        converter: armenian_js_1.armenian
    }, {
        value: "armenian_iso",
        label: "Armenian Transliterated (ISO 9985)",
        converter: armenian_js_1.armenianTranslitIso
    }, {
        value: "armenian_classical",
        label: "Armenian Transliterated (Classical)",
        converter: armenian_js_1.armenianTranslitClassical
    }, {
        value: "hk_deva",
        label: "Vedic / Sanskrit (Devanāgarī)",
        converter: vedic_js_1.hk_deva
    }, {
        value: "hk_iast",
        label: "Vedic / Sanskrit (IAST)",
        converter: vedic_js_1.hk_iast
    }, {
        value: "hk_iso",
        label: "Vedic / Sanskrit (ISO)",
        converter: vedic_js_1.hk_iso
    }, {
        value: "avestascript",
        label: "Avestan (Script)",
        converter: avestan_js_1.avestan
    }, {
        value: "avestaTrans",
        label: "Avestan (Translit)",
        converter: avestan_js_1.avestanTranslit
    }, {
        value: "oldpersian",
        label: "Old Persian Cuneiform",
        converter: oldpersian_js_1.default
    }, {
        value: "gothic",
        label: "Gothic",
        converter: gothic_js_1.default
    }, {
        value: "hittite",
        label: "Hittite (beta)",
        converter: hittite_js_1.default
    }, {
        value: "luwian",
        label: "Hieroglyphic Luwian",
        converter: luwian_js_1.default
    }, {
        value: "lydian",
        label: "Lydian",
        converter: lydian_js_1.default
    }, {
        value: "lycian",
        label: "Lycian",
        converter: lycian_js_1.default
    }, {
        value: "carian",
        label: "Carian",
        converter: carian_js_1.default
    }, {
        value: "ogham",
        label: "Ogham",
        converter: ogham_js_1.default
    }, {
        value: "oscan",
        label: "Oscan",
        converter: oscan_js_1.default
    }, {
        value: "glagolitic",
        label: "Glagolitic",
        converter: glagolitic_js_1.default
    }
];
exports.allConverters = allConverters;
