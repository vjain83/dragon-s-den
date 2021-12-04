var authorDiv = document.getElementById("author");
var commentDiv = document.getElementById("comment");
var authorTitleInput = document.getElementById("authorTitle");

const choiceChange = (event) => {
  if (event.value === "c") {
    authorDiv.classList.add("hide");
    commentDiv.classList.add("hide");
    authorTitleInput.required = false;
  } else {
    authorDiv.classList.remove("hide");
    commentDiv.classList.remove("hide");
    authorTitleInput.required = true;
  }
};
