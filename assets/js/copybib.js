function copy_bibtext(e) {
    // Get the text to copy
    var paper_name = e.parentNode.parentNode.parentNode.id;
    var copyText = document.getElementById(paper_name+"_bibtex").textContent;
    // remove initial tabulation
    var nb_useless_spaces = copyText.search(/\S/)-1; // get the initial number of spaces
    copyText = copyText.split("\n").slice(1); // remove initial empty line; split into lines
    copyText = [...copyText].map((v) => v.substr(nb_useless_spaces) ); // remove the space offset from each line
    copyText = copyText.join("\n"); // join lines into one text

    // Copy the text to clipboard
    navigator.clipboard.writeText(copyText);

    // Alert that the text was copied (temporary show the snackbar)
    var snackbar = document.getElementById("snackbar");
    snackbar.textContent = "BibTex copied!"
    snackbar.className = "show";
    setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
}