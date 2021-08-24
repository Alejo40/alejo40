const imagenes = document.querySelectorAll('.img-galeria')
const imageneslight = document.querySelector('.agregar-imagen')
const contenedorlight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('hamburger');

imagenes.forEach(imagen =>{
   imagen.addEventListener('click', ()=>{
       aparecerImagen(imagen.getAttribute('src'))
   })
})

contenedorlight.addEventListener('click', (e)=>{
   if(e.target !== imagenes){
       contenedorlight.classList.toggle('show')
       imageneslight.classList.toggle('showimage')
       hamburguer1.getElementsByClassName.opacity = '1'
   }
})

const aparecerImagen = (imagen)=>{
    imageneslight.src = imagen;
    contenedorlight.classList.toggle('show')
    imageneslight.classList.toggle('showimage')
    hamburguer1.getElementsByClassName.opacity = '0'
}
    
