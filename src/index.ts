import pie from "./converters/pie.js";
import polygreek from "./converters/polytonicgreek.js";
import linearb from "./converters/linearb.js";
import cypriot from "./converters/cypriot.js";
import { armenian, armenianTranslitIso, armenianTranslitClassical, fromArmenianToISO, fromArmenianToClassical} from "./converters/armenian.js";
import { avestan, avestanTranslit } from "./converters/avestan.js";
import oldpersian from "./converters/oldpersian.js";
import gothic from "./converters/gothic.js";
import hittite from "./converters/hittite.js";
// import luwian from "./converters/luwian.js";
import lycian from "./converters/lycian.js";
import lydian from "./converters/lydian.js";
import carian from "./converters/carian.js";
import ogham from "./converters/ogham.js";
import oscan from "./converters/oscan.js";
import {hk_deva, hk_iast, hk_iso} from "./converters/vedic.js";
import glagolitic from "./converters/glagolitic.js";

const allConverters = [
    {
        value: "pie",
        label: "Proto-Indo-European",
        converter: pie
    },
    {
        value: "polygreek",
        label: "Polytonic Greek",
        converter: polygreek
    },
    {
        value: "linearb",
        label: "Linear B",
        converter: linearb
    },
    {
        value: "cypriot",
        label: "Cypriot Syllabary",
        converter: cypriot
    }, {
        value: "armenian",
        label: "Armenian",
        converter: armenian
    }, {
        value: "armenian_iso",
        label: "Armenian Transliterated (ISO 9985)",
        converter: armenianTranslitIso
    }, {
        value: "armenian_classical",
        label: "Armenian Transliterated (Classical)",
        converter: armenianTranslitClassical
    }, {
        value: "hk_deva",
        label: "Vedic / Sanskrit (Devanāgarī)",
        converter: hk_deva
    }, {
        value: "hk_iast",
        label: "Vedic / Sanskrit (IAST)",
        converter: hk_iast
    }, {
        value: "hk_iso",
        label: "Vedic / Sanskrit (ISO)",
        converter: hk_iso
    }, {
        value: "avestascript",
        label: "Avestan (Script)",
        converter: avestan
    }, {
        value: "avestaTrans",
        label: "Avestan (Translit)",
        converter: avestanTranslit
    }, {
        value: "oldpersian",
        label: "Old Persian Cuneiform",
        converter: oldpersian
    }, {
        value: "gothic",
        label: "Gothic",
        converter: gothic
    }, {
        value: "hittite",
        label: "Hittite (beta)",
        converter: hittite
    // }, {
        // value: "luwian",
        // label: "Hieroglyphic Luwian",
        // converter: luwian
    }, {
        value: "lydian",
        label: "Lydian",
        converter: lydian
    }, {
        value: "lycian",
        label: "Lycian",
        converter: lycian
    }, {
        value: "carian",
        label: "Carian",
        converter: carian
    }, {
        value: "ogham",
        label: "Ogham",
        converter: ogham
    }, {
        value: "oscan",
        label: "Oscan",
        converter: oscan
    }, {
        value: "glagolitic",
        label: "Glagolitic",
        converter: glagolitic
    }
]

export {
    pie,
    polygreek,
    linearb,
    cypriot,
    armenian,
    armenianTranslitIso,
    armenianTranslitClassical,
    fromArmenianToISO,
    fromArmenianToClassical,
    avestan,
    avestanTranslit,
    oldpersian,
    gothic,
    hittite,
    luwian,
    lycian,
    lydian,
    carian,
    ogham,
    oscan,
    hk_deva,
    hk_iast,
    hk_iso,
    glagolitic,
    allConverters
}
