function showSkilss() {
    let divId = $("#expContent")

    if (divId.attr("class") == "normal") {
        divId.attr("class", "hiddenSkillsContent")

    } else {
        divId.attr("class", "normal")

    }
}