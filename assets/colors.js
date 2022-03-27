const colorSwap = document.querySelector('#colorful-switch-cb').addEventListener('click', swapColors);
let isLight = false;

function swapColors(){
    isLight = !isLight;
    if (isLight){
        document.getElementById('css').href='../assets/codeblocks-light.css';
        document.body.style.backgroundColor = "#fffcf2";
        document.body.style.color = "black";
        let preTag = document.querySelectorAll('pre')
        preTag.forEach(element => {
            element.style.border = "1px solid grey";
        })
        document.getElementById('color-mode-text').innerText = "Light Mode";
        document.getElementById('jsConsole').src="https://jsconsole.com/"
        document.getElementById('jsConsole').height="200"
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
        document.getElementById('jsConsole').height="0"
    }
}

window.onload = function() {
    let myiFrame = document.getElementById("jsConsole");
    let doc = myiFrame.contentDocument;
    doc.body.innerHTML = doc.body.innerHTML + '<style>/color: white;/style>';
}
