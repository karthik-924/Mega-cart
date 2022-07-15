
const checking=()=>{
    var user=document.getElementById("username").value
    var pass=document.getElementById("password").value
    if(user in localStorage && localStorage.getItem(user)===pass){
        console.log("Success")
        location.href="main.html"
        sessionStorage.setItem("currentlyloggedin",user)
    }
    else{
        alert("Wrong")
        document.getElementById("error").innerText="Invalid username or password!"
        document.getElementById("error").style.color="red"
    }
}