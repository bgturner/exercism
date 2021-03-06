/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export const cookingStatus = (n) => {
  if (n === undefined || n === null) return "You forgot to set the timer.";
  if (n === 0) return "Lasagna is done.";
  return "Not done, please wait.";
};

export const preparationTime = (layers, factor = 2) => {
  return layers.length * factor;
};

export const quantities = (layers) => {
  const qty = {
    noodles: 0,
    sauce: 0,
  };
  const amts = {
    noodles: 50,
    sauce: 0.2,
  };
  for (let item of layers) {
    if (item in amts) qty[item] += amts[item];
  }
  return qty;
};

export const addSecretIngredient = (friends, mine) => {
  mine.push(friends[friends.length - 1]);
};

export const scaleRecipe = (recipe, scale) => {
  const r = {};
  for (const [key, val] of Object.entries(recipe)) {
    r[key] = (val / 2) * scale;
  }
  return r;
};
