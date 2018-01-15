export const isAdult = (age) => age >= 18;

const canDrink = (age) => {
    return age >= 21;
}

export default (age) => age >= 65;

export {canDrink}