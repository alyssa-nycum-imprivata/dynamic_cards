// Added label and textarea to DOM

const addTextareaToDom = () => {
    return `
        <label for="card textarea">Enter Text:</label>
        <textarea id ="card textarea" name="textarea" rows="1" cols="30"></textarea>
    `
};

const inputTextarea = document.getElementById("textarea");

inputTextarea.innerHTML += addTextareaToDom();


// Added button to Dom

const addButtonToDom = () => {
    return `
        <button id="card button">Create</button>
    `
};

const inputButton = document.getElementById("button");

inputButton.innerHTML += addButtonToDom();

// Added css styling to button

inputButton.style.marginTop = "5px";

inputButton.style.cssFloat = "right";

// Factory funtion to add user input to DOM

