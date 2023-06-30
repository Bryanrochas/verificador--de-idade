function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano ) {
        window.alert('[ERRO] Verifique os dados a tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) { 
            gênero = 'Homem' 
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21){ 
                img.setAttribute('src', 'homem-adolecente.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                img.setAttribute('src' , 'homem-idoso.png')
            } 
             
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21){
                img.setAttribute('src', )
            } else if (idade < 50) {
               img.setAttribute('src', 'mulher.png')
            } else {
                img.setAttribute('src', 'mulher idosa.png')
            } 
    }
     res.style.textAlign = 'center'
     res.innerHTML = `Detectamos ${gênero} com ${idade} anos de idade.`
     res .appendChild(img)
         
    }

     
    
}
    

            

    
    