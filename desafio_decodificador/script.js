function criptografar() {
    let texto = document.getElementById("inputText").value;

    // Verifica se o texto contém letras maiúsculas, acentos ou caracteres especiais
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Erro: O texto deve conter apenas letras minúsculas sem acentos ou caracteres especiais.");
        return; // Interrompe a função se o texto não for válido
    }

    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = textoCriptografado;
    
    // Limpa o campo de inserção de texto
    document.getElementById("inputText").value = "";
}

function descriptografar() {
    let texto = document.getElementById("inputText").value;

    // Verifica se o texto contém letras maiúsculas, acentos ou caracteres especiais
    if (!/^[a-z\s]*$/.test(texto)) {
        alert("Erro: O texto deve conter apenas letras minúsculas sem acentos ou caracteres especiais.");
        return; // Interrompe a função se o texto não for válido
    }

    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = textoDescriptografado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}
