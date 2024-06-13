/* criar os objetos para os elementos que serão manipulados */
const obj_html = document.querySelector('html')

const obj_sel_cor = document.querySelector('#sel_cor')
const obj_div_cor = document.querySelector('#div_cor')

const obj_cb_fundo_escuro = document.querySelector('#cb_fundo_escuro')

/* Adicionar o evento para chamar a atenção */
obj_sel_cor.addEventListener('change', funMudaCorFundo);
obj_cb_fundo_escuro.addEventListener('click', funFundoEscuro)


/* Declarar a função para executar as ações */
function funMudaCorFundo() {
    obj_div_cor.setAttribute('class', obj_sel_cor.value)
}

function funFundoEscuro() {
    if(obj_cb_fundo_escuro.checked){
        obj_html.setAttribute('class', obj_cb_fundo_escuro.value)
    }
    else {
        obj_html.removeAttribute('class')
    }
}
