const obj_sel_rede_social = document.querySelector('#sel_rede_social')
const obj_img_rede_social = document.querySelector('#img_rede_social')
const obj_p_rede_social = document.querySelector('#p_rede_social')

const array_img_figuras = document.querySelectorAll('.figuras')
const obj_div_adiciona_figura = document.querySelector("#div_adiciona_figura")
const obj_img_nova = document.createElement('img')
const obj_input_novo = document.createElement('input')

obj_sel_rede_social.addEventListener('change', funMudaFigura)

function funMudaFigura() {
    obj_img_rede_social.setAttribute('src', 'imagens/' + obj_sel_rede_social.value + '.png')
    obj_img_rede_social.setAttribute('alt', 'Logo ' + obj_sel_rede_social.value)
    obj_img_rede_social.setAttribute('title', 'Logo ' + obj_sel_rede_social.value)

    obj_p_rede_social.innerHTML = 'Logo ' + obj_sel_rede_social.value
}

for(obj_img of array_img_figuras) {
    obj_img.addEventListener('click', function() {funAdicionaFigura(this.src, this.alt)})
}

function funAdicionaFigura(src, alt) {
    obj_img_nova.setAttribute('src', src)
    obj_img_nova.setAttribute('alt', alt)
    obj_img_nova.setAttribute('title', alt)

    obj_div_adiciona_figura.appendChild(obj_img_nova)

    obj_input_novo.setAttribute('type', 'text')
    obj_input_novo.setAttribute('disabled', true)
    obj_input_novo.setAttribute('value', alt)
    obj_input_novo.setAttribute('class', 'novo_input')

    obj_div_adiciona_figura.appendChild(obj_input_novo)
}

