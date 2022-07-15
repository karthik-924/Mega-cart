const validate=()=>{
    document.getElementById("use").innerText=""
    document.getElementById("ema").innerText=""
    document.getElementById("num").innerText=""
    document.getElementById("pas").innerText=""
    document.getElementById("con").innerText=""
    const username=document.getElementById("username").value
    const email=document.getElementById("email").value
    const number=document.getElementById("number").value
    const password=document.getElementById("password").value
    const confirm=document.getElementById("confirm").value
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(username.length<6 || username.length>10){
        document.getElementById("use").innerText="Invalid Username"
        document.getElementById("use").style.color="red"
    }
    else if(email.match(validRegex)===null){
        document.getElementById("ema").innerText="Invalid Email"
        document.getElementById("ema").style.color="red"
    }
    else if(String(number).length!==10){
        document.getElementById("num").innerText="Invalid Number"
        document.getElementById("num").style.color="red"
    }
    else if(paswd.test(password)===false){
        document.getElementById("pas").innerText="Invalid Password Include a digit,one special character"
        document.getElementById("pas").style.color="red"
    }
    else if(confirm!==password){
        document.getElementById("con").innerText="Passwords dont match"
        document.getElementById("con").style.color="red"
    }
    else{
        localStorage.setItem(username,password)
        sessionStorage.setItem("currentlyloggedin",username)
        location.href="main.html"   
    }
}