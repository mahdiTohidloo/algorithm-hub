/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    const profits = [];
    let maxProfit = 0;
    
   prices.forEach((item, index) => {
      let bestProfite = 0;
      for ( let i = index; i < prices.length ; i++ ) {
        const currentProfit = prices[i] - item;
        if ( currentProfit > bestProfite )
            bestProfite = currentProfit;
      }
      profits.push(bestProfite);
    });
    
    profits.forEach((item) => {
      maxProfit = item > maxProfit ? item : maxProfit;
    });
    
    
    return maxProfit;
  };

  const test = [2,1,10,5,20,3,10,4];
  console.log(maxProfit(test)); // should log '19'