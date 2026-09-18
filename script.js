//your JS code here. If required.
let container= document.getElementById("grid-container")
let colorBtn= document.getElementById("change_button")
let resetBtn= document.getElementById("Reset")
let inputColor= document.getElementById("colour_id")
let inputBlock= document.getElementById("block_id")
colorBtn.addEventListener("click",()=>{
	let colour=inputColor.value
	let block= inputBlock.value
	let change=document.getElementById(`${block}`)
	change.style.backgroundColor=`${colour}`
})
resetBtn.addEventListener("click",()=>{
	let colour=inputColor.value
	let block= inputBlock.value
	let change=document.getElementById(`${block}`)
	container.style.backgroundColor="transparent"
})