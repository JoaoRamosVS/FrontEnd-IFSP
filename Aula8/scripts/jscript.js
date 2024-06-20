/* criar os objetos para os elementos que serão manipulados */
const obj_html = document.querySelector('html')
const obj_sel_cor = document.querySelector('#sel_cor')
const obj_div_cor = document.querySelector('#div_cor')
const obj_bt_desfocar = document.querySelector('#bt_desfocar')
const obj_bt_focar = document.querySelector('#bt_focar')
const obj_img_foco = document.querySelector('#img_foco')
const obj_cb_fundo_escuro = document.querySelector('#cb_fundo_escuro')
const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')

const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

for (obj_rb_fonte of array_rb_fonte) {
    obj_rb_fonte.addEventListener('click', funMudaCorFonte)
}

function funMudaCorFonte () {
    for(obj_rb_fonte of array_rb_fonte){
        if(obj_rb_fonte.checked){
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else {
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }   
}

obj_bt_troca_texto.addEventListener('click', funTrocaTexto)

function funTrocaTexto(){
    if(obj_txt_texto_novo.value != ''){
        obj_div_area_teste.innerHTML = obj_txt_texto_novo.value
    }
    else{
        alert('Digite algo no campo!')
    }
}

/* Adicionar o evento para chamar a atenção */
obj_sel_cor.addEventListener('change', funMudaCorFundo)
obj_cb_fundo_escuro.addEventListener('click', funFundoEscuro)
obj_bt_desfocar.addEventListener('click', funDesfocar)
obj_bt_focar.addEventListener('click', funFocar)

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

function funDesfocar() {
    obj_img_foco.setAttribute('class', obj_bt_desfocar.value)
}

function funFocar() {
    obj_img_foco.setAttribute('class', obj_bt_focar.value)
}


