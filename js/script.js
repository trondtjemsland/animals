import { BASE_URL } from './configs/configs.js';
import { getAPI } from './libs/apiCalls.js';
import { cardsHTML } from './components/writeHtmlToDom.js';

const animalsArray = await getAPI(BASE_URL + '/animals');

console.log(animalsArray);

cardsHTML(animalsArray, '.cardscontainer');
