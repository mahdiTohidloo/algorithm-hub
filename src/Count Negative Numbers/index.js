var countNegatives = function(grid) {
    let negatives = 0;
    grid.forEach(matrixItem => {
        matrixItem.forEach(item => {
            if ( item < 0 )
                negatives++;
        })
    });
    return negatives;
};

console.log(countNegatives([[1,2,-1,-2], [1,2,-4,-8]]));