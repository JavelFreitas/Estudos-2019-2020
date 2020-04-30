function retornaSexo(sexo) {
    if(sexo == "M"){
        return "Masculino";
    }else if(sexo == "F"){
        return "Feminino";
    }else{
        return "Outro";
    }
}

function retornaSexoSwitch(sexo){
    switch (sexo){
        case 'M':
            return "Masculino";
        case "F":
            return "Feminino";
        default:
            return "Outro";
    }
}

function ternario(sexo){
    return sexo==="M" ? "Masculino":"Nao masculino";
}