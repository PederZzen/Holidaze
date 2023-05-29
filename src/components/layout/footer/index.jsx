import { Wrapper } from './style'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Wrapper>
            <div>
                <p>&#169; Copyright</p>
                <p>Espen Holm Pedersen</p>

                <div onClick={scrollToTop}>&#8593; Free ride to the top</div>
            </div>
        </Wrapper>
    )
}

export default Footer
