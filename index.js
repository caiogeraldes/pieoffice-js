import pie from './converters/pie.js';
import polygreek from './converters/polytonicgreek.js';
import linearb from './converters/linearb.js';
import cypriot from './converters/cypriot.js';
import armenian from './converters/armenian.js';
import avestan from './converters/avestan.js';
import avestanTrans from './converters/avestanTrans.js';
import oldpersian from './converters/oldpersian.js';
import gothic from './converters/gothic.js';
import hittite from './converters/hittite.js';
import luwian from './converters/luwian.js';
import lycian from './converters/lycian.js';
import lydian from './converters/lydian.js';
import carian from './converters/carian.js';
import ogham from './converters/ogham.js';
import oscan from './converters/oscan.js';
import { hk_deva, hk_iast, hk_iso } from './converters/vedic.js';
import glagolitic from './converters/glagolitic.js';

const allConverters = [
    {  label: 'Proto-Indo-European', converter: pie },
    {  label: 'Polytonic Greek', converter: polygreek },
    {  label: 'Linear B', converter: linearb },
    {  label: 'Cypriot Syllabary', converter: cypriot },
    {  label: 'Armenian', converter: armenian },
    {  label: 'Vedic / Sanskrit (Devanāgarī)', converter: hk_deva },
    {  label: 'Vedic / Sanskrit (IAST)', converter: hk_iast },
    {  label: 'Vedic / Sanskrit (ISO)', converter: hk_iso },
    {  label: 'Avestan (Script)' , converter: avestan },
    {  label: 'Avestan (Translit)', converter: avestanTrans },
    {  label: 'Old Persian Cuneiform', converter: oldpersian },
    {  label: 'Gothic', converter: gothic },
    {  label: 'Hittite (beta)', converter: hittite },
    {  label: 'Hieroglyphic Luwian', converter: luwian },
    {  label: 'Lydian', converter: lydian },
    {  label: 'Lycian', converter: lycian },
    {  label: 'Carian', converter: carian },
    {  label: 'Ogham', converter: ogham },
    {  label: 'Oscan', converter: oscan },
    {  label: 'Glagolitic', converter: glagolitic }
]

export {
    pie,
    polygreek,
    linearb,
    cypriot,
    armenian,
    avestan,
    avestanTrans,
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

