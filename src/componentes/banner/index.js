import './Banner.css'

function Banner() {
    // JSX = é como o react trabalha, de forma visual e escrita parecida com HTML. É como ele lê e interpreta no DOM
    return(
    <header className="banner">
        <img src="/img/banner.png" alt="O banner principal da página da Organo"/>
    </header>
    )
}

export default Banner