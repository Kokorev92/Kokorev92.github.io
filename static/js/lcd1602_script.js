var string_1 = document.getElementById("str1")
var string_2 = document.getElementById("str2")

let on_input_handle = function () {

    let string = ""
    let c = 0

    if (this.id == "str1") {
        string = "first"
        c = 1
    } else if (this.id == "str2") {
        string = "second"
        c = 20
    }

    for (var i = 0; i < 16; i++) {
        if (typeof this.value[i] == "undefined") {
            document.getElementById((i + c).toString()).innerHTML = ""
        } else {
            document.getElementById((i + c).toString()).innerHTML = this.value[i]
        }
    }

    if (this.value.length > 16) {
        document.getElementById(string).style.backgroundColor = "red"
    } else {
        document.getElementById(string).style.backgroundColor = "#7d9f32"
    }
}

string_1.oninput = on_input_handle

string_2.oninput = on_input_handle