import { Container } from "./style";
import logoImage from '../../assets/movie_ticket.svg'

export const Header = () => {
    return(
        <Container>
            <img src={logoImage} alt="logo"/>

            <nav>
              <a href="#movies">Filmes</a>
              <a href="#tvShows">TV Shows</a>
              <a href="#All">All</a>  
            </nav>

        </Container>
    )
}