const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

console.log("sara");

toggleBtn.addEventListener("click", function () {

    // console.log(sidebar.classList);

    // if (sidebar.classList.contains("show-sidebar")) {
    //     sidebar.classList.remove("show-sidebar");
    // }
    // sidebar.classList.add("show-sidebar");

    sidebar.classList.toggle("show-sidebar");

});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

