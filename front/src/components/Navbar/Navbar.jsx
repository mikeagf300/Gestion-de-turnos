import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const userData = useSelector((state) => state.userActive); // Estado del usuario logueado
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <nav className={styles.navbarContainer}>
            <Link to='/home'> 
                <img
                    src='./images/aquagomez.webp.png'
                    alt='Logo de AquaGómezPura'
                    className={styles.navbarImage} 
                />
            </Link>
           
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Welcome to AquaGómezPura</h1>
            </div>

            <div className={styles.links}>
                {userData ? (
                    // Si el usuario está logueado
                    <>
                        <Link to='/myAppointments'>
                            <p>Mis Turnos</p>
                        </Link>
                        <div className={styles.profile}>
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className={styles.profileImage} />
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="upload"
                                        onChange={handleImageChange}
                                        className={styles.uploadInput}
                                    />
                                    Subir Foto de Perfil
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    // Si el usuario NO está logueado
                    <>
                        <Link to='/'>
                            <p>Entrar</p>
                        </Link>
                        <Link to='/register'>
                            <p>Registro</p>
                        </Link>
                    </>
                )}
                <Link to='/Contact'>
                    <p>Contacto</p>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
