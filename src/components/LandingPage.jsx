import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

// IMPORTACIÓN DE IMÁGENES
import mobileImg1 from '../assets/celular_1.jpg';
import mobileImg2 from '../assets/celular_2.jpg';
import dashboardMockup from '../assets/dashboard.png';
import kodecaMockup from '../assets/kodeca_dashboard.png';
import logoLibClass from '../assets/libclass_logo.png';
import logoKodeca from '../assets/kodeca_logo.png';

const LandingPage = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);

    // Función para navegación suave
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Función para envío de correo vía EmailJS
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

    return (
        <div style={{ fontFamily: "'Inter', 'Montserrat', sans-serif", backgroundColor: '#f8f9fa' }}>

            {/* ETIQUETAS SEO */}
            <Helmet>
                <title>Tu Colegio Digital | El Ecosistema Escolar Definitivo</title>
                <meta name="description" content="Descubre el ecosistema Tu Colegio Digital. Gestión académica con libClass y recaudación financiera con Kódeca, sincronizados en tiempo real. Cumplimiento total MINEDUC." />
                <meta name="keywords" content="gestión escolar, software colegios, libClass, Kodeca, portal de notas, recaudación colegios, educación Chile, Puerto Varas, Decreto 67, Circular 30, MINEDUC" />
                <html lang="es-CL" />
                <link rel="canonical" href="https://www.tucolegiodigital.cl/" />
            </Helmet>

            {/* NAVBAR */}
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top px-3 py-3">
                <div className="container">
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="#" style={{ color: '#4e73df' }}>
                        <i className="bi bi-mortarboard-fill me-2 fs-3"></i>
                        Tu Colegio Digital
                    </a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-center fw-medium">
                            <li className="nav-item me-3">
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('ecosistema')}>El Ecosistema</button>
                            </li>
                            <li className="nav-item me-3">
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('cumplimiento')}>Normativa MINEDUC</button>
                            </li>
                            <li className="nav-item me-3">
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('proposito')}>Nosotros</button>
                            </li>
                            <li className="nav-item me-4">
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('contacto')}>Contacto</button>
                            </li>

                            {/* DROPDOWN DE ACCESO A CLIENTES */}
                            <li className="nav-item dropdown mt-2 mt-lg-0">
                                <button className="btn btn-outline-primary fw-bold px-4 rounded-pill shadow-sm dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Acceso Clientes
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg rounded-4 mt-2" aria-labelledby="navbarDropdown">
                                    <li>
                                        <a className="dropdown-item py-2 fw-medium d-flex align-items-center" href="https://libclass.cl" target="_blank" rel="noopener noreferrer">
                                            <img src={logoLibClass} alt="libClass" style={{ height: '24px', width: 'auto' }} className="me-3" />
                                            Portal Académico
                                        </a>
                                    </li>
                                    <li><hr className="dropdown-divider my-1" /></li>
                                    <li>
                                        <a className="dropdown-item py-2 fw-medium d-flex align-items-center" href="https://kodeca.cl" target="_blank" rel="noopener noreferrer">
                                            <img src={logoKodeca} alt="Kódeca" style={{ height: '24px', width: 'auto' }} className="me-3" />
                                            Portal Financiero
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '140px', backgroundColor: '#f8f9fa' }}>
                <div className="position-absolute top-0 end-0 translate-middle-y rounded-circle bg-primary opacity-10" style={{ width: '800px', height: '800px', zIndex: 0 }}></div>
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start pe-lg-5">
                            <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide border border-success">
                                <i className="bi bi-shield-fill-check me-1"></i> 100% Digital, Seguro y Alineado a MINEDUC
                            </span>
                            <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: '1.1' }}>
                                El cerebro y el corazón de tu colegio, <span style={{ color: '#4e73df' }}>en un solo ecosistema.</span>
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
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0 position-relative">
                            <div className="bg-white p-2 rounded-4 shadow-lg border position-relative z-2">
                                <img src={dashboardMockup} alt="Interfaz de libClass" className="img-fluid rounded-3" />
                            </div>
                            <div className="position-absolute bottom-0 start-0 translate-middle-x mb-5 ms-5 bg-white p-3 rounded-4 shadow-lg border z-3 d-none d-md-block bounce-anim" style={{ maxWidth: '250px' }}>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="bg-success text-white rounded-circle p-2 me-2"><i className="bi bi-check-lg"></i></div>
                                    <h6 className="mb-0 fw-bold">Pago Recibido</h6>
                                </div>
                                <p className="small text-muted mb-0">Matrícula 2026 pagada vía Mercado Pago con Kódeca.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOS 2 MOTORES (PRODUCTOS) */}
            <section id="ecosistema" className="py-5 bg-white">
                <div className="container py-5">
                    <div className="text-center mb-5 pb-3">
                        <h2 className="fw-bold text-dark display-5">Dos plataformas, un solo propósito</h2>
                        <p className="text-muted fs-5">Sistemas diseñados por expertos para resolver los problemas reales de los colegios.</p>
                    </div>

                    {/* libClass ROW */}
                    <div className="row align-items-center mb-5 pb-5 border-bottom">
                        <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
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
                        </div>
                        <div className="col-lg-6 text-center">
                            <img src={dashboardMockup} alt="libClass Dashboard" className="img-fluid rounded-4 shadow-lg border" />
                        </div>
                    </div>

                    {/* KÓDECA ROW */}
                    <div className="row align-items-center pt-3">
                        <div className="col-lg-6 order-2 order-lg-1 text-center">
                            <img src={kodecaMockup || dashboardMockup} alt="Kódeca Dashboard" className="img-fluid rounded-4 shadow-lg border" style={{ filter: kodecaMockup ? 'none' : 'hue-rotate(150deg)' }} />
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 ps-lg-5">
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
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔥 NUEVA SECCIÓN: CUMPLIMIENTO MINEDUC 🔥 */}
            <section id="cumplimiento" className="py-5" style={{ backgroundColor: '#f0f4fc' }}>
                <div className="container py-5">
                    <div className="text-center mb-5 pb-3">
                        <span className="badge bg-primary text-white px-3 py-2 rounded-pill mb-3 fw-bold fs-6 shadow-sm">
                            <i className="bi bi-shield-lock-fill me-1"></i> Cero Multas, Cero Estrés
                        </span>
                        <h2 className="fw-bold text-dark display-6 mb-3">Blindados ante la Superintendencia</h2>
                        <p className="text-muted fs-5 mx-auto" style={{ maxWidth: '800px' }}>
                            Diseñamos libClass para automatizar el cumplimiento normativo. Protege tu subvención y permite que tu equipo directivo duerma tranquilo sabiendo que todo está en regla.
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {/* Circular 30 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 feature-card bg-white">
                                <div className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '70px', height: '70px' }}>
                                    <i className="bi bi-fingerprint fs-2 text-primary"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Firma Electrónica Avanzada</h4>
                                <p className="text-muted mb-0">Cumplimiento total de la <strong>Circular N°30</strong>. Integración de doble factor (Google Authenticator) para docentes. Ningún profesor puede firmar por otro, dando validez legal absoluta a las actas.</p>
                            </div>
                        </div>

                        {/* Decreto 67 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 feature-card bg-white">
                                <div className="bg-success bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '70px', height: '70px' }}>
                                    <i className="bi bi-clipboard2-check-fill fs-2 text-success"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Planificación Decreto 67</h4>
                                <p className="text-muted mb-0">Módulo integrado para definir si cada evaluación es formativa o sumativa. Genera automáticamente la trazabilidad y la justificación pedagógica que exige el Ministerio.</p>
                            </div>
                        </div>

                        {/* Auditoría */}
                        <div className="col-lg-4 col-md-6">
                            <div className="card h-100 border-0 shadow-sm rounded-4 p-4 feature-card bg-white">
                                <div className="bg-danger bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mb-4" style={{ width: '70px', height: '70px' }}>
                                    <i className="bi bi-database-check fs-2 text-danger"></i>
                                </div>
                                <h4 className="fw-bold mb-3">Auditoría Inmutable</h4>
                                <p className="text-muted mb-0">Un registro invisible e inalterable graba cada acción en el Libro de Clases. Trazabilidad de IP, dispositivo y fecha exacta para responder en minutos ante cualquier fiscalización.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* LA MAGIA DE LA SINERGIA */}
            <section id="sinergia" className="py-5 text-white" style={{ backgroundColor: '#0b3d60' }}>
                <div className="container py-5 text-center">
                    <span className="badge bg-white bg-opacity-10 text-white px-3 py-2 rounded-pill mb-3 fw-bold">
                        <i className="bi bi-lightning-charge-fill text-warning me-1"></i> Nuestra Ventaja Única
                    </span>
                    <h2 className="fw-bold display-5 mb-5">La magia de la sincronización</h2>

                    <div className="row g-4 align-items-center justify-content-center pt-3">
                        <div className="col-md-4">
                            <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 feature-card border border-light border-opacity-25">
                                <i className="bi bi-person-plus-fill fs-1 text-warning mb-3"></i>
                                <h4 className="fw-bold">1. Ingresa a Kódeca</h4>
                                <p className="text-white-50 mb-0">El apoderado matricula y paga online sin pisar el colegio.</p>
                            </div>
                        </div>
                        <div className="col-md-1 d-none d-md-block">
                            <i className="bi bi-arrow-right fs-1 text-white-50"></i>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 rounded-4 bg-white bg-opacity-10 h-100 feature-card border border-light border-opacity-25">
                                <i className="bi bi-check-all fs-1 text-info mb-3"></i>
                                <h4 className="fw-bold">2. Aparece en libClass</h4>
                                <p className="text-white-50 mb-0">Automáticamente, el alumno está en la lista de asistencia del profesor.</p>
                            </div>
                        </div>
                    </div>
                    <h4 className="mt-5 fw-light fst-italic">"Cero doble digitación. Cero errores humanos."</h4>
                </div>
            </section>

            {/* MOBILE SECTION */}
            <section className="py-5 overflow-hidden" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 text-center">
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px', height: '550px' }}>
                                <img src={mobileImg2} alt="Móvil 2" className="img-fluid rounded-5 shadow-sm border border-4 border-secondary position-absolute" style={{ width: '240px', zIndex: 1, right: '10px', top: '60px', opacity: '0.8', transform: 'rotate(5deg)' }} />
                                <img src={mobileImg1} alt="Móvil 1" className="img-fluid rounded-5 shadow-lg border border-4 border-dark position-absolute" style={{ width: '270px', zIndex: 2, left: '20px', top: '0' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start px-lg-5">
                            <h2 className="display-5 fw-bold mb-4 text-dark" style={{ lineHeight: '1.2' }}>
                                <span style={{ color: '#4e73df' }}>El colegio</span> en el bolsillo del apoderado.
                            </h2>
                            <p className="lead text-muted mb-4">Mejora la relación con la comunidad. Desde su celular, los padres podrán revisar el rendimiento de sus hijos y mantener sus pagos al día en 3 clics.</p>
                            <ul className="list-unstyled fs-5 text-muted">
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i> Ver notas y asistencia en tiempo real.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i> Pagar aranceles online con Mercado Pago.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-info me-2"></i> Descargar certificados sin hacer filas.</li>
                                <li className="mb-2"><i className="bi bi-check-circle-fill text-secondary me-2"></i> Diseño 100% responsivo y rápido.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* NUESTRO PROPÓSITO */}
            <section id="proposito" className="py-5 bg-white">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="pe-lg-5 text-center text-lg-start">
                                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide">
                                    <i className="bi bi-geo-alt-fill me-1"></i> Desde Puerto Varas al mundo
                                </span>
                                <h2 className="display-6 fw-bold text-dark mb-4">Nuestro Propósito</h2>
                                <p className="lead text-secondary mb-4">
                                    En <strong>Tu Colegio Digital</strong> creemos firmemente que la tecnología debe ser un puente, no un obstáculo.
                                </p>
                                <p className="text-muted fs-5 mb-4">
                                    No somos solo una empresa de software; somos tus aliados tecnológicos. Nuestro objetivo es liberar a los equipos directivos, administrativos y docentes de las tareas manuales, permitiéndoles enfocarse en lo verdaderamente importante: <strong>educar y guiar a la próxima generación</strong>.
                                </p>
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start mt-4">
                                    <div className="bg-light p-3 rounded-circle me-3 border">
                                        <i className="bi bi-shield-check text-primary fs-3"></i>
                                    </div>
                                    <div className="text-start">
                                        <h5 className="fw-bold mb-1">Cercanía y Seguridad</h5>
                                        <p className="text-muted mb-0 small">Asesoría directa y servidores Cloud de nivel mundial.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-light rounded-5 p-1 shadow-sm border">
                                <div className="rounded-4 overflow-hidden position-relative d-flex align-items-center justify-content-center" style={{ height: '400px', backgroundColor: '#e3e6f0' }}>
                                    <i className="bi bi-people-fill text-primary opacity-25" style={{ fontSize: '10rem' }}></i>
                                    <div className="position-absolute bottom-0 start-0 w-100 p-4 text-center bg-white bg-opacity-75" style={{ backdropFilter: 'blur(5px)' }}>
                                        <h4 className="fw-bold mb-1 text-dark">Construyendo el futuro</h4>
                                        <p className="text-dark mb-0 small">Junto a las comunidades educativas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER Y CONTACTO */}
            <footer id="contacto" className="text-white pt-5 pb-3" style={{ backgroundColor: '#1a1d20' }}>
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-lg-5 mb-4 mb-lg-0 text-center text-md-start">
                            <h3 className="fw-bold mb-3"><i className="bi bi-mortarboard-fill me-2" style={{ color: '#4e73df' }}></i> Tu Colegio Digital</h3>
                            <p className="text-white-50 fs-5 mb-4">"Transformando la educación a través de la tecnología."</p>
                            <p className="text-white-50 mb-1"><i className="bi bi-envelope me-2"></i> contacto@tucolegiodigital.cl</p>
                            <p className="text-white-50"><i className="bi bi-geo-alt me-2"></i> Puerto Varas, Región de Los Lagos</p>
                        </div>
                        <div className="col-lg-5">
                            <h5 className="fw-bold mb-4 text-center text-md-start">Agenda tu Demo Gratuita</h5>

                            {sent ? (
                                <div className="alert alert-success border-0 p-4 rounded-4 shadow-sm">
                                    <i className="bi bi-check-circle-fill me-2 fs-5"></i>
                                    ¡Mensaje enviado con éxito! Nos contactaremos pronto con tu institución.
                                </div>
                            ) : (
                                <form ref={form} onSubmit={sendEmail} className="bg-dark p-4 rounded-4 shadow-sm border border-secondary">
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-white-50">Nombre de la Institución</label>
                                        <input type="text" name="institucion" className="form-control bg-transparent text-white border-secondary" placeholder="Ej: Colegio San José" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-white-50">Correo Electrónico de Contacto</label>
                                        <input type="email" name="email" className="form-control bg-transparent text-white border-secondary" placeholder="nombre@colegio.cl" required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label small fw-bold text-white-50">¿En qué podemos ayudarte?</label>
                                        <textarea name="mensaje" className="form-control bg-transparent text-white border-secondary" placeholder="Nos gustaría conocer más sobre libClass y Kódeca..." rows="3" required></textarea>
                                    </div>
                                    <button type="submit" disabled={loading} className="btn btn-primary w-100 fw-bold py-2 shadow-sm">
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

            <style>{`
                .feature-card:hover { transform: translateY(-10px); transition: all 0.3s ease; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
                .hero-btn:hover { transform: translateY(-3px); box-shadow: 0 1rem 3rem rgba(78, 115, 223, 0.3) !important; transition: all 0.3s ease; }
                .hero-btn-alt:hover { transform: translateY(-3px); background-color: #e2e6ea !important; transition: all 0.3s ease; }
                .nav-custom-link { position: relative; transition: color 0.3s ease !important; padding-bottom: 5px; }
                .nav-custom-link:hover { color: #4e73df !important; }
                .nav-custom-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; background-color: #4e73df; transition: all 0.3s ease; transform: translateX(-50%); }
                .nav-custom-link:hover::after { width: 100%; }
                
                /* Pequeña animación para la tarjeta flotante del Hero */
                @keyframes bounceSlow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .bounce-anim { animation: bounceSlow 4s ease-in-out infinite; }
                
                @media (max-width: 768px) {
                    #ecosistema .row { text-align: center; }
                    #ecosistema img { margin-top: 2rem; }
                }
            `}</style>
        </div>
    );
};

export default LandingPage;