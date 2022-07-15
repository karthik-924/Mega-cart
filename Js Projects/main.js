let i
const display=()=>{
    i=0
    var today=new Date()
    var date=today.getDay()+"(weekday) "+(today.getMonth()+1)+"-" +today.getDate()+"-"+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes()+":"+today.getSeconds()+" GMT "+today.getTimezoneOffset()+" (Indian Standard Time)"
    document.getElementById("date").innerText=date
    var user=sessionStorage.getItem("currentlyloggedin")
    document.getElementById("data").innerText="Dear "+ user +"! Welcome to Mega Cart"
}
const added=(num)=>{
    i++
    var items=["Clothing","Footwear","Health","School"]
    alert("1 "+items[num-1]+" item added to cart!")
    var Clothing=new Object()
    Clothing.name="Dress"
    Clothing.cost=500
    Clothing.daystodeliver="3-4 days"
    var Footwear={
        name:"Shoes",
        cost:1000,
        daystodeliver:"2-3 days"
    }
    var Health={
        name:"Facewash",
        cost:100,
        daystodeliver:"1-2 days"
    }
    var School={
        name:"Bag",
        cost:1000,
        daystodeliver:"9-10 days"
    }
    var item=[Clothing,Footwear,Health,School]
    var st="item"+String(i)
    var itemselected={[st]:item[num-1]}
    var user=sessionStorage.getItem("currentlyloggedin")
    var sto=user+"item"+String(i)
    sessionStorage.setItem(sto,JSON.stringify(itemselected))
    var items1=JSON.parse(sessionStorage.getItem(sto))
}
const logout=()=>{
    sessionStorage.clear()
    location.href="index.html"
}

const cart=()=>{
    var user=sessionStorage.getItem("currentlyloggedin")
    var user1=user+"1"
    sessionStorage.setItem(user1,i)
    location.href="buy-item.html"
}