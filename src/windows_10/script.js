function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}




// localstorage start
function save_localstorage_bg(bg) {
    localStorage.setItem("bg", bg);
}
function save_localstorage_color(color) {
    localStorage.setItem("color", color);
}
function save_localstorage_login_key(key) {
    localStorage.setItem("key", key)
}

function get_localstorage(type) {
    return localStorage.getItem(type);
}

function remove_localstorage(key) {
    localStorage.removeItem(key);
}
function clear_localstorage(access) {
    if (access == true) {
        localStorage.clear();
        localStorage.clear();
    }
    else {
        console.log("You try to clear the storage. Place writ true to clear it.");
    }
}
// localstorage end





// design start
storage_bg = "bg_1";
storage_color = "dark";
function design(bg, color) {
    if (bg == "bg_1") {
        document.body.style.backgroundImage = "url(src/img/bg.png)";
        document.getElementById("design_app_main_part_background_image_1").style.boxShadow = "0 0 10px white";
        document.getElementById("design_app_main_part_background_image_2").style.boxShadow = "0 0 0 white";
        storage_bg = "bg_1";
        save_localstorage_bg("bg_1")
    }
    else if (bg == "bg_2") {
        document.body.style.backgroundImage = "url(src/img/bg_2.png)";
        document.getElementById("design_app_main_part_background_image_1").style.boxShadow = "0 0 0 white";
        document.getElementById("design_app_main_part_background_image_2").style.boxShadow = "0 0 10px white";
        storage_bg = "bg_2";
        save_localstorage_bg("bg_2")
    }

    if (color == "dark") {
        document.getElementById("taskbar").style.background = "rgba(23, 23, 23, 0.8)";
        document.querySelector(".start_menu").style.background = "rgba(23, 23, 23, 0.8)";
        document.querySelector(".design_app_top").style.background = "rgba(23, 23, 23, 1)";
        document.querySelector(".design_app_top").style.color = "white";
        document.querySelector(".design_app_top_close_btn").style.backgroundImage = "url('src/img/close_btn.png')";
        document.querySelector(".design_app_main_part").style.background = "rgba(23, 23, 23, 0.8)";
        document.querySelector(".desktop_item_fullscreen").style.background = "rgba(23, 23, 23, 0.8)";
        document.getElementById("start_menu_dashboard_app_design").style.background = "rgba(23, 23, 23, 0.8)";

        document.getElementById("design_app_main_part_Color_color_dark").style.boxShadow = "0 0 10px white";
        document.getElementById("design_app_main_part_Color_color_white").style.boxShadow = "0 0 0 white";
        storage_color = "dark";
        save_localstorage_color("dark")
    }
    else if (color == "white") {
        document.getElementById("taskbar").style.background = "rgba(255, 255, 255, 0.25)";
        document.querySelector(".start_menu").style.background = "rgba(255, 255, 255, 0.25)";
        document.querySelector(".design_app_top").style.background = "rgba(255, 255, 255, 1)";
        document.querySelector(".design_app_top").style.color = "black";
        document.querySelector(".design_app_top_close_btn").style.backgroundImage = "url('src/img/close_btn_black.png')";
        document.querySelector(".design_app_main_part").style.background = "rgba(255, 255, 255, 0.25)";
        document.querySelector(".desktop_item_fullscreen").style.background = "rgba(255, 255, 255, 0.25)";
        document.getElementById("start_menu_dashboard_app_design").style.background = "rgba(255, 255, 255, 0.25)";

        document.getElementById("design_app_main_part_Color_color_dark").style.boxShadow = "0 0 0 white";
        document.getElementById("design_app_main_part_Color_color_white").style.boxShadow = "0 0 10px white";
        storage_color = "white";
        save_localstorage_color("white")
    }
}
// design end






function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds()
        pe = "AM";
        // if (hou === 0) {
        //     hou = 12;
        // }
        // if (hou > 12) {
        //     hou = hou - 12;
        //     pe = "PM";
        // }
        Number.prototype.pad = function(digits) {
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }
        var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
        var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds"];
        var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2)];
        for(var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}
function clock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}




fisrt_start();
function fisrt_start() {
    let get_bg = get_localstorage("bg");
    bg = get_bg;
    design(bg, null);
    let get_color = get_localstorage("color");
    color = get_color;
    design(null, color);
    document.body.style.backgroundSize = "100%";
    if (get_localstorage("key") == null) {
        save_localstorage_login_key("admin");
    }
    login_screen();
}

function login_screen() {
    document.getElementById("main").style.display = "none";
    document.getElementById("login_screen").style.display = "flex";

    clock();
}
document.getElementById("login_screen_login_btn").onclick = function () {
    let login_input = document.getElementById("login_screen_login_input").value;
    if (login_input == "") {
        
    }
    else if (login_input == get_localstorage("key")) {
        document.getElementById("main").style.display = "block";
        document.getElementById("login_screen").style.display = "none";
        document.getElementById("login_screen_login_input").value = "";
        document.getElementById("datetime").remove();
    }
    else {

    }
}
document.getElementById("datetime").onclick = function () {
    clock();
}








