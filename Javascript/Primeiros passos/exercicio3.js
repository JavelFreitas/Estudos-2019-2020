function maisUmTextBox(id) {
    var valores = "";
    var skills = document.getElementById(id);
    if (skills != null) {
        skills = skills.value;
        if (skills.indexOf("Javascript") == -1) {
            valores = false;
        } else { valores = true; }
    } else {
        valores = "Insira um valor na caixa de texto";
    }
    document.getElementById("teste").innerHTML = valores;
}