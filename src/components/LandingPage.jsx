import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import '../App.css';

// IMPORTACIÓN DE IMÁGENES (Asegúrate de mantener tus rutas)
import mobileImg1 from '../assets/celular_1.jpg';
import mobileImg2 from '../assets/celular_2.jpg';
import dashboardMockup from '../assets/dashboard.png';
import kodecaMockup from '../assets/kodeca_dashboard.png';
import logoLibClass from '../assets/libclass_logo.png';
import logoKodeca from '../assets/kodeca_logo.png';
import logoPrincipal from '../assets/tucolegiodigital4.png';

const LandingPage = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = 'service_h2ax8qm';
        const TEMPLATE_ID = 'template_qy03r5k';
        const PUBLIC_KEY = 'fW_Oi6JouzuwMyLft';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setSent(true);
                setLoading(false);
                form.current.reset();
                setTimeout(() => setSent(false), 5000);
            }, (error) => {
                console.error('Error:', error.text);
                alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.");
                setLoading(false);
            });
    };

    // Variantes de animación para reutilizar
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div style={{ fontFamily: "'Inter', 'Montserrat', sans-serif", backgroundColor: '#f8f9fa' }}>

            <title>Tu Colegio Digital | El Ecosistema Escolar Definitivo</title>
            <meta name="description" content="Descubre Tu Colegio Digital. Gestión académica (libClass), recaudación financiera (Kódeca), Inteligencia Artificial para docentes y seguimiento GPS de furgones escolares." />
            <meta name="keywords" content="gestión escolar, software colegios, libClass, Kodeca, Inteligencia artificial educación, seguimiento furgón escolar, GPS colegios, Decreto 67, MINEDUC" />
            <html lang="es-CL" />
            <link rel="canonical" href="https://www.tucolegiodigital.cl/" />

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white bg-opacity-90 shadow-sm fixed-top px-3 py-3" style={{ backdropFilter: 'blur(10px)' }}>
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img
                            src={logoPrincipal}
                            alt="Logo Tu Colegio Digital"
                            style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
                        />
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center fw-medium">
                            <li className="nav-item me-3"><button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('ecosistema')}>El Ecosistema</button></li>
                            <li className="nav-item me-3"><button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('innovacion')}>Innovación</button></li>
                            <li className="nav-item me-3"><button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('cumplimiento')}>Normativa</button></li>
                            <li className="nav-item me-3"><button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('proposito')}>Nosotros</button></li>
                            <li className="nav-item me-4"><button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('contacto')}>Contacto</button></li>
                            <li className="nav-item dropdown mt-2 mt-lg-0">
                                <button className="btn btn-outline-primary fw-bold px-4 rounded-pill shadow-sm dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-box-arrow-in-right me-2"></i> Acceso Clientes
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-4 mt-2" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item py-2 fw-medium d-flex align-items-center" href="https://libclass.cl" target="_blank" rel="noopener noreferrer"><img src={logoLibClass} alt="libClass" style={{ height: '24px', width: 'auto' }} className="me-3" /> Portal Académico</a></li>
                                    <li><hr className="dropdown-divider my-1" /></li>
                                    <li><a className="dropdown-item py-2 fw-medium d-flex align-items-center" href="https://kodeca.cl" target="_blank" rel="noopener noreferrer"><img src={logoKodeca} alt="Kódeca" style={{ height: '24px', width: 'auto' }} className="me-3" /> Portal Financiero</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '140px', backgroundColor: '#f8f9fa' }}>
                <div className="position-absolute top-0 end-0 translate-middle-y rounded-circle bg-primary opacity-10 blur-circle" style={{ width: '800px', height: '800px', zIndex: 0, filter: 'blur(80px)' }}></div>

                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="row align-items-center">
                        <motion.div
                            className="col-lg-6 text-center text-lg-start pe-lg-5"
                            initial="hidden" animate="visible" variants={fadeRight}
                        >
                            <span className="badge bg-white text-dark px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide border shadow-sm" style={{ zIndex: 10, position: 'relative' }}>
                                <i className="bi bi-shield-fill-check text-success me-2 fs-6"></i>
                                100% Digital, Seguro y Alineado a MINEDUC
                            </span>
                            <h1 className="display-4 fw-bold text-dark mb-4 hero-title position-relative" style={{ lineHeight: '1.1', zIndex: 10 }}>
                                El cerebro y el corazón de tu colegio, <span style={{ color: '#2b4492' }}>en un solo ecosistema.</span>
                            </h1>
                            <p className="lead text-secondary mb-5 fs-5">
                                Conecta a docentes, alumnos y apoderados en tiempo real. Olvídate de la doble digitación sincronizando el <strong>control académico (libClass)</strong> con tu <strong>recaudación online (Kódeca)</strong>.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hero-btn" onClick={() => scrollToSection('contacto')}>
                                    Agendar Demostración
                                </button>
                                <button className="btn btn-white bg-white btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm border hero-btn-alt text-dark" onClick={() => scrollToSection('ecosistema')}>
                                    Conocer Productos
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="col-lg-6 mt-5 mt-lg-0 position-relative"
                            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="bg-white p-2 rounded-4 shadow-xl border position-relative z-2">
                                <img src={dashboardMockup} alt="Interfaz de libClass" className="img-fluid rounded-3" />
                            </div>
                            <motion.div
                                className="position-absolute bottom-0 start-0 translate-middle-x mb-5 ms-5 p-3 rounded-4 shadow-lg border z-3 d-none d-md-block glass-card"
                                style={{ maxWidth: '250px' }}
                                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            >
                                <div className="d-flex align-items-center mb-2">
                                    <div className="bg-success text-white rounded-circle p-2 me-2 shadow-sm"><i className="bi bi-check-lg"></i></div>
                                    <h6 className="mb-0 fw-bold text-dark">Pago Recibido</h6>
                                </div>
                                <p className="small text-muted mb-0">Matrícula pagada vía Mercado Pago con Kódeca.</p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LOS 2 MOTORES (PRODUCTOS) */}
            <section id="ecosistema" className="py-5 bg-white">
                <div className="container py-5">
                    <motion.div className="text-center mb-5 pb-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
                        <h2 className="fw-bold text-dark display-5">Dos plataformas, un solo propósito</h2>
                        <p className="text-muted fs-5">Sistemas diseñados por expertos para resolver los problemas reales de los colegios.</p>
                    </motion.div>

                    {/* libClass ROW */}
                    <div className="row align-items-center mb-5 pb-5 border-bottom">
                        <motion.div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-book-half fs-1 text-primary me-3"></i>
                                <h2 className="fw-bold mb-0" style={{ color: '#4e73df' }}>libClass</h2>
                            </div>
                            <h4 className="fw-bold mb-3">El Corazón Académico</h4>
                            <p className="text-muted fs-5 mb-4">La herramienta definitiva para UTP y Docentes. Libera a tus profesores del papeleo para que se dediquen a lo que mejor saben hacer: enseñar.</p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-3 d-flex"><i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i> <span><strong>Portal de Notas:</strong> Cálculo automático y reportes dinámicos.</span></li>
                                <li className="mb-3 d-flex"><i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i> <span><strong>Libro de Clases Digital:</strong> Control de asistencia en segundos y sin errores.</span></li>
                                <li className="d-flex"><i className="bi bi-check-circle-fill text-primary me-3 fs-5"></i> <span><strong>Certificados Online:</strong> Descarga inmediata de documentación oficial.</span></li>
                            </ul>
                        </motion.div>
                        <motion.div className="col-lg-6 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
                            <div className="image-hover-wrapper">
                                <img src={dashboardMockup} alt="libClass Dashboard" className="img-fluid rounded-4 shadow-lg border" />
                            </div>
                        </motion.div>
                    </div>

                    {/* KÓDECA ROW */}
                    <div className="row align-items-center pt-3">
                        <motion.div className="col-lg-6 order-2 order-lg-1 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}>
                            <div className="image-hover-wrapper">
                                <img src={kodecaMockup || dashboardMockup} alt="Kódeca Dashboard" className="img-fluid rounded-4 shadow-lg border" style={{ filter: kodecaMockup ? 'none' : 'hue-rotate(150deg)' }} />
                            </div>
                        </motion.div>
                        <motion.div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 ps-lg-5" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeLeft}>
                            <div className="d-flex align-items-center mb-3">
                                <i className="bi bi-wallet-fill fs-1 text-success me-3"></i>
                                <h2 className="fw-bold mb-0 text-dark">Kódeca</h2>
                            </div>
                            <h4 className="fw-bold mb-3">El Cerebro Financiero</h4>
                            <p className="text-muted fs-5 mb-4">Moderniza la administración, elimina las filas y recauda de forma automática. Un portal diseñado para la tranquilidad del sostenedor y la comodidad del apoderado.</p>
                            <ul className="list-unstyled mb-4">
                                <li className="mb-3 d-flex"><i className="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span><strong>Matrículas 100% Online:</strong> Fichas y contratos digitales.</span></li>
                                <li className="mb-3 d-flex"><i className="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span><strong>Pagos con Tarjeta:</strong> Integración nativa con Mercado Pago y Webpay.</span></li>
                                <li className="d-flex"><i className="bi bi-check-circle-fill text-success me-3 fs-5"></i> <span><strong>Panel de Cobranza:</strong> Control de aranceles, becas y morosidad en tiempo real.</span></li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* INNOVACIÓN */}
            <section id="innovacion" className="py-5" style={{ backgroundColor: '#f0f4fc' }}>
                <div className="container py-5">
                    <motion.div className="text-center mb-5 pb-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="badge bg-warning text-dark px-3 py-2 rounded-pill mb-3 fw-bold fs-6 shadow-sm border border-warning">
                            <i className="bi bi-stars me-1"></i> Herramientas del futuro, hoy
                        </span>
                        <h2 className="fw-bold text-dark display-5 mb-3">Más allá del libro de clases</h2>
                        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '800px' }}>
                            Destaca entre los colegios de tu región. Tu Colegio Digital incluye módulos exclusivos que resuelven los dolores más profundos de tu comunidad educativa.
                        </p>
                    </motion.div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { icon: 'bi-cpu-fill', color: 'primary', title: 'Asistente de Planificación con IA', desc: 'Nuestro motor cognitivo genera borradores de pruebas y guías alineadas al currículum en segundos, listas para imprimir en PDF.' },
                            { icon: 'bi-bus-front-fill', color: 'success', title: 'Seguimiento Logístico del Furgón', desc: 'App con seguimiento GPS en tiempo real. Permite que el colegio y los apoderados sepan exactamente dónde están los estudiantes.' }
                        ].map((item, index) => (
                            <motion.div className="col-lg-6" key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.2 }}>
                                <div className="card h-100 border-0 shadow-sm rounded-4 p-5 feature-card bg-white text-center hover-lift">
                                    <div className={`bg-${item.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4`} style={{ width: '90px', height: '90px' }}>
                                        <i className={`bi ${item.icon} fs-1 text-${item.color}`}></i>
                                    </div>
                                    <h3 className="fw-bold mb-3">{item.title}</h3>
                                    <p className="text-muted fs-5 mb-0">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECCIÓN: CUMPLIMIENTO MINEDUC */}
            <section id="cumplimiento" className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <div className="container py-5">
                    <motion.div className="text-center mb-5 pb-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3 fw-bold fs-6 shadow-sm">
                            <i className="bi bi-shield-lock-fill me-1"></i> Cero Multas, Cero Estrés
                        </span>
                        <h2 className="fw-bold text-dark display-6 mb-3">Blindados ante la Superintendencia</h2>
                        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '800px' }}>
                            Diseñamos nuestros sistemas para automatizar el cumplimiento normativo. Protege tu subvención y permite que tu equipo directivo duerma tranquilo.
                        </p>
                    </motion.div>

                    <div className="row g-4 justify-content-center">
                        {[
                            { icon: 'bi-fingerprint', color: 'primary', title: 'Firma Electrónica', desc: 'Cumplimiento total de la Circular N°30. Integración de doble factor dando validez legal absoluta a las actas.' },
                            { icon: 'bi-clipboard2-check-fill', color: 'success', title: 'Decreto 67', desc: 'Módulo integrado para definir evaluaciones formativas o sumativas, generando la trazabilidad que exige el Ministerio.' },
                            { icon: 'bi-database-check', color: 'danger', title: 'Auditoría Inmutable', desc: 'Un registro inalterable graba cada acción. Trazabilidad de IP y dispositivo para responder ante cualquier fiscalización.' }
                        ].map((item, index) => (
                            <motion.div className="col-lg-4 col-md-6" key={index} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: index * 0.2 }}>
                                <div className="card h-100 border-0 shadow-sm rounded-4 p-4 feature-card bg-light hover-lift">
                                    <div className={`bg-${item.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4`} style={{ width: '70px', height: '70px' }}>
                                        <i className={`bi ${item.icon} fs-2 text-${item.color}`}></i>
                                    </div>
                                    <h4 className="fw-bold mb-3">{item.title}</h4>
                                    <p className="text-muted mb-0">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NUEVO DISEÑO: NOSOTROS / PROPÓSITO */}
            <section id="proposito" className="py-5 position-relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
                <div className="position-absolute top-50 start-0 translate-middle-y rounded-circle bg-primary opacity-10 blur-circle d-none d-lg-block" style={{ width: '600px', height: '600px', filter: 'blur(80px)', zIndex: 0 }}></div>

                <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
                    <motion.div className="text-center mb-5 pb-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide border border-primary border-opacity-25">
                            <i className="bi bi-geo-alt-fill me-1"></i> Desde Puerto Varas para todo Chile
                        </span>
                        <h2 className="fw-bold text-dark display-5 mb-3">Más que código, <span style={{ color: '#4e73df' }}>somos tu equipo.</span></h2>
                        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '800px' }}>
                            En Tu Colegio Digital creemos que la tecnología debe ser un puente, no un obstáculo. Nuestro objetivo es liberar a tu comunidad educativa de las tareas manuales para que se enfoquen en lo que realmente importa: <strong>educar a la próxima generación</strong>.
                        </p>
                    </motion.div>

                    <div className="row g-4 mt-2">
                        <motion.div className="col-lg-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mb-4 shadow-sm" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-rocket-takeoff-fill fs-3 text-primary"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Innovación Constante</h4>
                                <p className="text-muted mb-0">Evolucionamos de la mano con las normativas del MINEDUC y escuchando los dolores reales de los sostenedores y docentes.</p>
                            </div>
                        </motion.div>

                        <motion.div className="col-lg-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <div className="card h-100 border-0 shadow-lg rounded-4 p-4 hover-lift bg-primary text-white" style={{ transform: 'scale(1.03)', zIndex: 2 }}>
                                <div className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-headset fs-3 text-white"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Soporte Humano</h4>
                                <p className="text-white-50 mb-0">Nada de bots interminables. Te acompañamos en la implementación con asesoría directa y cercana. Si tu colegio crece, nosotros también.</p>
                            </div>
                        </motion.div>

                        <motion.div className="col-lg-4" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}>
                            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 hover-lift" style={{ backgroundColor: '#f8f9fa' }}>
                                <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mb-4 shadow-sm" style={{ width: '60px', height: '60px' }}>
                                    <i className="bi bi-shield-check fs-3 text-success"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Seguridad Nivel Bancario</h4>
                                <p className="text-muted mb-0">Tus datos académicos y financieros están respaldados en servidores Cloud de clase mundial, con auditoría inmutable e inviolable.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* LA MAGIA DE LA SINERGIA */}
            <section id="sinergia" className="py-5 text-white position-relative" style={{ backgroundColor: '#0b3d60', overflow: 'hidden' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-20 blur-circle" style={{ mixBlendMode: 'overlay' }}></div>
                <div className="container py-5 text-center position-relative z-1">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                        <span className="badge bg-white bg-opacity-10 text-white px-3 py-2 rounded-pill mb-3 fw-bold border border-light border-opacity-25">
                            <i className="bi bi-lightning-charge-fill text-warning me-1"></i> Nuestra Ventaja Única
                        </span>
                        <h2 className="fw-bold display-5 mb-5">La magia de la sincronización</h2>
                    </motion.div>

                    <div className="row g-4 align-items-center justify-content-center pt-3">
                        <motion.div className="col-md-4" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 border border-light border-opacity-25 glass-card">
                                <i className="bi bi-wallet2 fs-1 text-warning mb-3"></i>
                                <h4 className="fw-bold">1. Ingresa a Kódeca</h4>
                                <p className="text-white-50 mb-0">El apoderado matricula y paga online sin pisar el colegio.</p>
                            </div>
                        </motion.div>

                        <motion.div className="col-md-1 d-none d-md-flex justify-content-center" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                            <motion.i
                                className="bi bi-arrow-right-circle-fill fs-1 text-info"
                                animate={{ x: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            ></motion.i>
                        </motion.div>

                        <motion.div className="col-md-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
                            <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 border border-light border-opacity-25 glass-card">
                                <i className="bi bi-journal-check fs-1 text-info mb-3"></i>
                                <h4 className="fw-bold">2. Aparece en libClass</h4>
                                <p className="text-white-50 mb-0">Automáticamente, el alumno está validado en la lista del profesor.</p>
                            </div>
                        </motion.div>
                    </div>
                    <motion.h4 className="mt-5 fw-light fst-italic text-warning" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.8 }}>
                        "Cero doble digitación. Cero errores humanos."
                    </motion.h4>
                </div>
            </section>

            {/* FOOTER Y CONTACTO */}
            <footer id="contacto" className="text-white pt-5 pb-3" style={{ backgroundColor: '#1a1d20' }}>
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-lg-5 mb-4 mb-lg-0 text-center text-md-start">
                            {/* Aquí luce el Logo Oficial de forma elegante */}
                            <div className="mb-4 d-inline-block bg-white p-2 rounded-4 shadow-sm">
                                <img src={logoPrincipal} alt="Logo Tu Colegio Digital" style={{ height: '70px', width: 'auto' }} />
                            </div>
                            <p className="text-white-50 fs-5 mb-4">"Transformando la educación a través de la tecnología."</p>
                            <p className="text-white-50 mb-1"><i className="bi bi-envelope me-2"></i> contacto@tucolegiodigital.cl</p>
                            <p className="text-white-50"><i className="bi bi-geo-alt me-2"></i> Puerto Varas, Región de Los Lagos</p>
                        </div>
                        <div className="col-lg-5">
                            <h5 className="fw-bold mb-4 text-center text-md-start">Agenda tu Demo Gratuita</h5>
                            {sent ? (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="alert alert-success border-0 p-4 rounded-4 shadow-sm">
                                    <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                    ¡Mensaje enviado con éxito! Nos contactaremos pronto con tu institución.
                                </motion.div>
                            ) : (
                                <form ref={form} onSubmit={sendEmail} className="bg-dark p-4 rounded-4 shadow-sm border border-secondary">
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-white-50">Nombre de la Institución</label>
                                        <input type="text" name="institucion" className="form-control bg-transparent text-white border-secondary focus-ring" placeholder="Ej: Colegio San José" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-white-50">Correo Electrónico de Contacto</label>
                                        <input type="email" name="email" className="form-control bg-transparent text-white border-secondary focus-ring" placeholder="nombre@colegio.cl" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-white-50">¿En qué podemos ayudarte?</label>
                                        <textarea name="mensaje" className="form-control bg-transparent text-white border-secondary focus-ring" placeholder="Nos gustaría conocer más sobre libClass y Kódeca..." rows="3" required></textarea>
                                    </div>
                                    <button type="submit" disabled={loading} className="btn btn-primary w-100 fw-bold py-2 shadow-sm btn-hover-effect">
                                        {loading ? <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> : null}
                                        {loading ? 'Enviando...' : 'Solicitar Información'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                    <div className="text-center border-top border-secondary pt-4 text-white-50 small">
                        <p>&copy; {new Date().getFullYear()} Asesorías Informáticas Cristian Sanchez E.I.R.L. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;