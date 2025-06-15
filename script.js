//your code here!
const list=document.getElementById("infi-list");
let itemCount=0;

function addItems(count){
	for(let i=0;i<count;i++){
		const li=document.createElement("li");
		li.textContent=`List Item ${++itemCount}`;
		list.appendChild(li);
	}
}
addItems(10);

window.addEventListener("scroll", () =>{
	if(window.innerHeight + window.scrolly >= document.body.offsetHeight){
		addItems(2);
	}
})
