function createSelectRange(selectId, start, end) {
    const select = document.getElementById(selectId);
    for (let i = start; i < end; i++) {
        let option = document.createElement("option");
        option.text = i.toString();
        option.value = i.toString();
        select.options.add(option);
    }
}

window.onload = () => {
    createSelectRange("floor", 3, 28);
    createSelectRange("room", 1, 11);
    const dateInput = document.getElementById("datetime");
    dateInput.min = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
};