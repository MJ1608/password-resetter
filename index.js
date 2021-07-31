function passConfirm() {
        if ($(".newp").val() ==
            $(".re_newp").val()) {
            len($(".newp").val());
       } else {
           $("#Message").css("color", "red");
           $("#Message").html("Passwords do NOT match!");
       }
   }


function len(a){
  if(a.length<8){

    $("#Message").html("Password Length cannot be less than 8");
  }

  else
  alphabe(a);
}

function alphabe(a){
  if(/^[a-z]+$/i.test(a)){
    $("#Message").html("the password cannot contain characters only from the alphabet");
  }

  else
  {$("#Message").css("color", "green");
  $("#Message").html("Passwords match!");

}
}

$(document).ready(function(){
  $(".btn-dark").click(function(){
    if($(".newp").val() !== null)
    {$("#bef").addClass("before");
    $("#aft").css("display","block");
}
  });
});
