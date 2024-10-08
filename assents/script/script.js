//ABRE E FECHA DO CANAL
setTimeout(() => {
    const modal = document.getElementById('canal');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'canal'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}, 3000);

function openModal(){
    const modal = document.getElementById('canal');
    modal.classList.add("abrir");

    modal.addEventListener('click', (e) => {
        if(e.target.id === 'canal'|| e.target.id === 'fechar'){
            modal.classList.remove('abrir')
        }
    })
}
    


//DIVISÕES
let feedbackOne = document.querySelector('.feedbacks-one')
let feedbackTwo = document.querySelector('.feedbacks-two')
let feedbackTree = document.querySelector('.feedbacks-tree')
let feedbackFour = document.querySelector('.feedbacks-four')
let feedbackFive = document.querySelector('.feedbacks-five')

//BOTOES DE TROCA
let trocaOne = document.querySelector('.b1')
let trocaTwo = document.querySelector('.b2')
let trocaTree = document.querySelector('.b3')
let trocaFour = document.querySelector('.b4')
let trocaFive = document.querySelector('.b5')



//FUNÇÕES DAS TROCAS
    trocaOne.addEventListener('click', FirstTroca)
    trocaTwo.addEventListener('click', SecondTroca)
    trocaTree.addEventListener('click', ThirdTroca)
    trocaFour.addEventListener('click', FourthTroca)
    trocaFive.addEventListener('click', FifthTroca)

    setInterval(() => {
        setTimeout(() => {
            feedbackOne.style.display = 'flex'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = '#74727296'
        }, 1000);

        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'flex'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor ='#74727296'
            trocaTwo.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = '#74727296'
        }, 5000);

        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'flex'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = '#74727296'
        }, 9000);

        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'flex'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaFive.style.backgroundColor = '#74727296'
        }, 13000);

        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'flex'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = 'rgb(228, 113, 36)'
        }, 17000);


    }, 20000);


    //------------------------------------------------------------------------------
    function FirstTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'flex'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = '#74727296'
        }, 100);
    }
    
    function SecondTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'flex'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor ='#74727296'
            trocaTwo.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = '#74727296'
        }, 100);
        
    }
    function ThirdTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'flex'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = '#74727296'
        }, 100);
    }

    function FourthTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'flex'
            feedbackFive.style.display = 'none'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = 'rgb(228, 113, 36)'
            trocaFive.style.backgroundColor = '#74727296'
        }, 100);
    }

    function FifthTroca() {
        setTimeout(() => {
            feedbackOne.style.display = 'none'
            feedbackTwo.style.display = 'none'
            feedbackTree.style.display = 'none'
            feedbackFour.style.display = 'none'
            feedbackFive.style.display = 'flex'

            trocaOne.style.backgroundColor = '#74727296'
            trocaTwo.style.backgroundColor = '#74727296'
            trocaTree.style.backgroundColor = '#74727296'
            trocaFour.style.backgroundColor = '#74727296'
            trocaFive.style.backgroundColor = 'rgb(228, 113, 36)'
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
