/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');
 
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#resto__title');
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-resto');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-resto');
  
  I.amOnPage('/');
  
  I.seeElement('.resto-name');
  const firstResto = locate('.resto-name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.seeElement('.restos');
  
  const likedRestoTitle = await I.grabTextFrom('.resto-name');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-resto');
  
  I.amOnPage('/');
  
  I.seeElement('.resto-name');
  const firstResto = locate('.resto-name').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.seeElement('.restos');
  
  const likedRestoTitle = await I.grabTextFrom('.resto-name');
  assert.strictEqual(firstRestoTitle, likedRestoTitle);
  
  I.see('Inilah Restoran Kesukaanmu!', '.a-resto');
  
  I.seeElement('.resto-name');
  const favResto = locate('.resto-name').first();
  I.click(favResto);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/favorite');
  I.see('Tidak ada Restoran untuk ditampilkan', '.no-resto');
});