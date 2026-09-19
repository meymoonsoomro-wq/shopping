function addItem() {

    var item = document.getElementById("item");
    var value = item.value;

    if (value == "") {
        item.style.border = "2px solid red";
        return;
    }

    item.style.border = "1px solid black";

    var li = document.createElement("li");

    li.innerHTML = value;

    li.onclick = function () {
        li.style.color = "red";
    };

    document.getElementById("list").appendChild(li);

    item.value = "";
}