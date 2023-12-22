import React from 'react'

function CheckMax(nums) {
    const num = nums;
    if (num > 9){
         return  `9+`;
    }
    else{
        return num;
    }
}

export default CheckMax