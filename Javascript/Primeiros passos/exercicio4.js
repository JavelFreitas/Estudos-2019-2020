function digaIdade(experiencia) {
    var valores = "";
    experiencia = experiencia.value;
    if (experiencia < 0) {
        valores = "Impossible..."    
    } else if (experiencia <= 1) {
        valores = "Iniciante";
    } else if (experiencia <= 3) {
        valores = "Intermediário";
    } else if (experiencia <= 6) {
        valores = "Avançado";
    } else {
        valores = "Jedi Master";
    }
    return valores;
}