import styles from './Home.module.css'
import Logo from './img/instaIcon.png'
import Logo1 from './img/gitIcon.png'
import Logo2 from './img/linkedinIcon.png'
import Logo3 from './img/whatss.png'
import Logo4 from './img/gmaill.png'
function Inicio (){
        return (
    <div>
        <link href="https://fonts.googleapis.com/css?family=Sen&display=swap" rel="stylesheet"></link>
    <div class='container' id='container'>
        <div id='linha-imagem'>
        <a href="https://www.instagram.com/bernardo_castell/"><img src={Logo}/></a>
        <a href="https://github.com/becastellani"><img src={Logo1}></img></a>
        <a href=""><img src={Logo2} ></img></a>
        <a href=""><img src={Logo3} ></img></a>
        <a href=""><img src={Logo4} ></img></a>
            </div>  
        
    </div>
    </div> 
        )

}
export default Inicio