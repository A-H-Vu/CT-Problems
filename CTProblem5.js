//Pre-condition: Input arrays 1 and 2 with no duplicate elements in either
//Post-condition: Output 'true' if array 1 is a subset of 2, 'false' otherwise
function CTProblem5() {
    var arr1 = [3,7,-6];
    var arr2 = [5,-6,3,4,7,1];
    var counter = 0;
    var output = 'false';
    for (var i = 0; i < arr2.length && output == 'false'; i++) {
        for (var j = 0; j < arr1.length && output == 'false'; j++) {
            if (parseInt(arr2[i]) == parseInt(arr1[j])) {
                counter++;
                if (counter == arr1.length) {
                    output = 'true';
                } else {
                }
            } else {
            }
        }
    }
    alert(output);
}