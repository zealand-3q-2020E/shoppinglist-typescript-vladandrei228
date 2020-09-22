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

console.log("Task 2")
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