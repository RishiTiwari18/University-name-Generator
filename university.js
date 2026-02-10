document.addEventListener("DOMContentLoaded", () => {

    let url = "https://universities.hipolabs.com/search?name=";
    let btn = document.querySelector("#b");

    if (!btn) {
        console.error("Button not found");
        return;
    }

    btn.addEventListener("click", async () => {
        let country = document.querySelector("#country").value.trim();

        if (country === "") {
            alert("Please enter a country name");
            return;
        }

        let collegeArr = await getcolleges(country);
        show(collegeArr);
    });

    function show(collegeArr) {
        let list = document.querySelector("#list");
        list.innerHTML = "";

        if (collegeArr.length === 0) {
            list.innerText = "No universities found";
            return;
        }

        for (let col of collegeArr) {
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
        }
    }

    async function getcolleges(country) {
        try {
            let res = await axios.get(
                url + encodeURIComponent(country)
            );
            return res.data;
        } catch (e) {
            console.error("API error:", e);
            return [];
        }
    }

});
