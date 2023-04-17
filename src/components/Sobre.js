import Logo from './img/berna.png'
function Sobre(){
        return(
<div>
            <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet"></link>
    <div class='container2' id="container2">
             <div class="p-4"></div>
            <div class="textoSobre" id="textoSobre">
                <h1>Sobre Mim</h1>
            </div>

                <div class="p-3"></div>
                
            <div class="grid-container">  
                <div class="imagem">
                <img src={Logo}></img>
                </div>

                <div class="p-3"></div>
                        
            
            <div class="grid-item"><p>Olá, meu nome é Bernardo e sou um estudante de engenharia de software de 17 anos que tem uma paixão por programação desde os 13 anos. Tudo começou quando ganhei meu primeiro Arduino de presente do meu pai. Desde então, eu tenho explorado diferentes áreas da programação e me apaixonei pelo desafio de criar soluções para problemas complexos.</p>
            <br></br>
            <p>Estou animado para continuar aprendendo e desenvolvendo minhas habilidades em engenharia de software, e espero ter a oportunidade de aplicar minhas habilidades em projetos desafiadores e empolgantes no futuro.</p>
            </div>

            </div>
    </div>
            
            
    
</div>
        )
}

export default Sobre