// desktop_open_close_sys ist zum steuern der desktop anzeige übersicht
desktop_open_close_access = true;
function desktop_open_close_sys(open_close) {
    if (open_close == "open" && desktop_open_close_access == true) {
        document.querySelector(".desktop").style.display = "block";
    }

    else if (open_close == "close" && desktop_open_close_access == true) {
        document.querySelector(".desktop").style.display = "none";
    }

    else if (open_close == "block") {
        desktop_open_close_access = false;
    }
    else if (open_close == "unblock") {
        desktop_open_close_access = true;
    }
}







// full screen
fullscreen_open = false;
document.getElementById("desktop_item_fullscreen").onclick = function () {
    if (fullscreen_open == false) {
        document.documentElement.requestFullscreen();
        document.getElementById("desktop_item_fullscreen").innerText = "close Fullscreen";
        fullscreen_open = true;
    }
    else {
        document.exitFullscreen();
        document.getElementById("desktop_item_fullscreen").innerText = "Fullscreen";
        fullscreen_open = false;
    }
}

start_menu_open = false;
document.getElementById("windows_10_start_menu_btn").onclick = function () {
    if (start_menu_open == false) {
        desktop_open_close_sys("close");
        document.querySelector(".start_menu").id = "active";
        document.querySelector(".start_menu").style.display = "";
        start_menu_open = true;
    }
    else {
        desktop_open_close_sys("open"),
        document.querySelector(".start_menu").id = "";
        start_menu_open = false;
        
    }
}

// start menu seiten leiste
document.getElementById("seiten_menu_restart_btn").onclick = function () {
    document.getElementById("main").style.display = "none";
    document.getElementById("shutdown_screen").style.display = "block";
    document.getElementById("shutdown_screen_span").innerText = "Restart";

    setTimeout(() => {
        document.body.style.background = "rgb(0, 149, 255)";
    }, 200);

    setTimeout(() => {
        restart();
    }, 1000);
}

document.getElementById("seiten_menu_power_btn").onclick = function () {
    document.getElementById("main").remove();
    document.getElementById("shutdown_screen").style.display = "block";
    document.getElementById("shutdown_screen_span").innerText = "Shutdown";

    document.body.style.background = "rgb(0, 149, 255)";

    setTimeout(() => {
        shutdown()
    }, 1000);
}

async function shutdown() {
    // document.getElementById("shutdown_screen").remove();
    document.getElementById("style").href = "";
    
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    await sleep(2000);

    const para = document.createElement("span");
    para.innerHTML = "goto '../../index.html'";
    document.body.appendChild(para);

    await sleep(500);

    window.location.href = "../../index.html";
}
async function restart() {
    // document.getElementById("shutdown_screen").remove();
    document.getElementById("style").href = "";

    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";

    await sleep(2000);

    para = document.createElement("span");
    para.innerHTML = "starting...";
    document.body.appendChild(para);

    await sleep(2000);
    windows_start();
}
async function windows_start() {
    document.getElementById("shutdown_screen").style.display = "block";

    document.body.style.background = "rgb(0, 149, 255)";
    document.body.removeChild(para);

    document.getElementById("shutdown_screen").style.display = "block";
    document.getElementById("style").href = "style.css";
    let get_bg = get_localstorage("bg");
    bg = get_bg;
    design(bg, null);
    let get_color = get_localstorage("color");
    color = get_color;
    design(null, color);

    document.getElementById("shutdown_screen_span").innerText = "Starting";

    await sleep(1000);

    document.getElementById("shutdown_screen").style.display = "none";
    document.getElementById("main").style.display = "block";

    // document.body.style.backgroundImage = "url(src/img/bg.png)";
    document.body.style.backgroundSize = "100%";

    document.getElementById("windows_10_start_menu_btn").click();
    fisrt_start();
}




// App System




document.getElementById("start_menu_dashboard_app_design").onclick = function () {
    if (desktop_open_close_sys("close") == false) {
        
    } else {
        desktop_open_close_sys("block");
    }

    document.getElementById("design_app").style.display = "block";
    console.log("design_app is open");
    document.getElementById("windows_10_start_menu_btn").click();
}
document.getElementById("design_app_top_close_btn").onclick = function () {
    document.getElementById("design_app").style.display = "none";
    desktop_open_close_sys("unblock");
    desktop_open_close_sys("open");
}

document.getElementById("design_app_main_part_background_image_1").onclick = function () {
    design("bg_1", null);
}
document.getElementById("design_app_main_part_background_image_2").onclick = function () {
    design("bg_2", null);
}

document.getElementById("design_app_main_part_Color_color_dark").onclick = function () {
    design(null, "dark");
}
document.getElementById("design_app_main_part_Color_color_white").onclick = function () {
    design(null, "white");
}