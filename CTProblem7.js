//Pre-condition: Input an array of strings
//Post-condition: Output longest common prefix, 'none' if no common prefix
function CTProblem7() {
    var arr1 = ["help","hello","hell"];
    var flag1 = 'false';
    var strNew = ''; 
    var arr2 = [];
    var flag2 = 'true';
    for(var i = 1; i < arr1.length && flag2 == 'true'; i++) {
        var str1 = arr1[i-1].split('');
        var str2 = arr1[i].split('');
        flag1 = 'true'
        var strNew = ''; 
        for(var j = 0; j < str1.length || j < str2.length && flag1 == 'true' && flag2 == 'true'; j++) {
            if(str1[0] != str2[0]) {
                flag2 = 'false';
                flag1 = 'false';
                arr2 = [];
            } else {
            }
            if(str1[j] != str2[j] && flag2 == 'true') {
                if(strNew < arr2[0] && arr2.length == 1) {
                    arr2 = []
                    arr2.push(strNew)
                    flag1 = 'false';
                } else if (arr2.length == 0) {
                    arr2.push(strNew)
                    flag1 = 'false';
                } else {
                    flag1 = 'false';
                }
            } else {
                strNew = strNew+str1[j]; 
            }
        }
    }
    if (flag2 == 'false') {
        arr2.push('none');
    } else {
    }
    alert(arr2);
}