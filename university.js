let url="http://universities.hipolabs.com/search?country=";
let btn=document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country =document.querySelector("input").value;
    console.log(country);
    let collegeArr = await getcolleges(country);
    console.log(collegeArr);
    show(collegeArr);
});
function show(collegeArr){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of collegeArr){
        console.log(col.name);
    let li = document.createElement("li");
    li.innerText=col.name;
    list.appendChild(li);
}
}

async function getcolleges(country){
    try{
        let res = await axios.get(url+country);
        return res.data;

    }catch(e){
        console.log("error :",e);
        return [];

    }
}
