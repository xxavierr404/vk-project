function getFields() {
    return {
        tower: document.getElementById("tower"),
        floor: document.getElementById("floor"),
        room: document.getElementById("room"),
        datetime: document.getElementById("datetime"),
        comment: document.getElementById("comment")
    };
}

function clearFields() {
    let fields = getFields();
    fields.tower.selectedIndex = 0;
    fields.floor.selectedIndex = 0;
    fields.room.selectedIndex = 0;
    fields.datetime.value = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"));
    fields.comment.value = '';
}

function send() {
    let fields = getFields();
    let json = {
        tower: fields.tower.value,
        floor: fields.floor.value,
        room: fields.room.value,
        datetime: fields.datetime.value,
        comment: fields.comment.value
    }

    console.log(json);
}