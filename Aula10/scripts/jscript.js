const obj_num_largura = document.querySelector('#num_largura')
const obj_num_altura = document.querySelector('#num_altura')
const obj_div_poligono = document.querySelector('#div_poligono')
const obj_p_perimetro = document.querySelector('#p_perimetro')
const obj_div_modal = document.querySelector('#div_modal')
const obj_btn_fechar = document.querySelector('#p_fechar span')
const obj_img_modal = document.querySelector('#img_modal')
const obj_p_modal = document.querySelector('#p_modal')

const array_titulos = document.querySelectorAll('.titulo')
const array_imagens = document.querySelectorAll('#linguagens img')

obj_num_largura.addEventListener('change', funRedimensionaPoligono)
obj_num_altura.addEventListener('change', funRedimensionaPoligono)
obj_btn_fechar.addEventListener('click', funFechaModal)

for (obj_titulo of array_titulos) {
    obj_titulo.addEventListener('click', function() { funExibeTexto(this) })
}

for (img_linguagem of array_imagens) {
    img_linguagem.addEventListener('click', function() { funExibeModal(this.src, this.alt)})
}

function funRedimensionaPoligono(){
    if(obj_num_largura.value < 50 || obj_num_largura.value > 100
      || obj_num_altura.value < 50 || obj_num_altura.value > 100) {
        alert('Valores inválidos')
    }
    else {
        obj_div_poligono.style.width = obj_num_largura.value + 'px'
        obj_div_poligono.style.height = obj_num_altura.value + 'px'
        
        let areaPoligono = obj_num_altura.value * obj_num_largura.value
        obj_div_poligono.innerHTML = 'Área: ' + areaPoligono + 'px'

        // ou parseInt(objtaltaltal) para converter para número sem erros
        let perimetroPoligono = (obj_num_altura.value * 2) + (obj_num_largura.value * 2)
        obj_p_perimetro.innerHTML = 'Perímetro: ' + perimetroPoligono + 'px'
    }
}

function funExibeTexto(obj_titulo) {
    obj_child = obj_titulo.querySelector('.texto')
    if(obj_child.style.display == 'flex') {
        obj_child.style.display = 'none'
    }
    else{
        obj_child.style.display = 'flex'
    }
}

function funExibeModal(src, alt) {
    obj_img_modal.setAttribute('src', src)
    obj_img_modal.setAttribute('alt', alt)
    obj_img_modal.setAttribute('title', alt)

    obj_p_modal.innerHTML = alt
    obj_div_modal.style.display = 'block'
}

function funFechaModal() {
    obj_div_modal.style.display = 'none'
}