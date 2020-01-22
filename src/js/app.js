/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */



export default function showArms(special) {
  
  let arr = [];
  for (let i=0; i<special.length; i++){
      let submas = special[i];
      let massive = Object.keys(submas);
         if (!massive.includes('description')){
          submas.description = 'Описание недоступно';         
        }
      arr.push(submas);  
  }
  return arr;  
}
