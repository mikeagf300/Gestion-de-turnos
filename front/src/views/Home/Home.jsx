import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Home.module.css'; // Asegúrate de que este import esté presente si usas CSS modules

const Home = () => {
    return (
        <div className={styles.homeContainer}> 
            <h1>Home</h1>
            <Carousel data-bs-theme="dark">
                <Carousel.Item interval={1000}>
                    <img
                        className={`d-block w-100 ${styles.carouselImage}`}
                        src='./images/atencionDeUsuarios.png'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className={`d-block w-100 ${styles.carouselImage}`}
                        src='./images/pagoEnLinea.png'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={`d-block w-100 ${styles.carouselImage}`}
                        src='./images/sucursales.png'
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            <div className={styles.infContainer}>
                <h3> Noticias: </h3>

                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis architecto placeat magni explicabo non aut excepturi porro consequuntur facilis iure illo odio consequatur ipsum magnam rerum, perferendis id dolore veniam!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Quod repudiandae commodi, saepe explicabo debitis aspernatur itaque voluptatum alias tenetur nobis unde sunt. Quaerat excepturi, error optio velit ad distinctio itaque!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate assumenda soluta ipsum. Ut, iure. Rem molestiae laudantium dolor, explicabo tempora ducimus doloremque aperiam aspernatur, delectus, voluptatibus voluptate harum necessitatibus illo?
                    </p>
            </div>
        </div>
    );
}

export default Home;