const colorSwap = document.querySelector('#colorful-switch-cb').addEventListener('click', swapColors);
let isLight = false;
let isConsole = false;

function swapColors(){
    isLight = !isLight;
    if (isLight){
        document.getElementById('css').href='../assets/codeblocks-light.css';
        // document.getElementById('consoleCSS').href='./jsconsole_files/console-light.css';
        document.body.style.backgroundColor = "#fffcf2";
        document.body.style.color = "black";
        let preTag = document.querySelectorAll('pre')
        preTag.forEach(element => {
            element.style.border = "1px solid grey";
        })
        document.getElementById('color-mode-text').innerText = "Light Mode";
        // document.getElementById('jsConsole').style="background-color: #fffcf2;"
        // document.getElementById('jsConsole').src="https://jsconsole.com/"
        // document.getElementById('jsConsole').height="200"
        // document.getElementById('consoleCSS').href="../assets/jsconsole/jsconsole_files/console-light.css";
        document.getElementById("jsConsole").contentWindow.document.getElementById("consoleCSS").href = "../assets/jsconsole/jsconsole_files/console-light.css";
    }
    else {
        document.getElementById('css').href='../assets/codeblocks.css';
        document.body.style.backgroundColor = "#17191d";
        document.body.style.color = "white";
        let preTag = document.querySelectorAll('pre')
        preTag.forEach(element => {
            element.style.border = "none";
        })
        document.getElementById('color-mode-text').innerText = "Dark Mode";
        document.getElementById('jsConsole').style="background-color: #17191d;"
        document.getElementById('jsConsole').style="color: white;"
        // document.getElementById('jsConsole').height="0"
    }
}

const buttonConsole = document.querySelector('#colorful-switch-cb-2').addEventListener('click', consoleButton);

function consoleButton(){
    isConsole = !isConsole;
    if (isConsole){
        document.getElementById('console-mode-text').innerText = "Disable Console";
        document.getElementById('jsConsole').src="../assets/jsconsole/jsconsole.html"
        document.getElementById('jsConsole').height="200"
    }
    else {
        document.getElementById('console-mode-text').innerText = "Enable Console";
        document.getElementById('jsConsole').src=""
        document.getElementById('jsConsole').height="0"
    }
}

// window.onload = function() {
//     let myiFrame = document.getElementById("jsConsole");
//     let doc = myiFrame.contentDocument;
//     doc.body.innerHTML = doc.body.innerHTML + '<style>/color: white;/style>';
// }
