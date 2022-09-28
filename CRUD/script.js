var selectedRow = null;

// show alert
function showAlert (message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert".remove(), 3000));
}

// clear all fields
function clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#singer").value = "";
    document.querySelector("#genre").value = "";
}

// add data
document.querySelector("#song-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // get form value
    const title = document.querySelector("#title").value;
    const singer = document.querySelector("#singer").value;
    const genre = document.querySelector("#genre").value;

    // validate
    if (title == "" || singer == "" || genre == "") {
        showAlert("Please fill in all fields", "danger");
    }
    else {
        if (selectedRow == null) {
            const list = document.querySelector("#song-list");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${title}</td>
                <td>${singer}</td>
                <td>${genre}</td>
                <td>
                    <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                    <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Song Added", "success")
        }
        else {
            selectedRow.children[0].textContent = title;
            selectedRow.children[1].textContent = singer;
            selectedRow.children[2].textContent = genre;
            selectedRow = null;
            showAlert ("Song info editted", "info");
        }
        clearFields();
    }
});

// edit data
document.querySelector("#song-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("edit")) {
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#title").value = selectedRow.children[0].textContent;
        document.querySelector("#singer").value = selectedRow.children[1].textContent;
        document.querySelector("#genre").value = selectedRow.children[2].textContent;
    }
});

// delete Data
document.querySelector("#song-list").addEventListener("click", (e) => {
    target = e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Song info deleted", "danger");
    }
});