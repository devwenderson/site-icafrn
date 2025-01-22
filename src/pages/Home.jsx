import { Link } from 'react-router-dom';
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    return (
        <div>
            <section className='section section--green'>
                <div className='section__hero'>
                    <h1 className='hero__title'>ICAF-RN</h1>
                    <p className='hero__paragraph'>
                        Bem-vindos a página do Instituto de Cooperação de Agricultura Familiar do Rio Grande do Norte
                    </p>
                    <Link to={'/sobre-nos/'} className='btn btn-primary'>Conheça-nos</Link>
                </div>
            </section>
        </div>
    )
};

export default Home;