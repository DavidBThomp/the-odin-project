const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey, I'm red!";
para.style.color = "red";

container.appendChild(para);

const heading3 = document.createElement("h3");
heading3.textContent = "I'm a blue h3!";
heading3.style.color = "blue";

container.appendChild(heading3);

const newDiv = document.createElement("div");
newDiv.style.border = "black solid 1px";
newDiv.style.backgroundColor = "pink";

const heading1 = document.createElement("h1");
heading1.textContent = "I'm in a div";
newDiv.appendChild(heading1);

para.textContent = "ME TOO!";
newDiv.appendChild(para);

container.appendChild(newDiv);
