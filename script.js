function explodeSmiley() {
    const smiley = document.getElementById("smiley");
    const hiddenText = document.getElementById("hiddenText");

    // Change the smiley face to an exploding one
    smiley.textContent = "💥";

    // Show the hidden text or image
    hiddenText.style.display = "block";
}
