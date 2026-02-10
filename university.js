document.addEventListener("DOMContentLoaded", () => {

    const url = "https://universities.hipolabs.com/search?country=";
    const btn = document.querySelector("#b");
    const input = document.querySelector("#country");
    const list = document.querySelector("#list");

    btn.addEventListener("click", async () => {
        const country = input.value.trim();

        if (country === "") {
            list.innerHTML = "<li>Please enter a country name</li>";
            return;
        }

        list.innerHTML = "<li>Loading...</li>";

        try {
            const response = await fetch(
                url + encodeURIComponent(country)
            );

            // 🔴 check HTTP status
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();

            list.innerHTML = "";

            if (data.length === 0) {
                list.innerHTML = "<li>No universities found</li>";
                return;
            }

            data.forEach(college => {
                const li = document.createElement("li");
                li.innerText = college.name;
                list.appendChild(li);
            });

        } catch (error) {
            console.error("Fetch error:", error);
            list.innerHTML = "<li>Error loading data</li>";
        }
    });

});
