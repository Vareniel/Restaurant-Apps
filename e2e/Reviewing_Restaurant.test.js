/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Post resto review', async ({ I }) => {
  const review = 'Halo Saya Bandung';

  I.seeElement('.resto-name');
  const lastResto = locate('.resto-name').last(); // menggunakan resto terakhir
  I.click(lastResto);
  
  I.seeElement('.form-container');
  I.fillField('name', 'Sitomphul');
  I.fillField('review', review);
  I.click('#comment-submit');
  
  const newReview = locate('.riviu').last();
  const lastReviewText = await I.grabTextFrom(newReview);
  assert.strictEqual(review, lastReviewText.trim());
});