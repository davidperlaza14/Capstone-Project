import React from 'react';
import '../stylesheets/Template.css'
import logohbtn from '../images/hbtnbycd_logo.fw.png'

export function Template() {
    return (
        <>
            {/* SECCION ENCABEZADO*/}
            <div class="contenedor-header">
                <header>
                    <div class="logo">
                        <a href="#">//Coderise</a>
                    </div>
                    <nav id="nav">
                        <ul>
                            <li><a href="#inicio" onclick="seleccionar()">HOME</a></li>
                            <li><a href="#sobremi" onclick="seleccionar()">ABOUT US</a></li>
                            <li><a href="#skills" onclick="seleccionar()">SKILLS</a></li>
                            <li><a href="#curriculum" onclick="seleccionar()">OUR HOLBIES </a></li>
                            <li><a href="#portfolio" onclick="seleccionar()">TEAM CODERISE</a></li>
                            <li><a href="#contacto" onclick="seleccionar()">CONTACT</a></li>
                        </ul>
                    </nav>
                    <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </header>
            </div>


            {/* SECCION INICIO*/}
            <section id="inicio" class="inicio">
                <div class="contenido-banner">
                    <h1>Holberton talent hub</h1>
                    <p>Is an application designed by Coderise to facilitate the search for human talent with extensive
                        management of tools used in Software development and Soft Skills. Companies and recruiters interested in
                        hiring staff for their work teams will be able to find the ideal staff in this application. </p>
                    <div class="contenedor-img" />

                </div>
            </section>

            {/* FOOTER SECTION*/}

            <footer>
                <div class="redes">
                    {/*<a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-linkedin"></i></a> */}
                    <img
                        src={logohbtn}
                        className='logo'
                        alt='Logo'
                    />

                </div>
            </footer>



        </>
    );
}
