let count = 0;
//set initial then count
const value = document.querySelector("#value"); //id selector for span
const btns = document.querySelectorAll(".btn"); // class selectors for button

btns.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const types = e.currentTarget.classList;
        if (types.contains('increase')) {
            count++;
        }
        else if (types.contains('decrease')) {
            count--;
        }
        else { //for reset state
            count = 0;
        }
        if (count > 0) { value.style.color = "green"; } //styling span having counter value 
        if (count < 0) { value.style.color = "red"; }
        if (count === 0) { value.style.color = "black"; }

        value.textContent = count;
    });
});









// let count = 0;
//
// const value = document.querySelector("#value");//id selector;
// const btns = document.querySelectorAll(".btn");//class selector

// btns.forEach(function (item) {
//     item.addEventListener('click', function (e) {
//         const styles = e.currentTarget.classList;
//         if (styles.contains('decrease')) {
//             count--;
//         }
//         else if (styles.contains('increase')) {
//             count++;
//         }
//         else {
//             count = 0;
//         }
//         if (count > 0) {
//             value.style.color = "green"; //styling span
//         }
//         if (count < 0) {
//             value.style.color = "red";
//         }
//         if (count === 0) {
//             value.style.color = "#222"
//         }
//         value.textContent = count;
//     });
// }
// );





