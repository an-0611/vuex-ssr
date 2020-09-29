const linkingTarget = 'http://test.project.com';

// variables accessible in project src code
const env = ['REGION', 'CDN', 'LANG_MAP', 'LOCALE', 'TRANSIFY_ID'];

const prodCdnMap = {
  sg: 'https://dlgarenanow-a.akamaihd.net/mgames/spdsmp/20201008PiggyBank',
};

const referrerMap = {
  sg: 'https://piggybank.speed.garena.com/',
};

const localesMap = {
  sg: ['sg'],
};

const langMap = { sg: { sg: 1 }};

const gaIdMap = { sg: 'UA-XXXXXXXXX-X' };
const region = process.env.REGION || 'sg';
const locales = localesMap[region];

process.env.CDN = process.env.CDN || prodCdnMap[region];
process.env.LANG_MAP = JSON.stringify(langMap[region]);
[process.env.LOCALE] = locales;
process.env.REFERER = referrerMap[region];
process.env.REGION = region;
process.env.TRANSIFY_ID = 1521;

module.exports = {
  linkingTarget,
  env,
  gaId: gaIdMap[region],
  locales,
};
