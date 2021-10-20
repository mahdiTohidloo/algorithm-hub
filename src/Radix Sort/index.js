const radixSort = (arr, position = 1) => {
    let sorted = [];
    const buckets = {};
    let itemsWithoutPosition = 0;
    // init buckets buckets
    for ( let i = 0; i < 10 ; i++ ) {
        buckets[i] = [];
    }
    arr.forEach((item) => {
        const itemString = item.toString();
        const itemPosition = itemString[itemString.length - position];
        if ( itemPosition ) {
            buckets[itemPosition].push(Number(item));
        } else {
            buckets['0'].push(Number(item));
            itemsWithoutPosition++;
        }
    });

    Object.keys(buckets).forEach((key) => {
        sorted = sorted.concat(buckets[key]);
    });

    if ( itemsWithoutPosition === arr.length )
        return sorted;
    return radixSort(sorted, position + 1);
};

const testArr = [211348,10,6,4,31, 20100];
console.log(radixSort(testArr));