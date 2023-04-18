import "./Certifi.css"
function Certifi(){
    const certifications = [
        {
          ano: "2016 - 2018",
          nomeDoCurso: "Capacitação Socioemocional",
          local: "Colégio Objetivo Itapira",
        },
        {
          ano: "2021",
          nomeDoCurso: "Capacitação para trabalho e convivência ",
          local: "Wadhwani Job Ready",
        },
        {
          ano: "2021",
          nomeDoCurso: "Pacote Office 2019",
          local: "SENAC",
        },
        {
            ano: "2020 - 2021",
            nomeDoCurso: "Técnico em Desenvolvimento de Sistemas (Não pude finalizar devido mudança de estado SP-PR)",
            local: "ETEC Coronel Raphael Brandão",
          },
          {
            ano: "2023 - CURSANDO",
            nomeDoCurso: "Engenharia de Software",
            local: "Biopark Educação",
          },
      ];
    
        return(
            <div>
                <div className="ContainerPai">
                     <div className="CertificationsContainer">
                        <h2>Minhas certificações</h2>
                    <ul className="CertificationsList">
                        {certifications.map((certification, index) => (
                    <li key={index}>
                        <span className="CertificationName">{certification.nomeDoCurso}</span>
                         <span className="CertificationYear">{certification.ano}</span>
                         <span className="CertificationLocation">{certification.local}</span>
                    </li>
        ))}
      </ul>
                </div>
    </div>
            </div>
        )


}

export default Certifi