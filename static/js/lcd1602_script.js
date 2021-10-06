var string_1 = document.getElementById("str1");
var string_2 = document.getElementById("str2");

string_1.oninput = function () {
    for (var i = 0; i < 16; i++) {
        if (typeof string_1.value[i] == "undefined") {
            document.getElementById((i + 1).toString()).innerHTML = "";
        } else {
            document.getElementById((i + 1).toString()).innerHTML = string_1.value[i];
        }
    }
    if (string_1.value.length > 16) {
        document.getElementById("first").style.backgroundColor = "red";
    } else {
        document.getElementById("first").style.backgroundColor = "#0ed244";
    }
};

string_2.oninput = function () {
    for (var i = 0; i < 16; i++) {
        if (typeof string_2.value[i] == "undefined") {
            document.getElementById((i + 20).toString()).innerHTML = "";
        } else {
            document.getElementById((i + 20).toString()).innerHTML =
                string_2.value[i];
        }
    }
    if (string_2.value.length > 16) {
        document.getElementById("second").style.backgroundColor = "red";
    } else {
        document.getElementById("second").style.backgroundColor = "#0ed244";
    }
};
