import {test} from '@playwright/test'
import { GooglePage } from './pages/googlePage';

test('Main Page', async ({page}) => {
    const googlePage = new GooglePage(page);
    await googlePage.gotoGooglePlage();
    await googlePage.fillSearchField('Eduard Soghomonyan');
    await googlePage.getImages();
});