const arr = [1, 2, 3, 4, 1, 0, 2, 2];
let result=[];
let temp=[];
let sum=0;

const divide = (arr, n) => {
  // Write your code here
	for(let i=0;i<arr.length;i++){
        if((sum+arr[i])<=n){
            sum+=arr[i];
            temp.push(arr[i]);
        }else{
                result.push([...temp]);
                temp=[arr[i]];
                sum=arr[i];
        }
    }
    if(temp.length>0){
        result.push([...temp]);
    }
    console.log(result);
};

const n = prompt("Enter n: ");
divide(arr, 5);
