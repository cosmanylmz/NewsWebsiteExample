function registration() {
    
    var lastname = getElementById("lastname").value;
    var email = getElementById("email").value;
    var username = getElementById("username").value;
    var name = getElementById("isim").value;
    var pw1 = document.getElementById("pswd");  
    var pw2 = document.getElementById("cpswd");  
    if (name == '') {
        alert('Please enter your name');
    }
    else if (lastname == '') {
        alert('Please enter your name');
    }
    else if (email == "") {
        alert("you should enter your mail");
    }
    else if(username==""){
        alert("you should enter your username")
    }
    
    else if(pw1==""){
        alert("you should enter your password");
      }
      else if (pw2==""){
        alert("please confirm your password");
      }
    else if(pw1 != pw2){
        alert("password confirmation failed")
    }
    
    else if (document.getElementById("pswd").value.length<6){
      alert("password minimum length should be 6");
    
    }else if(document.getElementById("pswd").value.lenght>15){
      alert("password maximum lenght should be 15");
    }else{
  whichpagecal=2;
  alert("thank you for your register");

}
return whichpagecal==2;
}
    
