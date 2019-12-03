Given array 1 and array 2 with no duplicate elements in either.
Set a 'counter' variable to 0.
Set an 'output' variable to 'false'.
    Iterate across array 2 while the 'ouput' is 'false'.
        Iterate across array 1 while the 'ouput' is 'false'.
            If an element in array 2 is equal to an element in array 1,
                Increment the counter.
                If the 'counter' is equal to the length of array 1 ,
                    Set 'output' to 'true'.
Return 'output' which will be either 'true' if array 1 is a subset of 2 or 'false' otherwise
