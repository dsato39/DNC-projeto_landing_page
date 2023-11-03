var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var fantasmaEsquerda = window.document.getElementById("fantasma-esquerda")
var fantasmaDireita = window.document.getElementById("fantasma-direita")

function RolarParaDireita () {
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; padding-top:20px"
    setaDireita.style = "display:none"
    fantasmaEsquerda.style = "display:none"
}
function RolarParaEsquerda () {
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
    fantasmaEsquerda.style = "display:flex"
}