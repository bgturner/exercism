// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  if (name === "Pure Strawberry Joy") return 0.5;
  if (name === "Energizer") return 1.5;
  if (name === "Green Garden") return 1.5;
  if (name === "Tropical Island") return 3;
  if (name === "All or Nothing") return 5;
  return 2.5;
}

/*
 * Calculates the number of wedges that can be cut from a certain size lime.
 */
function wedgesFromLime(lime) {
  const numWedges = {
    small: 6,
    medium: 8,
    large: 10,
  };
  return numWedges[lime];
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesNeeded = 0;
  while (wedgesNeeded > 0 && limes.length > 0) {
    wedgesNeeded = wedgesNeeded - wedgesFromLime(limes.shift());
    limesNeeded++;
  }
  return limesNeeded;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  while (timeLeft > 0 && orders.length > 0) {
    timeLeft = timeLeft - timeToMixJuice(orders.shift());
  }
  return orders;
}
