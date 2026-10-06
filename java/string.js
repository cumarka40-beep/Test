const input = document.getElementById("input");
function reverString(str){
  return str.split("").reverse().join("")

}
function check(){
  const value = input.value;
  const reverse = reverString(value);
  if (value === reverse){
    alert("PALINDROME");
  }else{
    alert("not today!");
  }
  input.value = "";
}