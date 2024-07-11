
//DIVISÕES
let feedbackOne = document.querySelector('.feedbacks-one')
let feedbackTwo = document.querySelector('.feedbacks-two')
let feedbackTree = document.querySelector('.feedbacks-tree')

//BOTOES DE TROCA
let trocaOne = document.querySelector('.b1')
let trocaTwo = document.querySelector('.b2')
let trocaTree = document.querySelector('.b3')



//FUNÇÕES DAS TROCAS
    trocaTwo.addEventListener('click', SecondTroca)
    trocaTree.addEventListener('click', ThirdTroca)
    trocaOne.addEventListener('click', firstTroca)

    setInterval(() => {
        setTimeout(() => {
            feedbackOne.style.display = 'flex'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'

            trocaOne.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
        }, 1000);

        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'flex'
            feedbackTree.style.display = 'none'

            trocaOne.style.backgroundColor ='#74727296'
            trocaTwo.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTree.style.backgroundColor = '#74727296'
        }, 7000);

        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'flex'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = 'rgb(228, 113, 36)'
        }, 14000);
    }, 20000);
    
    function firstTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'flex'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'

            trocaOne.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
        }, 100);
    }
    
    function SecondTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'flex'
            feedbackTree.style.display = 'none'

            trocaOne.style.backgroundColor ='#74727296'
            trocaTwo.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTree.style.backgroundColor = '#74727296'
        }, 100);
        
    }
    function ThirdTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'none'
        feedbackTwo.style.display = 'none'
        feedbackTree.style.display = 'flex'

        trocaOne.style.backgroundColor = '#74727296'
        trocaTwo.style.backgroundColor = '#74727296'
        trocaTree.style.backgroundColor = 'rgb(228, 113, 36)'
        }, 100);
    }


    


//ABERTURA  DE SOLICITAÇÃO DE SERVIÇOS
let invisivel = document.querySelector('.invisivel')
let botao = document.querySelector('#btn')
let sair = document.querySelector('.sair')
    botao.addEventListener('click', aberturaModal)
    sair.addEventListener('click', fechaduraModal)

function aberturaModal(){
    invisivel.style.display = 'flex'
}
function fechaduraModal(){
    invisivel.style.display = 'none'
}


//ESCOLHA DOS SERVIÇOS
let opcoes = document.querySelector('#escolha-do-servico')
let servico = document.querySelector('#solicitacao')
let nomeSolicitador = document.querySelector('#nome')
let descricao = document.querySelector('#obs')

function alter(){
    a = opcoes.value
    a = Number(a)
    console.log(a)
    
    if (a === 0){
        alert('Selecione uma das opções validas')
        servico.style.backgroundColor = 'transparent'
        servico.style.color = 'transparent'
        preventDefault()
    }
    else if (a > 0){
        servico.style.backgroundColor = 'rgb(228, 113, 36)'
        servico.style.color = 'white'
        servico.style.cursor = 'pointer'
        if (a === 1) {
            z = 'Formatação de PC'
        }
        else if (a === 2) {
            z = 'Troca de peça'
        }
        else if (a === 3) {
            z = 'Montagem de PC'
        }
        else if (a === 4) {
            z = 'Limpeza interna'
        }  
        else if (a === 5) {
            z = 'Limpeza externa'
        }  
        else if (a === 6) {
            z = 'Instalação de aplicativos'
        }  
        else if (a === 7) {
            z = 'Instalação de impressora'
        }  
        else if (a === 8) {
            z = 'Instalação de pacote office'
        }
        else if (a === 9) {
            z = 'Instalação de repetidor Wi-fi'
        }  
        else if (a === 10) {
            z = 'Visita técnica'
        }  
    }

    servico.addEventListener('click', solicitar)
    function solicitar(){
        let telefone = "5521998303003"
        let assunto = z
        let nome = nomeSolicitador.value
        let observacao = descricao.value

        if(nome === ''){
            nomeSolicitador.style.border = '1px solid red'
            setTimeout(() => {
                nomeSolicitador.style.border = '1px solid #8a8888'
            }, 7000);
            alert("Por favor, Digite seu nome")
            preventDefault()
        }
        else if(observacao === ''){
            var url = "http://wa.me/" + telefone + "?text=" 
            + "*SOLICITAÇÃO DE SERVIÇO*" + "%0a"
            + "" + "%0a"
            + "*Nome:* " + nome +"%0a"
            + "Serviço: " + assunto + "%0a"
            window.open(url).focus()
        }
        else{
            var url = "http://wa.me/" + telefone + "?text=" 
            + "*SOLICITAÇÃO DE SERVIÇO*" + "%0a"
            + " " + "%0a"
            + "*Nome:* " + nome +"%0a"
            + "*Serviço:* " + assunto + "%0a"
            + "*Descrição:* " + observacao +"%0a"
            window.open(url).focus()
        }
    }
}
