const display=()=>{
    var today=new Date()
    var date=today.getDay()+"(weekday) "+(today.getMonth()+1)+"-" +today.getDate()+"-"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" GMT "+today.getTimezoneOffset()+" (Indian Standard Time)"
    document.getElementById("date").innerText=date
    var user=sessionStorage.getItem("currentlyloggedin")
    document.getElementById("data").innerText="Dear "+ user +"! Here's the summary of the bill ..."
    var user=sessionStorage.getItem("currentlyloggedin")
    var user1=user+"1"
    var i=sessionStorage.getItem(user1)
    document.getElementById("number").innerText="You have bought "+i+" items"
    var user=sessionStorage.getItem("currentlyloggedin")
    var ul = document.getElementById("items");
    var cost=0
    let m=0
    for (m=1;m<=i;m++){
        console.log(m)
        var li = document.createElement("li");
        var st="item"+String(m)
        var sto=user+"item"+String(m)
        var items=JSON.parse(sessionStorage.getItem(sto))
        console.log(items)
        var keys=Object.keys(items[st])
        console.log(keys)
        var toappend=document.createTextNode("Item "+ items[st][keys[0]] + " costing Rs. "+ items[st][keys[1]] + " will be delivered in " + items[st][keys[2]]+"!")
        li.appendChild(toappend)
        ul.appendChild(li)
        cost+=items[st].cost
    }
    document.getElementById("cost").innerText="Your total bill is : Rs "+cost
}
const logout=()=>{
    sessionStorage.clear()
    location.href="index.html"
}