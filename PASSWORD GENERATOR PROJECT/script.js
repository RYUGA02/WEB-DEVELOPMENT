const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.getElementById("uppercase");
const lowercaseCheck = document.getElementById("lowercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿×÷‐‑‒";


let password = "";
let passwordLength = 10;
let setCount = 0;
handleSlider();
// set strength circle to grey color
setIndicator("#ccc");


//set passwordLength
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength -min)*100/(max-min)) + "% 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //shadow
    indicator.style.boxShadow =  `0px 0px 12px 1px ${color}`;
}

function genRndInteger(min, max) {  // 0.2 * 20-1 + 1 = 0.2 * 19 + 1 = 3.8 + 1 = Math..floor(4.8) = 4 
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return genRndInteger(0, 9);
}

function generateLowercase() {
    return String.fromCharCode(genRndInteger(97, 123));
}

function generateUppercase() {
    return String.fromCharCode(genRndInteger(65, 91));
}

function generateSymbol() {
    const randNum = genRndInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;

    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if ((hasLower || hasUpper) && (hasNum || hasSym) && passwordLength >= 6) {
        setIndicator("#ff0")
    }
    else {
        setIndicator("#f00")
    }
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "copied";
    } catch (e) {
        copyMsg.innerText = "failed";
    }

    //to make copy wala span visible
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000)
}

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        // or another method
        // Swap array[i] and array[j]
        // [array[i], array[j]] = [array[j], array[i]];
    }
    let str = ""
    array.forEach((el) => { str += el })
    return str;
}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
            console.log(checkCount);
        }
    });

    // special condition
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange)
})

inputSlider.addEventListener('input', (event) => {
    passwordLength = event.target.value;
    handleSlider();
})

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }
})

generateBtn.addEventListener('click', () => {
    //none of the checkbox is selected
    if (checkCount == 0) 
        return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    //Let's start the journey to find new password.

    console.log("Journey has been started!.")
    //remove old password
    password = "";

    //Let's put the stuff mentioned by the checkboxes

    // if(uppercaseCheck.checked){
    //     password += generateUppercase();
    // }

    // if(lowercaseCheck.checked){
    //     password += generateLowercase();
    // }

    // if(numbersCheck.checked){
    //     password += generateRandomNumber();
    // }

    // if(symbolsCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if (uppercaseCheck.checked) 
        funcArr.push(generateUppercase);
    

    if (lowercaseCheck.checked) 
        funcArr.push(generateLowercase);
    

    if (numbersCheck.checked) 
        funcArr.push(generateRandomNumber);
    

    if (symbolsCheck.checked) 
        funcArr.push(generateSymbol);
    

    //compulsory addition
    for (let i = 0; i < funcArr.length; i++) {
        password += funcArr[i]();
    }

    console.log("Compulsory addition done." +password)

    //remaining addition
    for (let i = 0; i < (passwordLength - funcArr.length); i++) {
        let randIndex = genRndInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    console.log("Remaining addition done.")

    //shuffle password
    password = shufflePassword(Array.from(password));
    console.log("shuffle password done." +password)
    
    //show in Ui
    passwordDisplay.value = password;
    console.log("Showing in UI.")
    
    //calculate strength
    calcStrength();

})