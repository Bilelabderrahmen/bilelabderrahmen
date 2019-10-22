let addbutton=document.querySelector('.add');
addbutton.addEventListener('click',function(e)
{    addItem(e)
});
function addItem(e)
{
         e.preventDefault()
         let champtext=document.querySelector('.todo');
         console.log(champtext)
         if(champtext.value!=='')
         {
           document.querySelector('.todoitem').innerHTML=`
           <li> <input type="button" value="Complete"  class="completed"/>
               <input type="button" value="Delete" class="delete"/>
               <span class="item">${champtext.value}</span></li>`+
           document.querySelector('.todoitem').innerHTML
           champtext=document.querySelector('.todo').value=''
         }
let complete = Array.from(document.querySelectorAll('.completed'))
console.log(complete)
complete.map(el => el.addEventListener('click',()=>
   {
    el.parentElement.querySelector('.item').classList.toggle("textbarre")
    if(el.value==="complete")
     el.value="undo"
    else
     el.value="complete"
   }))
let deleteButton = Array.from(document.querySelectorAll('.delete'));
deleteButton.map(el => el.addEventListener('click',()=>{el.parentElement.remove()}))
}