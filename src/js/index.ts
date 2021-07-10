//Write your Typescript code here
console.log("Task 1")
let firstElem: HTMLLIElement = <HTMLLIElement>document.getElementById("3");
console.log(firstElem);

let firstList: HTMLCollectionOf = <HTMLCollectionOf>document.getElementsByTagName("li");
console.log("Li type list");
console.log(firstList);

let firstClassNAme: HTMLCollectionOf = <HTMLCollectionOf>document.getElementsByClassName("unhealthy");
console.log("Class type list:");
console.log(firstClassNAme);

console.log("Task 2 & 3")
for (let index = 0; index < firstList.length; index++) {
    const element = firstList[index];
    console.log(element)
    if(element.hasAttribute("class"))
    {
        if(element.getAttribute("class")=="healthy" )
        {
            element.setAttribute("class","unhealthy");
        }
        else
        {
            element.setAttribute("class","healthy")
        }

    }
}


console.log("Task 4")
let parent = document.getElementById("list").parentNode.nodeName;
console.log(parent);
let fchild = document.getElementById("list").firstChild.TEXT_NODE;
console.log(fchild);
let lchild = document.getElementById("list").lastChild.nodeType;
console.log(lchild);


console.log("Task 5")
let listunhealthy:HTMLUListElement = <HTMLUListElement>document.getElementById("listUnhealthy")
let newLi:HTMLLIElement = <HTMLLIElement>document.createElement("li")
newLi.setAttribute("class", "unhealthy")
let newText = document.createTextNode("chips")
newLi.appendChild(newText)
listunhealthy.appendChild(newLi)


console.log("Task 6")
let newItem = document.createElement("li")
newItem.setAttribute("class", "healthy")
let newTxt = document.createTextNode("Water")
newItem.appendChild(newTxt)

let list = document.getElementById("list")
list.insertBefore(newItem, list.childNodes[3])

console.log("Task 7")
let mover
for (let index = 0; index < firstList.length; index++)
{
    const element = firstList[index];
    if (element.hasAttribute("class")){
        if(element.getAttribute("class")== "unhealthy"){
            mover = element;
            listunhealthy.insertBefore(mover, listunhealthy.childNodes[0]);
            firstList.removeChild(firstList.childNodes[index]);
        }
    }
}

console.log("Task 8")
document.getElementById("0").textContent = "bananas";