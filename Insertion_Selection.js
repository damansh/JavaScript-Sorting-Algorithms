var a = [10, -5, -1, 2, 4, 5, 5, 6676, -1000000];

function insertionSort(a){
  var i, totalLength = a.length, temp, j;

  for(i = 1; i < totalLength; i++){
    temp = a[i];
    j = i;

    while(j>0 && a[j-1]>temp){
      a[j] = a[j-1];
      j--;
   }

   a[j] = temp;
  }
  return a;
}

insertionSort(a);