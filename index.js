// Problem Solving (30’)
// Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.


// Prints help message to the console
// Returns a string

let exampleArray = [2, 3, -5, -1, 4]

function adjacentElementsProduct(inputArray) {
    let max = 0;
    inputArray.forEach((element, index, array) => {
        if(index < inputArray.length) {
            if(array[index] * array[index + 1] > max) {
                max = array[index] * array[index + 1];
            }
        }
    });
    return max;
}
console.log('Ket qua bai 1: ' + adjacentElementsProduct(exampleArray));


// Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
// Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.



// Prints help message to the console
// Returns a string

let exampleArrayTwo = [60, 40, 55, 75, 64];

function alternatingSums(a) {
    let sum = [0, 0];
    a.forEach((element, index) => {
        if(index % 2 === 0) {
            sum[0] += element;
        } else {
            sum[1] += element;
        }
    });
    return sum;
}

console.log('Output array [60, 40, 55, 75, 64] la : ', alternatingSums(exampleArrayTwo));

















