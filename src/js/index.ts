//Her skal du skrive din typescriptkode

let myElement:HTMLLIElement = <HTMLLIElement> document.getElementById("0");
console.log(myElement);

if(myElement.hasAttribute("class"))
{
    console.log("element has class attribute")

    if(myElement.getAttribute("class")=="usundt")
    {
        myElement.setAttribute("class","sundt");
    }
}

let myList:HTMLCollectionOf<HTMLLIElement> =
    <HTMLCollectionOf<HTMLLIElement>> document.getElementsByTagName("li"); 

console.log(myList);

console.log("Starts the for loop");
//change the class attribute for all the elements in the loop, from "usundt" to "sundt" and virce versa
for (let index = 0; index < myList.length; index++) {
    const element = myList[index];
    console.log(element);
    if(element.hasAttribute("class"))
      {
          if(element.getAttribute("class")=="usundt")
          {
              element.setAttribute("class","sundt");
          }
          else
          {
            element.setAttribute("class","usundt");
          }
      }
}