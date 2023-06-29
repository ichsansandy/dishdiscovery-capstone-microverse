import totalItemsCounter from '../src/modules/totalItemsCounter.js';

const simulateDOM = () => {
  const span = document.createElement('span');
  span.className = 'total-meals';
  document.body.appendChild(span);
};

simulateDOM();

const dummyArray = ['item1', 'item2', 'item3'];

describe('totalItemsCounter', () => {
  totalItemsCounter(dummyArray.length);
  const span = document.querySelector('.total-meals');

  test('should put the right amount of total items', () => {
    expect(span.innerHTML).toBe(` ( ${dummyArray.length} )`);
  });
});
