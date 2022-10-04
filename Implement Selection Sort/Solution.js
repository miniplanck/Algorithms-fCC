function selectionSort(array) {
 
  let sorted = [];
  let unsorted = array.slice();
  let i = 0;
  
  while(unsorted.length > 0){
    //Search for min
    let min = Math.min(...unsorted);
    //Add to sorted
    sorted.push(min);
    i++;
    //Remove min from list
    unsorted.splice(unsorted.indexOf(min),1);
  }

  return sorted;

}

selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])
