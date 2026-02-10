document.addEventListener("DOMContentLoaded", () => {

    const url = "https://universities.hipolabs.com/search?name=";
    const btn = document.querySelector("#b");
    const input = document.querySelector("#country");
    const list = document.querySelector("#list");

    btn.addEventListener("click", async () => {
        const country = input.value.trim();
        list.innerHTML = "Loading...";

        try {
            const res = await fetch(url + encodeURIComponent(country));
            const data = await res.json();

            list.innerHTML = "";

            if (data.length === 0) {
                list.innerHTML = "<li>No universities found</li>";
                return;
            }

            data.forEach(col => {
                const li = document.createElement("li");
                li.innerText = col.name;
                list.appendChild(li);
            });

        } catch (error) {
            list.innerHTML = "<li>Error loading data</li>";
            console.error(error);
        }
    });

});

