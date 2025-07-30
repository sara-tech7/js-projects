//method # 1 :using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
    //console.log(question);
    const btn = question.querySelector(".question-btn");
    console.log(btn);
    btn.addEventListener("click", function () {

        question.forEach(function (item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});


//method # 2 : traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (item) {
//     item.addEventListener("click", function (e) {
//         console.log(e.currentTarget.parentElement.parentElement);
//         const question = e.currentTarget.parentElement.parentElement;

//         question.classList.toggle("show-text");

//     });
// });

