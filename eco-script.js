
var one=document.querySelector(".one")
var searchicon=document.querySelector(".searchicon")
var two=document.querySelector(".two")




function arise()
{
   two.style.left="0"

   
}

function closee()
{
   two.style.left="-60%"
}



var six = document.querySelector(".six")
   var six_one = six.querySelectorAll(".six-one")


   for (var i=0;i<six_one.length;i++)
   {
   var six_button = six_one[i].querySelector("button")

   six_button.addEventListener("click", function() 
   {

       alert("NO stack available")
   })

   }

   

   var six = document.querySelector(".six")



   var elements = six.querySelectorAll(".six-one")

   var texts = ""



   function check() {
       texts = uuu.value.toUpperCase()

       for (var i = 0; i <= elements.length; i++) {
           if (elements[i].textContent.toUpperCase().indexOf(texts) < 0) {
               elements[i].style.display = "none"
           }


           else {
               elements[i].style.display = "block"
           }




       }



   }









   var one=document.querySelector(".one")
   var searchicon=document.querySelector(".searchicon")
   var two=document.querySelector(".two")
  
   
  
  
   function arise()
   {
      two.style.left="0"
  
      
   }
  
   function closee()
  {
      two.style.left="-60%"
  }
       




  function details()
  {
    alert("Your details saved")
    

  }




