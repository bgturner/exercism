// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Get the position (index) of the card in the given stack
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} position of the card in the stack
 */
export const getCardPosition = (stack, card) => {
  return stack.indexOf(card);
};

/**
 * Determine if the stack contains the card
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {boolean} true if card is in the stack, false otherwise
 */
export const doesStackIncludeCard = (stack, card) => {
  return stack.indexOf(card) >= 0;
};

/**
 * Determine if each card is even
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if all cards are even, false otherwise
 */
export const isEachCardEven = (stack) => {
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
};

export const getFirstOddCardIndex = (stack) => {
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] % 2 !== 0) {
      return i;
    }
  }
  return -1;
};

/**
 * Check if stack contains odd-value card
 *
 * @param {number[]} stack
 *
 * @returns {boolean} true if the array contains odd card, false otherwise
 */
export const doesStackIncludeOddCard = (stack) => {
  const oddIndex = getFirstOddCardIndex(stack);
  return oddIndex >= 0 ? true : false;
};

/**
 * Get the first odd card from the stack
 *
 * @param {number[]} stack
 *
 * @returns {number} the first odd value
 */
export const getFirstOddCard = (stack) => {
  const oddIndex = getFirstOddCardIndex(stack);
  return oddIndex >= 0 ? stack[oddIndex] : undefined;
};

/**
 * Determine the position of the first card that is even
 *
 * @param {number[]} stack
 *
 * @returns {number} position of the first card that is even
 */
export const getFirstEvenCardPosition = (stack) => {
  for (var i = 0; i < stack.length; i++) {
    if (stack[i] % 2 === 0) {
      return i;
    }
  }
  return -1;
};