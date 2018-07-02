const hanshuRestultSpan = document.querySelector("#hanshu-result");
const double = arr => arr.map(item => item * 2);
const testArr=[1,2,3];
const resultArr=double(testArr);
resultArr.map(item=>{
    hanshuRestultSpan.innerText=item;
});