let pluses = document.querySelectorAll(".plus");
let matters = document.querySelectorAll(".matter");
console.log(matters);
pluses.forEach((plus, index) => {
    let check = 0;
    // console.log(plus.parentElement.nextElementSibling);

    plus.addEventListener("click", function () {
        if (check === 0) {
            matters[index].style.display = "block";
            plus.innerText = "-";
            check = 1;
        } else {
            matters[index].style.display = "none";
            plus.innerText = "+";
            check = 0;
        }
    });
});
    