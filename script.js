function calculatetip() {
  let age = document.getElementById("age").value;
  let destination = document.getElementById("destination").value;
  let booking_type = document.getElementById("booking_type").value;
  let erdestination = document.getElementById("erdestination")
  let erage = document.getElementById("erage")
  let erbooking_type = document.getElementById("erbooking_type")
  let validate;
  var namount;

  function validation() {
    let x=0;
    // window.alert("Please enter some values to get this baby up and running");
    if(destination === ""){ 
      erdestination.textContent = "please select destination";
      x++;
    }
   
    if(age === ""){ 
      erage.textContent = "please enter age";
      x++;
    }
   
    if(booking_type === ""){ 
      erbooking_type.textContent = "please select booking type";
      x++;
    }

    if(x>0)
    {
      return 0;
    }

    
  }
  validate=validation();

  if(validate == 0)
  {
    return;
  }
  switch(destination){
   
    case "Mumbai" : destination = namount = 600;
    
                    break;    

    case "Bengaluru" : destination = namount = 450;
                    break;    

    case "Mangaluru" : destination = namount = 300;
                    break;    
                  
    case "Haveri" : destination = namount = 350;
    break;    
                    
}
if(booking_type == "tatkaal")
{
     total = destination + 150;
   
}
else{
      
      if (age < 15) {
          var total = (destination * 50) / 100;
          total = Math.round(total * 100) / 100;
          // total = total.toFixed(2);
      } 

      else if (age > 59) {
          var total = (destination * 60) / 100;
          total = Math.round(total * 100) / 100;
          total = total.toFixed(2);
      } 

      else {
           var total = destination;
      }
}

  document.getElementById("normalprice").style.display = "block";
  document.getElementById("namount").innerHTML = namount;
  document.getElementById("finalprice").style.display = "block";
  document.getElementById("amount").innerHTML = total;

}

 document.getElementById("normalprice").style.display = "none";
 document.getElementById("finalprice").style.display = "none";


document.getElementById("calculate").onclick = function () {
  calculatetip();
};
