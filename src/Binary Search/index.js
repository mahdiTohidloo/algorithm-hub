const BinarySearch = (arr, item) => {
    if ( arr.length === 1 ) {
        return arr[0].id === item ? arr[0] : 'not found';
    }

    const middle = Math.round( arr.length / 2);
    if ( arr[middle].id === item ) {
        return arr[middle];
    }
    
    const nextStepArray = arr[middle].id > item ? arr.slice(0, middle) : arr.slice(middle, arr.length) ;
    return BinarySearch(nextStepArray, item);
};



const test = [
    {
        id: 1,
        name: 'mehdi'
    },
    {
        id: 4,
        name: 'john'
    },
    {
        id: 5,
        name: 'ramsy'
    },
    {
        id: 9,
        name: 'aria'
    },
    {
        id: 200,
        name: 'deneris'
    },
    {
        id: 221,
        name: 'ned'
    },
];
console.log(BinarySearch(test, 4));