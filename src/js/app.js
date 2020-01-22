/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */


export default function showArms(special) {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < special.length; i++) {
    const submas = special[i];
    const massive = Object.keys(submas);
    if (!massive.includes('description')) {
      submas.description = 'Описание недоступно';
    }
    arr.push(submas);
  }
  return arr;
}
