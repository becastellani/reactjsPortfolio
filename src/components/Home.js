import styles from './Home.module.css'
import Logo from './img/instaIcon.png'
import Logo1 from './img/gitIcon.png'
import Logo2 from './img/linkedinIcon.png'

function Inicio (){
        return (
    <div>
    <div class='container' id='container'>
            <p id='nomeprincipal' class='nomeprincipal'>Bernardo Castellani</p>
            <p id='estudante' class='estudante'>Estudante de Engenharia de Software</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id='linha-imagem'>
        <img src={Logo}/> 
        <img src={Logo1}></img>
        <img src={Logo2} ></img>
            </div>  
        
    </div>
    </div> 
        )

}
export default Inicio