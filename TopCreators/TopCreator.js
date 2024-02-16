export const getTopCreators = (creators) => {
    const finalcreators = [];
    const finalresults = creators.reduce((index, currentValue) => {
        (index[currentValue.seller] = index[currentValue.seller] || []).push(currentValue);
        return index;
    }, {});
   Object.entries(finalresults).forEach((item) => {
        const seller = item[0];
        const total = item[1]
            .map((newItem) => Number(newItem.price))
            .reduce((previosValue, currentValue) => previosValue + currentValue, 0);
        finalcreators.push({seller, total});
   });
   return finalcreators;
}