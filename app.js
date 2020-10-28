function check_win() {

    var btns_colors = new Array();

    var btn1 = document.getElementById(1);
    var btn2 = document.getElementById(2);
    var btn3 = document.getElementById(3);
    var btn4 = document.getElementById(4);
    var btn5 = document.getElementById(5);
    var btn6 = document.getElementById(6);
    var btn7 = document.getElementById(7);
    var btn8 = document.getElementById(8);
    var btn9 = document.getElementById(9);

    btns_colors[1] = btn1.style.backgroundColor;
    btns_colors[2] = btn2.style.backgroundColor;
    btns_colors[3] = btn3.style.backgroundColor;
    btns_colors[4] = btn4.style.backgroundColor;
    btns_colors[5] = btn5.style.backgroundColor;
    btns_colors[6] = btn6.style.backgroundColor;
    btns_colors[7] = btn7.style.backgroundColor;
    btns_colors[8] = btn8.style.backgroundColor;
    btns_colors[9] = btn9.style.backgroundColor;

    if ((btns_colors[1] == btns_colors[2] && btns_colors[1] == btns_colors[3]) && (btns_colors[1] != "" && btns_colors[2] != "" && btns_colors[3] != "")) {
        alert(btns_colors[1].toUpperCase() + " Team Wins");
        location.reload();
    }
    else if((btns_colors[4]==btns_colors[5] && btns_colors[4]==btns_colors[6]) && (btns_colors[4]!="" && btns_colors[5]!="" && btns_colors[6]!="")){
        alert(btns_colors[4].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else if((btns_colors[7]==btns_colors[8] && btns_colors[7]==btns_colors[9]) && (btns_colors[7]!="" && btns_colors[8]!="" && btns_colors[9]!="")){
        alert(btns_colors[7].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else if((btns_colors[1]==btns_colors[4] && btns_colors[1]==btns_colors[7]) && (btns_colors[1]!="" && btns_colors[4]!="" && btns_colors[7]!="")){
        alert(btns_colors[1].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else if((btns_colors[3]==btns_colors[6] && btns_colors[3]==btns_colors[9]) && (btns_colors[3]!="" && btns_colors[6]!="" && btns_colors[9]!="")){
        alert(btns_colors[3].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else if((btns_colors[1]==btns_colors[5] && btns_colors[1]==btns_colors[9]) && (btns_colors[1]!="" && btns_colors[5]!="" && btns_colors[9]!="")){
        alert(btns_colors[1].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else if((btns_colors[3]==btns_colors[5] && btns_colors[3]==btns_colors[7]) && (btns_colors[3]!="" && btns_colors[5]!="" && btns_colors[7]!="")){
        alert(btns_colors[3].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else if((btns_colors[2]==btns_colors[5] && btns_colors[2]==btns_colors[8]) && (btns_colors[2]!="" && btns_colors[5]!="" && btns_colors[8]!="")){
        alert(btns_colors[2].toUpperCase()+ " Team Wins");
        location.reload();
    }
    else{
        var x = document.cookie.split("=");
        if(parseInt(x[1])==8){
            alert("No One Wins");
            location.reload();
        }
    }

}

function run(id) {

    reset();

    var x = document.cookie.split("=");

    if (x !="") {
        x[1] = parseInt(x[1]) + 1;
    }
    else {
        x[0] = 0;
        x[1] = 0;
    }
    var btn = document.getElementById(id);

    if (parseInt(x[1]) % 2 == 0) {
        btn.style["background-color"] = "blue";
        btn.style["color"] = "white";
        btn.textContent = "O";

    }
    else {
        btn.style["background-color"] = "red";
        btn.style["color"] = "white";
        btn.textContent = "X";
    }

    document.cookie = "PHPSESSONID = " + x[1] + ";path=/;";
    console.log(x);
    check_win();
}

function reset() {
    var x = document.cookie.split("=");
    if (x[1] == 8) {
        document.cookie = "PHPSESSONID=0; expires=Thu, 01 Jan 2020 00:00:00 UTC; path=/;";
        location.reload();
    }

}