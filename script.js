//cada parte do curriculo
var pag1 = document.querySelector('.pag-1')
var pag2 = document.querySelector('.pag-2')
var pag3 = document.querySelector('.pag-3')
var pag4 = document.querySelector('.pag-4')
var pag5 = document.querySelector('.pag-5')
var pag6 = document.querySelector('.pag-6')
var pag7 = document.querySelector('.pag-7')

//botoes
var btn_contatos = document.getElementById('btn-contatos')
var btn_projetos = document.getElementById('btn-projetos')
var btn_formacao = document.getElementById('btn-formacao')
var btn_idiomas = document.getElementById('btn-idiomas')
var btn_cursos = document.getElementById('btn-cursos')
var btn_premios = document.getElementById('btn-premios')
var btn_voluntarios = document.getElementById('btn-voluntarios')

function carregar(valor) {
    if (valor == undefined || valor == "") {
        localStorage.setItem("pag", '1')
    }else{
        localStorage.setItem("pag", `${valor}`)
    }
    valor = localStorage.getItem("pag")

    if (valor == "1") {
        btn_contatos.classList.add('button-select')
        pag1.classList.remove('pag')

        pag2.classList.add('pag')
        pag3.classList.add('pag')
        pag4.classList.add('pag')
        pag5.classList.add('pag')
        pag6.classList.add('pag')
        pag7.classList.add('pag')

        btn_projetos.classList.remove('button-select')
        btn_formacao.classList.remove('button-select')
        btn_idiomas.classList.remove('button-select')
        btn_cursos.classList.remove('button-select')
        btn_premios.classList.remove('button-select')
        btn_voluntarios.classList.remove('button-select')
    } else if (valor == "2") {
        btn_projetos.classList.add('button-select')
        pag2.classList.remove('pag')

        pag1.classList.add('pag')
        pag3.classList.add('pag')
        pag4.classList.add('pag')
        pag5.classList.add('pag')
        pag6.classList.add('pag')
        pag7.classList.add('pag')

        btn_contatos.classList.remove('button-select')
        btn_formacao.classList.remove('button-select')
        btn_idiomas.classList.remove('button-select')
        btn_cursos.classList.remove('button-select')
        btn_premios.classList.remove('button-select')
        btn_voluntarios.classList.remove('button-select')
    } else if (valor == "3") {
        btn_formacao.classList.add('button-select')
        pag3.classList.remove('pag')

        pag1.classList.add('pag')
        pag2.classList.add('pag')
        pag4.classList.add('pag')
        pag5.classList.add('pag')
        pag6.classList.add('pag')
        pag7.classList.add('pag')

        btn_contatos.classList.remove('button-select')
        btn_projetos.classList.remove('button-select')
        btn_idiomas.classList.remove('button-select')
        btn_cursos.classList.remove('button-select')
        btn_premios.classList.remove('button-select')
        btn_voluntarios.classList.remove('button-select')
    } else if (valor == "4") {
        btn_idiomas.classList.add('button-select')
        pag4.classList.remove('pag')

        pag1.classList.add('pag')
        pag2.classList.add('pag')
        pag3.classList.add('pag')
        pag5.classList.add('pag')
        pag6.classList.add('pag')
        pag7.classList.add('pag')

        btn_contatos.classList.remove('button-select')
        btn_projetos.classList.remove('button-select')
        btn_formacao.classList.remove('button-select')
        btn_cursos.classList.remove('button-select')
        btn_premios.classList.remove('button-select')
        btn_voluntarios.classList.remove('button-select')
    } else if (valor == "5") {
        btn_cursos.classList.add('button-select')
        pag5.classList.remove('pag')

        pag1.classList.add('pag')
        pag2.classList.add('pag')
        pag3.classList.add('pag')
        pag4.classList.add('pag')
        pag6.classList.add('pag')
        pag7.classList.add('pag')

        btn_contatos.classList.remove('button-select')
        btn_projetos.classList.remove('button-select')
        btn_formacao.classList.remove('button-select')
        btn_idiomas.classList.remove('button-select')
        btn_premios.classList.remove('button-select')
        btn_voluntarios.classList.remove('button-select')
    } else if (valor == "6") {
        btn_premios.classList.add('button-select')
        pag6.classList.remove('pag')

        pag1.classList.add('pag')
        pag2.classList.add('pag')
        pag3.classList.add('pag')
        pag4.classList.add('pag')
        pag5.classList.add('pag')
        pag7.classList.add('pag')

        btn_contatos.classList.remove('button-select')
        btn_projetos.classList.remove('button-select')
        btn_formacao.classList.remove('button-select')
        btn_idiomas.classList.remove('button-select')
        btn_cursos.classList.remove('button-select')
        btn_voluntarios.classList.remove('button-select')
    } else if (valor == "7") {
        btn_voluntarios.classList.add('button-select')
        pag7.classList.remove('pag')

        pag1.classList.add('pag')
        pag2.classList.add('pag')
        pag3.classList.add('pag')
        pag4.classList.add('pag')
        pag5.classList.add('pag')
        pag6.classList.add('pag')

        btn_contatos.classList.remove('button-select')
        btn_projetos.classList.remove('button-select')
        btn_formacao.classList.remove('button-select')
        btn_idiomas.classList.remove('button-select')
        btn_cursos.classList.remove('button-select')
        btn_premios.classList.remove('button-select')
    }
}