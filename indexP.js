const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}

function check(){
    const value = input.value;
    const reverse = reverseString(value);
    alert(reverse)

    if (value === reverse){
        alert("P A L A N D R O M E")
    } else {
        alert("not today!")
    }

    input.value = ""
}