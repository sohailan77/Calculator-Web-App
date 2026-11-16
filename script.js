let str = "";

let buttons = document.querySelectorAll("button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (evt) => {

    if (evt.target.dataset.value == "=") {
      str = eval(str);
      document.querySelector("#input").value = str;
    } else if (evt.target.dataset.valueL == "C") {
      str = "";
      document.querySelector("#input").value = str;
    } else {
      // console.log(evt.target);
      str += evt.target.dataset.value;
      document.querySelector("#input").value = str;
    }

  });
});
