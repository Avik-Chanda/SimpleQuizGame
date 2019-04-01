let Validateform= function(form)
{
    var firstanswer = document.getElementById("task").value;

    if((firstanswer == "Delhi") && ((form.radio1[0].checked == true ) && (form.radio1[1].checked ==false)) && ((form.radio1[0].checked == true ) && (form.radio1[1].checked ==false)))
    {   
      document.getElementById('winner').style.visibility = "visible";

          console.log("All right")
         
    }
    else{
        document.getElementById('looser').style.visibility = "visible";
        console.log("All wrong ")
        
    }
   


    // if(document.getElementById('firstquestion').value === "Delhi")
    // {
    //     document.getElementById("result").innerHTML=
    // }
    // else
    // {
    //     console.log("Nothing");
    // }
    // if((form.radio1[0].checked == true) && (form.radio1[1].checked == false))
    // {
    //     console.log("Hi there everything is working fine ");
    // }
    // else{
    //     console.log("Everything is wrong");
    // }

    // if((form.radio2[0].checked == true) && (form.radio2[1].checked == false))
    // {
    //     console.log("Hi there everything is working fine ");
    // }
    // else{
    //     console.log("Everything is wrong");
    // }

}