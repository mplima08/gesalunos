function init(){
    getNavbar()
    getTipos()
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getTipos(){
    const tipos = document.getElementById('tipo')
    fetch('http://localhost:3000/formdata')
    .then(res => res.json())
    .then(data => {
        for(let i=0; i<data.lenght; i++){
            const op = `<option value"${data[i].idtipo}">${data[i].designacao}</option>`
            tipos.innerHTML += op
        }
    })
    .catch()

}


function getData() {

    const tipo = document.getElementById ('tipo').value
    if(tipo=='')
        alert('Tem de inserir um tipo.')
    else
        console.log(tipo)

    const email = document.getElementById ('email').value
    if(email=='')
        alert('Tem de inserir um email.')
    else
        console.log(email)

        const telem=document.getElementById('telem').value
        if(telem=='')
            alert('Tem de indicar um telemóvel.')
        else {
            let i = 0
        for(i; i<telem.length; i++){
            let c = telem.charAt(i)
            console.log(c)
        if(isNaN(c)){
            console.log('número inválido')
            break
        }       
    }
        console.log(i)
        if(i == telem.length){
            const telemInt = parseInt(telem)
            console.log(telemInt)
        }
    const morada_rua = document.getElementById ('morada_rua').value
    if(morada_rua=='')
        alert('Tem de inserir uma morada.')
    else
        console.log(morada_rua)

    const morada_num = document.getElementById ('morada_num').value
    if(morada_num=='')
        alert('Tem de inserir o número da porta.')
    else
        console.log(morada_num)

    const nome = document.getElementById ('nome').value
    if(nome=='')
        alert('Tem de inserir um nome.')
    else
        console.log(nome)

    const dnasc = document.getElementById('dnasc').value
    if(dnasc=='')
        alert ('Tem de inserir uma data de nascimento.')
    else
        console.log(dnasc)

}
//criar objeto com os dados recolhidos no form

let dadosutilizador = {
    nomeutilizador : nome,
    moradarua : morada_rua,
    moradanumero : morada_num,
    datanascimento : dnasc,
    telemovel : telem,
    email : email,
    idtipo = tipo
}

//criar um json do objeto

let jsonDados = JSON.stringify(dadosutilizador)

console.log(jsonDados)

//preparar pedido
const options = {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json'
    },
    body: jsonDados
}

fetch ('http://localhost:3000/utilizador', options)
.then (res => res.json())
.then (res => alert(res))
.catch((err) => {
    alert('Ocorreu um erro com o pedido')
})


}