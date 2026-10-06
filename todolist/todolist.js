const todoList = [];
function renderTodoList(){
  let todoLisHTML ='';
  for (i=0; i<= todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoLisHTML += html;
  }
  console.log(todoLisHTML);
  document.querySelector('.js-todoList')
  .innerHTML = todoLisHTML;

}
function AddTodo (){
  const inputElement = document.querySelector("#js-name-input");
  const name=inputElement.value;
  const
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
  
}

// non-standardloop like random number
// let i = 1;
//   while ( i<= 5){
//     console.log(i);
//     i++;
    
//   }
//  let randomNum = 0 ;
//  while(randomNum < 0.5){
//   randomNum = Math.random();
//  }
//  console.log(randomNum);

// stadardloop
// for (let i = 1; i<= 5 ; i++){
//   console.log(i);
// }


// const List = [
//   'make dinner',
//   'wash dishes',
//   'watch youtube'
// ];
// for(i = 0; i <= List.length -1 ; i++){
//   console.log(List[i])
  
// }

// const nums = [1,2,3];
// let result = 0;
// for(let i=1 ;i < nums.length;i++ ){
//   const num = nums[i];
//   result += num ;
  
// }
// console.log(result)
// const doubArray = [];
// for (let i=0; i < nums.length; i++){
//   const num = nums[i];
//   doubArray.push(num*2)
// }
// console.log(doubArray);

