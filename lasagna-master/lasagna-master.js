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

export function cookingStatus(time){
    if(time === undefined){
        return 'You forgot to set the timer.'
    }else if(time === 0){
        return 'Lasagna is done.'
    }
    return 'Not done, please wait.'
}

export function preparationTime(layers, timePerLayer = 2){
    return layers.length * timePerLayer
}

export function quantities(layers){
    const sauce = 0.2
    const noodles = 50

    // let sauceQuantity = 0
    // let noodlesQuantity = 0

    //for each Method
    // layers.array.forEach(element => {
    //     if(element === 'sauce'){
    //         sauceQuantity += sauce
    //     } else if(element === 'noodles'){
    //         noodlesQuantity += noodles
    //     }
    // });
    
    //reduce Method
    const sauceQuantity = layers.reduce((accumulator, currentLayer) => {
        if (currentLayer === 'sauce') {
          return accumulator + sauce;
        } else {
          return accumulator;
        }
      }, 0);
      
      const noodlesQuantity = layers.reduce((accumulator, currentLayer) => {
        if (currentLayer === 'noodles') {
          return accumulator + noodles;
        } else {
          return accumulator;
        }
      }, 0);
    
    //Version Original(Refactorizar - No optima)
    // for (let index = 0; index < layers.length; index++) {
    //     if(layers[index]==='sauce'){
    //         sauceQuantity += sauce
    //     } else if(layers[index]==='noodles'){
    //         noodlesQuantity += noodles
    //     }
    // }

    return {
        sauce:sauceQuantity,
        noodles:noodlesQuantity
    }
}

export function addSecretIngredient(friendList, myList){
    const secretIngredient = friendList[friendList.length-1]
    myList.push(secretIngredient)
}

export function scaleRecipe(recipe, portions){
    const newRecipe = {... recipe}
    const factor = portions / 2
    for (let key in recipe) {
        newRecipe[key] *= factor
    }
    return newRecipe
}