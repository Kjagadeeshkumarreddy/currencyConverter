let from =document.querySelector(".f-country");
let to =document.querySelector(".t-country");
let but=document.querySelector(".get");
let country=document.querySelectorAll(".country");
let url="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let from_country="USD";
let to_country="INR";
for(let select of country){
for(currcode in countryList){
    let option=document.createElement("option");
    option.innerText=currcode;
    option.value=currcode;
    select.append(option);
}
select.addEventListener("change",(event)=>{
    updateflag(event.target);
    if(select.className==="f-country country"){
        from_country=event.target.value;
    }else{
        to_country=event.target.value;
    }
});
}
updateflag=(ele)=>{
let currcode=ele.value;
let countrycode=countryList[currcode];
let imgurl=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img=ele.parentElement.querySelector("img");
img.src=imgurl;
}
let p=document.querySelector(".ans");
but.addEventListener("click",(eve)=>{
let amount =document.querySelector(".input");
let amount_val=amount.value;
if(amount_val<0){
    alert("amount should not be in negative");
}
else if(amount_val.trim()===""){
    alert("amount should not be in Empty");
}else{
let newurl=`${url}${from_country.toLowerCase()}.json`;
calculation= async (amount_val)=>{
    let data=await fetch(newurl);
    let jdata=await data.json();
    let ans=jdata[from_country.toLocaleLowerCase()][to_country.toLocaleLowerCase()];
    //fconsole.log(ans*amount_val);
    p.innerText=`${ans*amount_val}`;
}
calculation(amount_val);
p.classList.add("active-style");
}
});
