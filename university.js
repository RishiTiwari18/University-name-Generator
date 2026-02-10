let url = "https://universities.hipolabs.com/search?name=";

let btn = document.querySelector("#b");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let collegeArr = await getcolleges(country);
    console.log(collegeArr);

    show(collegeArr);
});

function show(collegeArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for (let col of collegeArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getcolleges(country) {
    try {
        let res = await axios.get(url + encodeURIComponent(country));
        return res.data;
    } catch (e) {
        console.log("error:", e);
        return [];
    }
}
