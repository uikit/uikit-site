export { setup, addObject, saveToIndex };

import algoliasearch from 'algoliasearch';
import { readFile } from 'node:fs/promises';
const appid = import.meta.env.VITE_ALGOLIA_APP_ID;
const indexname = import.meta.env.VITE_ALGOLIA_INDEX_NAME;
const adminkey = import.meta.env.VITE_ALGOLIA_ADMIN_KEY;
const urlbase = import.meta.env.VITE_ALGOLIA_URL_BASE;
const client = algoliasearch(appid, adminkey);
const index = client.initIndex(indexname);
const navigation = JSON.parse(await readFile('./docs/navigation.json', { encoding: 'utf8' }));
    
const settings = {
    searchableAttributes: [
        'hierarchy.lvl0',
        'hierarchy.lvl1',
        'hierarchy.lvl2',
        'hierarchy.lvl3',
        'content',
    ],
    ranking: [
        'proximity',
        'attribute',
        'words',
        'exact',
        'filters',
        'typo',
        'custom',
    ],
    customRanking: ['desc(weight)'],
    minWordSizefor1Typo: 3,
    minWordSizefor2Typos: 7,
    disableTypoToleranceOnAttributes: [
        'hierarchy.lvl0',
        'hierarchy.lvl1',
        'hierarchy.lvl2',
        'hierarchy.lvl3',
    ],
    attributesToHighlight: ['hierarchy', 'content'],
    highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
    highlightPostTag: '</span>',
    attributesToSnippet: ['content:10'],
    attributesToRetrieve: ['anchor', 'content', 'hierarchy', 'url'],
    distinct: true,
    attributeForDistinct: 'url',
    removeWordsIfNoResults: 'allOptional',
    advancedSyntax: true,
};
    
let objects = [];

async function setup() {
    await index.clearObjects();
    await index.setSettings(settings);
    return Promise.resolve(true);
}

function addObject(lvl1, lvl2, lvl3, content, newpage = "") {
    let hierarchy = {
        lvl0: "",
        lvl1: lvl1,
        lvl2: lvl2,
        lvl3: lvl3,
        lvl4: null,
        lvl5: null,
    };
    Object.keys(hierarchy).forEach(key => {
        if (hierarchy[key] == "") {
            hierarchy[key] = null;
        }
    });
    hierarchy.lvl0 = 'Components';
    if (navigation['Getting started'][hierarchy.lvl1]) {
        hierarchy.lvl0 = 'Getting Started';
    }
    let id = (hierarchy.lvl0 + hierarchy.lvl1).toLowerCase().replaceAll(' ', '');
    let url = urlbase + hierarchy.lvl1.toLowerCase();
    let weight = 1;
    content = content.replaceAll('&#39;s', "'s");
    content = content.replaceAll(/&\w+;/g, '');
    if (content.lastIndexOf(newpage) != -1) {
        content = content.slice(0, content.lastIndexOf(newpage));
    }
    if (hierarchy.lvl3 != null) {
        id = (hierarchy.lvl0 + hierarchy.lvl1 + hierarchy.lvl2 + hierarchy.lvl3).toLowerCase().replaceAll(' ', '');
        url = url + '#' + hierarchy.lvl3.toLowerCase().replaceAll(' ', '-');
        weight = 1;
    } else if (hierarchy.lvl2 != null) {
        id = (hierarchy.lvl0 + hierarchy.lvl1 + hierarchy.lvl2).toLowerCase().replaceAll(' ', '');
        url = url + '#' + hierarchy.lvl2.toLowerCase().replaceAll(' ', '-');
        weight = 2;
    } else {
        id = (hierarchy.lvl0 + hierarchy.lvl1).toLowerCase().replaceAll(' ', '');
        weight = 3;
    }

    const object = {
        objectID: id,
        content: content,
        hierarchy: hierarchy,
        url: url,
        weight: weight,
        anchor: null,
    };

    objects.push(object);
}

async function saveToIndex() {
    index.saveObjects(objects);
    setTimeout(() => { objects = []; }, 1000);
}