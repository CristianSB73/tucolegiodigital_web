import React from 'react';

// IMPORTACIÓN DE IMÁGENES
import mobileImg1 from '../assets/celular_1.jpg';
import mobileImg2 from '../assets/celular_2.jpg';
import dashboardMockup from '../assets/dashboard.png';

const LandingPage = () => {
    // Función para navegación suave
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div style={{ fontFamily: "'Inter', 'Montserrat', sans-serif", backgroundColor: '#f8f9fa' }}>

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
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('caracteristicas')}>Características</button>
                            </li>
                            <li className="nav-item me-3">
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('solucion')}>Solución</button>
                            </li>
                            <li className="nav-item me-4">
                                <button className="nav-link btn btn-link text-dark text-decoration-none nav-custom-link" onClick={() => scrollToSection('contacto')}>Contacto</button>
                            </li>
                            <li className="nav-item mt-2 mt-lg-0">
                                <a href="https://libclass.cl" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary fw-bold px-4 rounded-pill shadow-sm">
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Acceso Clientes
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#f8f9fa' }}>
                <div className="position-absolute top-0 end-0 translate-middle-y rounded-circle bg-primary opacity-10" style={{ width: '800px', height: '800px', zIndex: 0 }}></div>
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-center text-lg-start animate__animated animate__fadeInLeft">
                            <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill mb-3 fw-bold tracking-wide">
                                <i className="bi bi-stars me-1"></i> Nueva Plataforma libClass
                            </span>
                            <h1 className="display-4 fw-bold text-dark mb-4" style={{ lineHeight: '1.2' }}>
                                La gestión escolar <br /> <span style={{ color: '#4e73df' }}>nunca fue tan sencilla.</span>
                            </h1>
                            <p className="lead text-secondary mb-5 fs-5">
                                Descubre <strong>libClass</strong>, la plataforma integral para colegios que conecta a docentes, alumnos y apoderados en tiempo real.
                            </p>
                            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                                <button className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg hero-btn" onClick={() => scrollToSection('contacto')}>
                                    Solicitar Demo
                                </button>
                                <a href="https://libclass.cl" target="_blank" rel="noopener noreferrer" className="btn btn-white bg-white btn-lg px-5 py-3 rounded-pill fw-bold shadow-sm border hero-btn-alt">
                                    Soy Cliente
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-5 mt-lg-0 animate__animated animate__fadeInRight">
                            <div className="bg-white p-2 rounded-4 shadow-lg border">
                                <img src={dashboardMockup} alt="Interfaz del Dashboard de libClass" className="img-fluid rounded-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEMA VS SOLUCIÓN - TOTALMENTE REDISEÑADO */}
            <section id="solucion" className="py-5" style={{ backgroundColor: '#ffffff' }}>
                <div className="container py-5">
                    <div className="text-center mb-5 animate__animated animate__fadeInUp">
                        <h2 className="fw-bold text-dark display-5">Dejamos atrás el pasado</h2>
                        <p className="text-muted fs-5">La evolución que tu comunidad educativa estaba esperando.</p>
                    </div>

                    <div className="row g-0 justify-content-center align-items-stretch position-relative" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                        
                        {/* FLECHA CONECTOR (Posicionada sobre las tarjetas) */}
                        <div className="position-absolute top-50 start-50 translate-middle d-none d-md-flex align-items-center justify-content-center" style={{ zIndex: 10, width: '60px', height: '60px' }}>
                            <div className="bg-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center border border-4 border-white" style={{ width: '60px', height: '60px' }}>
                                <i className="bi bi-arrow-right text-white fs-4"></i>
                            </div>
                        </div>

                        {/* ANTES */}
                        <div className="col-md-6 col-lg-5 animate__animated animate__fadeInLeft">
                            <div className="card border-0 h-100 p-4 p-lg-5 shadow-sm text-center text-md-start" 
                                 style={{ backgroundColor: '#fdfdfd', borderRadius: '24px 0 0 24px', border: '1px solid #eee !important' }}>
                                <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-4">
                                    <div className="bg-danger bg-opacity-10 p-2 rounded-circle me-3">
                                        <i className="bi bi-x-circle text-danger fs-4"></i>
                                    </div>
                                    <h3 className="text-danger fw-bold mb-0">Antes</h3>
                                </div>
                                <ul className="list-unstyled text-secondary fs-5">
                                    <li className="mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
                                        <i className="bi bi-file-earmark-x me-3"></i>
                                        <span>Papeleo excesivo.</span>
                                    </li>
                                    <li className="mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
                                        <i className="bi bi-megaphone me-3"></i>
                                        <span>Falta de comunicación.</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-center justify-content-md-start">
                                        <i className="bi bi-clock-history me-3"></i>
                                        <span>Procesos lentos.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* AHORA */}
                        <div className="col-md-6 col-lg-5 animate__animated animate__fadeInRight">
                            <div className="card border-0 h-100 p-4 p-lg-5 shadow-lg text-center text-md-start" 
                                 style={{ backgroundColor: '#4e73df', color: 'white', borderRadius: '0 24px 24px 0' }}>
                                <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-4">
                                    <div className="bg-white bg-opacity-20 p-2 rounded-circle me-3">
                                        <i className="bi bi-check-circle text-white fs-4"></i>
                                    </div>
                                    <h3 className="fw-bold mb-0">Con libClass</h3>
                                </div>
                                <ul className="list-unstyled fs-5">
                                    <li className="mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
                                        <i className="bi bi-cloud-check me-3"></i>
                                        <span>Todo en la nube.</span>
                                    </li>
                                    <li className="mb-4 d-flex align-items-center justify-content-center justify-content-md-start">
                                        <i className="bi bi-chat-dots me-3"></i>
                                        <span>Comunicación directa.</span>
                                    </li>
                                    <li className="d-flex align-items-center justify-content-center justify-content-md-start">
                                        <i className="bi bi-graph-up me-3"></i>
                                        <span>Reportes al instante.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CARACTERÍSTICAS */}
            <section id="caracteristicas" className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold text-dark display-6">Todo lo que necesitas</h2>
                        <p className="text-muted fs-5">Diseñado pensando en profesores, directivos, alumnos y apoderados.</p>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: 'bi-journal-bookmark', title: 'Portal de Notas', desc: 'Visualización limpia, cálculo de promedios automáticos.' },
                            { icon: 'bi-calendar-check', title: 'Control de Asistencia', desc: 'Registro rápido y alertas inmediatas para apoderados.' },
                            { icon: 'bi-clock', title: 'Horarios Inteligentes', desc: 'Acceso rápido a la agenda desde cualquier dispositivo.' },
                            { icon: 'bi-file-earmark-pdf', title: 'Certificados Online', desc: 'Descarga de documentos con firma digital al instante.' }
                        ].map((feature, idx) => (
                            <div className="col-md-6 col-lg-3" key={idx}>
                                <div className="card border-0 shadow-sm h-100 p-4 rounded-4 text-center feature-card transition-all">
                                    <div className="rounded-circle bg-primary bg-opacity-10 text-primary mx-auto d-flex align-items-center justify-content-center mb-3" style={{ width: '70px', height: '70px' }}>
                                        <i className={`bi ${feature.icon} fs-2`}></i>
                                    </div>
                                    <h5 className="fw-bold">{feature.title}</h5>
                                    <p className="text-muted mb-0">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* MOBILE SECTION */}
            <section className="py-5 bg-white overflow-hidden">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1 mt-5 mt-lg-0 text-center">
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px', height: '550px' }}>
                                <img src={mobileImg2} alt="Móvil 2" className="img-fluid rounded-5 shadow-sm border border-4 border-secondary position-absolute" style={{ width: '240px', zIndex: 1, right: '10px', top: '60px', opacity: '0.8', transform: 'rotate(5deg)' }} />
                                <img src={mobileImg1} alt="Móvil 1" className="img-fluid rounded-5 shadow-lg border border-4 border-dark position-absolute" style={{ width: '270px', zIndex: 2, left: '20px', top: '0' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center text-lg-start px-lg-5">
                            <h2 className="display-5 fw-bold mb-4">Tu colegio en tu bolsillo.</h2>
                            <p className="lead text-muted mb-4">Interfaz fluida e intuitiva diseñada para el uso diario desde el smartphone.</p>
                            <ul className="list-unstyled fs-5 text-muted">
                                <li className="mb-2"><i className="bi bi-check2 text-success fw-bold me-2"></i> Diseño 100% responsivo.</li>
                                <li className="mb-2"><i className="bi bi-check2 text-success fw-bold me-2"></i> Carga súper rápida.</li>
                                <li className="mb-2"><i className="bi bi-check2 text-success fw-bold me-2"></i> Notificaciones push.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="contacto" className="text-white pt-5 pb-3" style={{ backgroundColor: '#1a1d20' }}>
                <div className="container text-center text-md-start">
                    <div className="row justify-content-between mb-5">
                        <div className="col-lg-5 mb-4 mb-lg-0 text-center text-md-start">
                            <h3 className="fw-bold mb-3"><i className="bi bi-mortarboard-fill me-2" style={{ color: '#4e73df' }}></i> Tu Colegio Digital</h3>
                            <p className="text-white-50 fs-5 mb-4">"Transformando la educación a través de la tecnología."</p>
                            <p className="text-white-50 mb-1"><i className="bi bi-envelope me-2"></i> contacto@tucolegiodigital.cl</p>
                            <p className="text-white-50"><i className="bi bi-geo-alt me-2"></i> Puerto Varas, Chile</p>
                        </div>
                        <div className="col-lg-5">
                            <h5 className="fw-bold mb-4">¿Hablamos?</h5>
                            <form className="bg-dark p-4 rounded-4 shadow-sm border border-secondary">
                                <div className="mb-3"><input type="text" className="form-control bg-transparent text-white border-secondary" placeholder="Institución" /></div>
                                <div className="mb-3"><input type="email" className="form-control bg-transparent text-white border-secondary" placeholder="Correo" /></div>
                                <button type="button" className="btn btn-primary w-100 fw-bold">Solicitar Información</button>
                            </form>
                        </div>
                    </div>
                    <div className="text-center border-top border-secondary pt-4 text-white-50 small">
                        <p>&copy; {new Date().getFullYear()} Tu Colegio Digital. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>

            <style>{`
                .feature-card:hover { transform: translateY(-10px); }
                .hero-btn:hover { transform: translateY(-3px); box-shadow: 0 1rem 3rem rgba(78, 115, 223, 0.3) !important; }
                .hero-btn-alt:hover { transform: translateY(-3px); background-color: #f8f9fa !important; }
                .nav-custom-link { position: relative; transition: color 0.3s ease !important; padding-bottom: 5px; }
                .nav-custom-link:hover { color: #4e73df !important; }
                .nav-custom-link::after { content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 50%; background-color: #4e73df; transition: all 0.3s ease; transform: translateX(-50%); }
                .nav-custom-link:hover::after { width: 100%; }
                @media (max-width: 768px) {
                    #solucion .card { border-radius: 24px !important; margin-bottom: 1rem; }
                }
            `}</style>
        </div>
    );
};

export default LandingPage;