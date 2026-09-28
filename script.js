/**
 * =====================================================
 * NOMBA AL'BOUCHRA — PORTFOLIO ENGINE v3.0
 * HorizonX-Style Redesign
 * =====================================================
 * Modules:
 *  1. Multilingual Engine (FR, EN, DE, ES)
 *  2. Interactive Terminal CLI
 *  3. Scroll Reveal (IntersectionObserver)
 *  4. Dark/Light Theme Toggle
 *  5. Mobile Navigation
 *  6. Projects Filter
 *  7. Project Specifications Modal
 *  8. CV Modal & Print
 *  9. Contact Form & WhatsApp Generator
 * 10. Back To Top
 * 11. Navbar Scroll Effect
 * =====================================================
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. MULTILINGUAL TRANSLATIONS
       =================================================== */
    const translations = {
        fr: {
            "nav.about": "Profil",
            "nav.services": "Expertises",
            "nav.projects": "Projets",
            "nav.education": "Parcours",
            "nav.contact": "Contact",
            "nav.cta": "Prendre Contact",
            "nav.cv": "CV",

            "hero.status": "Disponible pour projets & collaborations",
            "hero.headline": "Développeur Web & Architecte Digital",
            "hero.lead": "Je conçois des plateformes e-commerce performantes, des applications SCMS/ERP et des interfaces web de haut niveau — alliant ingénierie rigoureuse et vision business pour propulser les entreprises.",
            "hero.btnProjects": "Explorer les Réalisations",
            "hero.btnWhatsapp": "WhatsApp Direct",

            "about.badge": "Profil & Vision",
            "about.title": "Ingénierie,\nRigueur & Ambition",
            "about.bento1.desc": "Diplômé du Baccalauréat et poursuivant une <strong>Licence en Génie Électrique (Système Informatique et Logiciel) à l'UATM Gasa Formation</strong>, complétée par une formation professionnelle au <strong>Centre Numérique International du Bénin (CNIB)</strong>.",
            "about.bento1.desc2": "Autodidacte rigoureux et passionné, mon engagement est d'apporter des solutions digitales de standing international adaptées aux réalités économiques du Bénin et de l'Afrique.",
            "about.bento2.title": "Langues",
            "about.langFr": "Français",
            "about.langEn": "Anglais",
            "about.langDendi": "Dendi",
            "about.langFon": "Fon",
            "about.langFluent": "Courant",
            "about.langEnLevel": "Technique",
            "about.langNative": "Natif",
            "about.langNational": "National",
            "about.bento3.title": "Atouts Professionnels",
            "about.q1": "Vision stratégique & anticipation",
            "about.q2": "Rigueur & résistance sous contrainte",
            "about.q3": "Intégrité, loyauté, respect des engagements",
            "about.q4": "Créativité orientée conversion & ergonomie",

            "services.badge": "Domaines d'Intervention",
            "services.title": "Solutions & Valeur Apportée",
            "services.subtitle": "Des prestations complètes conçues pour répondre aux défis des entreprises modernes.",
            "services.s1.title": "Ingénierie E-Commerce Haute Performance",
            "services.s1.desc": "Boutiques en ligne complètes avec catalogues dynamiques, gestion de paniers en temps réel, tunnels de vente optimisés mobile et intégration directe WhatsApp.",
            "services.s2.title": "Applications Métier & SCMS/ERP",
            "services.s2.desc": "Systèmes de gestion commerciale : suivi des stocks, enregistrement des achats/ventes, facturation automatisée et tableaux de bord analytiques pour décideurs.",
            "services.s3.title": "Développement Front-End & UI/UX",
            "services.s3.desc": "Intégration HTML5/CSS3/JavaScript conforme W3C. Interfaces épurées, design responsive multi-écrans, chargement minimal et ergonomie centrée utilisateur.",
            "services.s4.title": "Stratégie Digitale & Rédaction Web",
            "services.s4.desc": "Contenus professionnels à fort impact, structuration de l'information, marketing digital appliqué et maîtrise avancée des outils bureautiques.",

            "projects.badge": "Réalisations en Production",
            "projects.title": "Projets Déployés & Opérationnels",
            "projects.subtitle": "Des plateformes réelles en ligne démontrant maîtrise technique, fiabilité et sens du détail.",
            "projects.filterAll": "Tous",
            "projects.filterEcom": "E-Commerce",
            "projects.filterMgmt": "Gestion & ERP",
            "projects.btnVisit": "Live",
            "projects.btnVisitApp": "App",
            "projects.btnDetails": "Specs",
            "projects.marcx.cat": "E-Commerce / Prêt-à-porter",
            "projects.marcx.desc": "Boutique en ligne complète de mode : catalogue dynamique, panier en temps réel, filtres et passerelle directe de commande.",
            "projects.smoke.cat": "E-Commerce & Vitrine",
            "projects.smoke.desc": "Plateforme digitale immersive design sombre, navigation optimisée mobile, galeries produits et prise de commande rapide.",
            "projects.gest.cat": "SCMS / ERP",
            "projects.gest.desc": "Application web de gestion commerciale : inventaire, suivi achats/ventes, facturation automatisée et tableaux de bord analytiques.",

            "edu.badge": "Formation & Cursus",
            "edu.title": "Parcours Académique & Qualifications",
            "edu.inProgress": "En cours",
            "edu.uatm.title": "Licence Génie Électrique (Système Informatique & Logiciel)",
            "edu.uatm.desc": "Formation universitaire approfondie : architectures logicielles, systèmes d'information, électronique appliquée, conception d'algorithmes et méthodologies de développement.",
            "edu.cnib.title": "Formation Professionnelle Numérique",
            "edu.cnib.desc": "Spécialisation pratique en développement web, gestion de projets digitaux et technologies numériques modernes.",
            "edu.exp.title": "Contrôleur de Billets — Gestion d'Événements",
            "edu.exp.desc": "Validation des billets, gestion du public en conditions d'affluence élevée, rigueur de contrôle et coordination d'équipe.",
            "edu.bac.title": "Baccalauréat (BAC)",
            "edu.bac.desc": "Diplôme sanctionnant les études secondaires avec une assise scientifique solide préparant aux études supérieures d'ingénierie.",
            "edu.idsca.title": "Formation Informatique Fondamentale",
            "edu.idsca.desc": "Maîtrise des fondamentaux informatiques, systèmes d'exploitation et suite bureautique (Word, Excel, PowerPoint).",

            "contact.badge": "Prise de Contact",
            "contact.title": "Engager une Collaboration",
            "contact.subtitle": "Vous avez un projet e-commerce, une application web ou un besoin d'ingénierie digitale ? Discutons-en dès aujourd'hui.",
            "contact.waTitle": "WhatsApp Direct",
            "contact.phoneTitle": "Ligne Directe",
            "contact.emailTitle": "Email Professionnel",
            "contact.formTitle": "Transmettre une Demande",
            "contact.labelName": "Nom & Prénom *",
            "contact.labelEmail": "Email *",
            "contact.labelSubject": "Objet *",
            "contact.labelMessage": "Message *",
            "contact.btnSend": "Envoyer par Email",
            "contact.btnSendWhatsapp": "WhatsApp",

            "footer.tagline": "Conception de solutions logicielles et plateformes digitales à haute valeur ajoutée.",
            "footer.rights": "Tous droits réservés. Cotonou, Bénin."
        },

        en: {
            "nav.about": "Profile",
            "nav.services": "Expertise",
            "nav.projects": "Projects",
            "nav.education": "Background",
            "nav.contact": "Contact",
            "nav.cta": "Get in Touch",
            "nav.cv": "CV",

            "hero.status": "Available for projects & contracts",
            "hero.headline": "Web Solutions Architect & Full-Stack Developer",
            "hero.lead": "I engineer high-performance e-commerce platforms, enterprise SCMS/ERP applications, and polished web interfaces — merging technical rigor with business acumen to drive results.",
            "hero.btnProjects": "Explore Portfolio",
            "hero.btnWhatsapp": "WhatsApp Direct",

            "about.badge": "Profile & Vision",
            "about.title": "Engineering,\nPrecision & Drive",
            "about.bento1.desc": "High School Graduate currently pursuing a <strong>Bachelor of Science in Electrical & Computer Systems Engineering at UATM Gasa Formation</strong>, alongside vocational certification from the <strong>International Digital Center of Benin (CNIB)</strong>.",
            "about.bento1.desc2": "A dedicated, self-driven, and meticulous developer committed to delivering enterprise-grade digital solutions aligned with African market dynamics.",
            "about.bento2.title": "Languages",
            "about.langFr": "French",
            "about.langEn": "English",
            "about.langDendi": "Dendi",
            "about.langFon": "Fon",
            "about.langFluent": "Fluent",
            "about.langEnLevel": "Technical",
            "about.langNative": "Native",
            "about.langNational": "National",
            "about.bento3.title": "Professional Strengths",
            "about.q1": "Strategic anticipation & planning",
            "about.q2": "Resilience & precision under pressure",
            "about.q3": "Integrity, accountability & reliability",
            "about.q4": "Conversion-focused UX engineering",

            "services.badge": "Core Services",
            "services.title": "Engineering Capabilities & Business Value",
            "services.subtitle": "Comprehensive full-stack services designed to resolve critical business challenges.",
            "services.s1.title": "High-Conversion E-Commerce Engineering",
            "services.s1.desc": "End-to-end storefronts with dynamic catalogs, real-time cart management, mobile-optimized checkout, and WhatsApp order integration.",
            "services.s2.title": "Enterprise SCMS & ERP Applications",
            "services.s2.desc": "Web apps for inventory management, purchase/sales tracking, automated invoicing, and executive KPI dashboards.",
            "services.s3.title": "Modern Front-End & UI/UX Development",
            "services.s3.desc": "W3C-compliant HTML5/CSS3/JS. Lightweight, blazing-fast interfaces engineered for seamless cross-device experiences.",
            "services.s4.title": "Digital Strategy & Professional Copywriting",
            "services.s4.desc": "High-impact content creation, digital marketing, SEO structuring, and advanced corporate office suite expertise.",

            "projects.badge": "Production Deployments",
            "projects.title": "Deployed & Live Software",
            "projects.subtitle": "Real-world platforms validating technical mastery, reliability, and attention to detail.",
            "projects.filterAll": "All",
            "projects.filterEcom": "E-Commerce",
            "projects.filterMgmt": "Management & ERP",
            "projects.btnVisit": "Live",
            "projects.btnVisitApp": "App",
            "projects.btnDetails": "Specs",
            "projects.marcx.cat": "E-Commerce / Fashion Retail",
            "projects.marcx.desc": "Full e-commerce storefront for fashion: dynamic catalog, real-time cart, category filters, and streamlined WhatsApp order gateway.",
            "projects.smoke.cat": "E-Commerce & Digital Showcase",
            "projects.smoke.desc": "Immersive dark UI digital platform with responsive navigation, product galleries, and rapid order flow.",
            "projects.gest.cat": "SCMS / ERP",
            "projects.gest.desc": "Corporate management web app: inventory control, sales ledger, automated invoicing, and business analytics dashboards.",

            "edu.badge": "Education & Background",
            "edu.title": "Academic Journey & Credentials",
            "edu.inProgress": "In Progress",
            "edu.uatm.title": "B.Sc. Electrical Engineering (Computer Systems & Software)",
            "edu.uatm.desc": "Rigorous curriculum in software architectures, information systems, applied electronics, algorithms, and computing fundamentals.",
            "edu.cnib.title": "Professional Certification in Digital Technologies",
            "edu.cnib.desc": "Applied curriculum focused on web technologies, agile execution, and digital operational tools.",
            "edu.exp.title": "Event Ticketing & Access Controller",
            "edu.exp.desc": "Managed entry validation, crowd logistics under peak traffic, and coordinated team execution during live events.",
            "edu.bac.title": "High School Baccalaureate (BAC)",
            "edu.bac.desc": "Graduation certificate reflecting scientific analytical skills and eligibility for engineering studies.",
            "edu.idsca.title": "Fundamental Computing Training",
            "edu.idsca.desc": "Essential foundations of computer operations, OS management, and Microsoft Office productivity suites.",

            "contact.badge": "Get In Touch",
            "contact.title": "Initiate a Collaboration",
            "contact.subtitle": "Have an e-commerce project, web application, or engineering requirement? Let's talk today.",
            "contact.waTitle": "WhatsApp Direct",
            "contact.phoneTitle": "Phone Line",
            "contact.emailTitle": "Professional Email",
            "contact.formTitle": "Submit an Inquiry",
            "contact.labelName": "Full Name *",
            "contact.labelEmail": "Email *",
            "contact.labelSubject": "Subject *",
            "contact.labelMessage": "Message *",
            "contact.btnSend": "Send via Email",
            "contact.btnSendWhatsapp": "WhatsApp",

            "footer.tagline": "Engineering high-value digital solutions and software platforms.",
            "footer.rights": "All rights reserved. Cotonou, Benin."
        },

        de: {
            "nav.about": "Profil",
            "nav.services": "Leistungen",
            "nav.projects": "Projekte",
            "nav.education": "Werdegang",
            "nav.contact": "Kontakt",
            "nav.cta": "Kontaktieren",
            "nav.cv": "Lebenslauf",

            "hero.status": "Verfügbar für Projekte & Aufträge",
            "hero.headline": "Webentwickler & Softwarearchitekt",
            "hero.lead": "Ich entwickle leistungsstarke E-Commerce-Plattformen, SCMS/ERP-Anwendungen und moderne Weboberflächen — technische Präzision trifft auf strategisches Denken.",
            "hero.btnProjects": "Projekte ansehen",
            "hero.btnWhatsapp": "WhatsApp Direkt",

            "about.badge": "Profil & Vision",
            "about.title": "Ingenieurkunst,\nPräzision & Ehrgeiz",
            "about.bento1.desc": "Abiturient und Student im <strong>Bachelor-Studiengang Elektrotechnik (Informatik & Software) an der UATM Gasa Formation</strong>, ergänzt durch eine Fachausbildung am <strong>CNIB Jéricho</strong>.",
            "about.bento1.desc2": "Als engagierter Autodidakt verbinde ich moderne Webstandards mit den wirtschaftlichen Anforderungen afrikanischer Märkte.",
            "about.bento2.title": "Sprachkenntnisse",
            "about.langFr": "Französisch",
            "about.langEn": "Englisch",
            "about.langDendi": "Dendi",
            "about.langFon": "Fon",
            "about.langFluent": "Verhandlungssicher",
            "about.langEnLevel": "Technisch",
            "about.langNative": "Muttersprache",
            "about.langNational": "Landessprache",
            "about.bento3.title": "Stärken",
            "about.q1": "Strategische Planung & Vorausschau",
            "about.q2": "Belastbarkeit & Präzision unter Druck",
            "about.q3": "Integrität, Zuverlässigkeit & Pflichtbewusstsein",
            "about.q4": "Ergonomie- und Conversion-Orientierung",

            "services.badge": "Leistungsspektrum",
            "services.title": "Technische Lösungen & Mehrwert",
            "services.subtitle": "Ganzheitliche Webentwicklung für spürbare Prozessoptimierung und nachhaltiges Wachstum.",
            "services.s1.title": "Hochperformante E-Commerce-Systeme",
            "services.s1.desc": "Vollwertige Online-Shops mit Echtzeit-Warenkorb, mobilem Checkout und WhatsApp-Bestellintegration.",
            "services.s2.title": "ERP- & SCMS-Webanwendungen",
            "services.s2.desc": "Lagerverwaltung, automatisierte Rechnungsstellung, Verkaufsübersichten und operative Unternehmenssteuerung.",
            "services.s3.title": "Front-End & UI/UX Entwicklung",
            "services.s3.desc": "W3C-konforme HTML5/CSS3/JS-Architektur mit schnellen Ladezeiten und responsivem Layout.",
            "services.s4.title": "Digitale Strategie & Textierung",
            "services.s4.desc": "Zielgerichtetes Copywriting, digitales Marketing und fortgeschrittene MS-Office-Beherrschung.",

            "projects.badge": "Live-Projekte",
            "projects.title": "Veröffentlichte Anwendungen",
            "projects.subtitle": "Echte Produktionssysteme, die technische Kompetenz und Zuverlässigkeit belegen.",
            "projects.filterAll": "Alle",
            "projects.filterEcom": "E-Commerce",
            "projects.filterMgmt": "ERP & Verwaltung",
            "projects.btnVisit": "Live",
            "projects.btnVisitApp": "App",
            "projects.btnDetails": "Details",
            "projects.marcx.cat": "E-Commerce Mode",
            "projects.marcx.desc": "Vollwertiger Mode-Webshop mit interaktivem Katalog, Live-Warenkorb und schneller Bestellabwicklung.",
            "projects.smoke.cat": "E-Commerce Showroom",
            "projects.smoke.desc": "Moderne Produktpräsentation mit immersivem Dark-UI und direkter Kundeninteraktion.",
            "projects.gest.cat": "SCMS / ERP",
            "projects.gest.desc": "Kaufmännische Unternehmenslösung für Lagerbestände, Verkaufsdaten und Rechnungen.",

            "edu.badge": "Bildungsweg",
            "edu.title": "Akademischer Werdegang",
            "edu.inProgress": "Laufend",
            "edu.uatm.title": "Bachelor Elektrotechnik (Informatik & Software)",
            "edu.uatm.desc": "Universitätsstudium in Softwarearchitektur, Algorithmen und angewandter Elektronik.",
            "edu.cnib.title": "Fachausbildung Digitalwirtschaft",
            "edu.cnib.desc": "Praxisorientierte Ausbildung in Webentwicklung und digitalem Projektmanagement.",
            "edu.exp.title": "Einlasskoordinator & Event-Management",
            "edu.exp.desc": "Koordination von Besucherströmen und digitale Ticketprüfung bei Großveranstaltungen.",
            "edu.bac.title": "Abitur (BAC)",
            "edu.bac.desc": "Naturwissenschaftlicher Sekundarabschluss, Grundlage für das Ingenieurstudium.",
            "edu.idsca.title": "Informatik-Grundausbildung",
            "edu.idsca.desc": "Grundlagen von Betriebssystemen und Office-Anwendungen (Word, Excel, PowerPoint).",

            "contact.badge": "Kontaktaufnahme",
            "contact.title": "Zusammenarbeit starten",
            "contact.subtitle": "Planen Sie ein Webprojekt, eine E-Commerce-Plattform oder eine Softwarelösung? Kontaktieren Sie mich direkt.",
            "contact.waTitle": "WhatsApp Direkt",
            "contact.phoneTitle": "Telefon",
            "contact.emailTitle": "Offizielle E-Mail",
            "contact.formTitle": "Projektanfrage senden",
            "contact.labelName": "Name & Vorname *",
            "contact.labelEmail": "E-Mail *",
            "contact.labelSubject": "Betreff *",
            "contact.labelMessage": "Nachricht *",
            "contact.btnSend": "Per E-Mail senden",
            "contact.btnSendWhatsapp": "WhatsApp",

            "footer.tagline": "Entwicklung moderner und hochqualitativer Weblösungen.",
            "footer.rights": "Alle Rechte vorbehalten. Cotonou, Benin."
        },

        es: {
            "nav.about": "Perfil",
            "nav.services": "Servicios",
            "nav.projects": "Proyectos",
            "nav.education": "Formación",
            "nav.contact": "Contacto",
            "nav.cta": "Contactar",
            "nav.cv": "CV",

            "hero.status": "Disponible para proyectos & contratos",
            "hero.headline": "Arquitecto de Soluciones Web & Desarrollador Full-Stack",
            "hero.lead": "Diseño y construyo plataformas e-commerce de alto rendimiento, aplicaciones SCMS/ERP y soluciones web a medida para empresas en África e internacionalmente.",
            "hero.btnProjects": "Ver Proyectos",
            "hero.btnWhatsapp": "WhatsApp Directo",

            "about.badge": "Perfil & Visión",
            "about.title": "Ingeniería,\nRigor y Visión",
            "about.bento1.desc": "Graduado de Bachillerato y cursando la <strong>Licenciatura en Ingeniería Eléctrica (Sistemas Informáticos y Software) en UATM Gasa Formation</strong>, con especialización en <strong>CNIB Jéricho</strong>.",
            "about.bento1.desc2": "Autodidacta comprometido con la entrega de soluciones digitales con estándares internacionales adaptadas al mercado africano.",
            "about.bento2.title": "Idiomas",
            "about.langFr": "Francés",
            "about.langEn": "Inglés",
            "about.langDendi": "Dendi",
            "about.langFon": "Fon",
            "about.langFluent": "Fluido",
            "about.langEnLevel": "Técnico",
            "about.langNative": "Nativo",
            "about.langNational": "Nacional",
            "about.bento3.title": "Cualidades Profesionales",
            "about.q1": "Visión estratégica y anticipación",
            "about.q2": "Rigor y resistencia bajo presión",
            "about.q3": "Integridad y cumplimiento de plazos",
            "about.q4": "Creatividad orientada a conversión y UX",

            "services.badge": "Servicios",
            "services.title": "Soluciones & Valor Estratégico",
            "services.subtitle": "Servicios integrales para resolver los retos de las empresas modernas.",
            "services.s1.title": "Ingeniería E-Commerce de Alta Conversión",
            "services.s1.desc": "Tiendas virtuales completas: catálogo dinámico, carrito en tiempo real, checkout móvil y pedidos directos por WhatsApp.",
            "services.s2.title": "Sistemas SCMS & ERP Web",
            "services.s2.desc": "Software de gestión: inventarios, compras/ventas, facturación automatizada y cuadros de mando empresariales.",
            "services.s3.title": "Desarrollo Front-End & UI/UX Moderno",
            "services.s3.desc": "Arquitectura web W3C. Interfaces rápidas, accesibles y adaptadas a cualquier dispositivo.",
            "services.s4.title": "Estrategia Digital & Redacción Web",
            "services.s4.desc": "Contenidos de alto impacto, marketing digital y dominio avanzado de Microsoft Office.",

            "projects.badge": "En Producción",
            "projects.title": "Proyectos Desplegados",
            "projects.subtitle": "Plataformas reales que avalan la calidad técnica y la fiabilidad.",
            "projects.filterAll": "Todos",
            "projects.filterEcom": "E-Commerce",
            "projects.filterMgmt": "Gestión & ERP",
            "projects.btnVisit": "Live",
            "projects.btnVisitApp": "App",
            "projects.btnDetails": "Detalles",
            "projects.marcx.cat": "E-Commerce de Moda",
            "projects.marcx.desc": "Tienda en línea de moda con catálogo interactivo, carrito en tiempo real y pasarela de pedidos WhatsApp.",
            "projects.smoke.cat": "E-Commerce & Vitrina Digital",
            "projects.smoke.desc": "Plataforma digital con diseño oscuro inmersivo, navegación optimizada y pedidos rápidos.",
            "projects.gest.cat": "SCMS / ERP",
            "projects.gest.desc": "App web corporativa para control de almacén, ventas, facturación automatizada y reportes analíticos.",

            "edu.badge": "Formación",
            "edu.title": "Trayectoria Académica",
            "edu.inProgress": "En curso",
            "edu.uatm.title": "Lic. en Ingeniería Eléctrica (Sistemas y Software)",
            "edu.uatm.desc": "Formación universitaria en arquitecturas de software, sistemas de información y algoritmos.",
            "edu.cnib.title": "Certificación en Tecnologías Digitales",
            "edu.cnib.desc": "Especialización práctica en desarrollo web y gestión digital en CNIB Jéricho.",
            "edu.exp.title": "Controlador de Accesos — Logística de Eventos",
            "edu.exp.desc": "Validación de accesos, gestión de afluencia y trabajo coordinado en eventos en Cotonú.",
            "edu.bac.title": "Bachillerato (BAC)",
            "edu.bac.desc": "Diploma de educación secundaria con base científica para estudios de ingeniería.",
            "edu.idsca.title": "Iniciación Informática",
            "edu.idsca.desc": "Fundamentos de sistemas operativos y suites ofimáticas (Word, Excel, PowerPoint).",

            "contact.badge": "Contacto",
            "contact.title": "Iniciar una Colaboración",
            "contact.subtitle": "¿Tiene un proyecto de e-commerce, aplicación web o requerimiento técnico? Hablemos hoy.",
            "contact.waTitle": "WhatsApp Directo",
            "contact.phoneTitle": "Línea Telefónica",
            "contact.emailTitle": "Correo Electrónico",
            "contact.formTitle": "Enviar Solicitud",
            "contact.labelName": "Nombre y Apellidos *",
            "contact.labelEmail": "Correo Electrónico *",
            "contact.labelSubject": "Asunto *",
            "contact.labelMessage": "Mensaje *",
            "contact.btnSend": "Enviar por Correo",
            "contact.btnSendWhatsapp": "WhatsApp",

            "footer.tagline": "Desarrollo de soluciones de software y plataformas digitales de alto impacto.",
            "footer.rights": "Todos los derechos reservados. Cotonú, Benín."
        }
    };

    let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

    function setLanguage(lang) {
        if (!translations[lang]) lang = 'fr';
        currentLang = lang;
        localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang;

        const codeEl = document.getElementById('current-lang-code');
        if (codeEl) codeEl.textContent = lang.toUpperCase();

        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    // Language Dropdown
    const langBtn = document.getElementById('lang-btn');
    const langDropdownWrapper = document.querySelector('.language-dropdown-wrapper');

    if (langBtn && langDropdownWrapper) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdownWrapper.classList.toggle('open');
        });
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                setLanguage(opt.dataset.lang);
                langDropdownWrapper.classList.remove('open');
            });
        });
        document.addEventListener('click', (e) => {
            if (!langDropdownWrapper.contains(e.target)) {
                langDropdownWrapper.classList.remove('open');
            }
        });
    }

    setLanguage(currentLang);


    /* ===================================================
       2. TERMINAL CLI
       =================================================== */
    const terminalInput = document.getElementById('terminal-input');
    const terminalLogs = document.getElementById('terminal-dynamic-logs');
    const terminalScreen = document.getElementById('terminal-screen');

    const terminalCommands = {
        help: () => `<div class="term-output-block">
<strong>Commandes disponibles :</strong><br>
• <span style="color:var(--term-yellow)">skills</span> — Inspecter les compétences techniques<br>
• <span style="color:var(--term-yellow)">projects</span> — Lister les projets en production<br>
• <span style="color:var(--term-yellow)">about</span> / <span style="color:var(--term-yellow)">whoami</span> — Bio d'ingénierie<br>
• <span style="color:var(--term-yellow)">contact</span> — Coordonnées directes<br>
• <span style="color:var(--term-yellow)">clear</span> — Réinitialiser la console
</div>`,

        skills: () => `<div class="term-output-block">
<span style="color:var(--term-cyan)">{</span><br>
&nbsp;&nbsp;<span style="color:#93c5fd">"core_languages"</span>: [<span style="color:#86efac">"HTML5"</span>, <span style="color:#86efac">"CSS3 Modern"</span>, <span style="color:#86efac">"JavaScript ES6+"</span>],<br>
&nbsp;&nbsp;<span style="color:#93c5fd">"solutions"</span>: [<span style="color:#86efac">"E-Commerce Architecture"</span>, <span style="color:#86efac">"SCMS/ERP"</span>],<br>
&nbsp;&nbsp;<span style="color:#93c5fd">"office"</span>: [<span style="color:#86efac">"Excel Avancé"</span>, <span style="color:#86efac">"Word"</span>, <span style="color:#86efac">"Digital Marketing"</span>],<br>
&nbsp;&nbsp;<span style="color:#93c5fd">"cloud"</span>: [<span style="color:#86efac">"Render"</span>, <span style="color:#86efac">"Git"</span>, <span style="color:#86efac">"HTTPS/SSL"</span>]<br>
<span style="color:var(--term-cyan)">}</span>
</div>`,

        projects: () => `<div class="term-output-block">
<strong>[1] Marcx-Dressing</strong> — E-Commerce Mode<br>
&nbsp;&nbsp;&nbsp;URL: <a href="https://marcx-dressing.onrender.com/" target="_blank" style="color:var(--term-cyan)">marcx-dressing.onrender.com</a><br>
&nbsp;&nbsp;&nbsp;Stack: Real-time Cart, WhatsApp Gateway, Render CI/CD<br><br>
<strong>[2] Smoke Paradise</strong> — E-Commerce Vitrine<br>
&nbsp;&nbsp;&nbsp;URL: <a href="https://smoke-paradise.onrender.com/" target="_blank" style="color:var(--term-cyan)">smoke-paradise.onrender.com</a><br>
&nbsp;&nbsp;&nbsp;Stack: Dark Obsidian UI, Mobile-First, Interactive Catalog<br><br>
<strong>[3] GlobalGest SCMS</strong> — ERP Gestion Commerciale<br>
&nbsp;&nbsp;&nbsp;URL: <a href="https://globalgesttest.scms" target="_blank" style="color:var(--term-cyan)">globalgesttest.scms</a><br>
&nbsp;&nbsp;&nbsp;Stack: Inventory, Billing Automation, Sales Analytics
</div>`,

        about: () => `<div class="term-output-block">
<strong>NOMBA AL'BOUCHRA</strong> — Développeur Web & Architecte Digital<br>
• <strong>Formation :</strong> Licence Génie Électrique (Informatique & Logiciel) @ UATM Gasa Formation<br>
• <strong>Certification :</strong> CNIB — Centre Numérique International du Bénin<br>
• <strong>Localisation :</strong> Cotonou, Bénin — Disponible On-Site & Remote
</div>`,

        contact: () => `<div class="term-output-block">
• <strong>WhatsApp :</strong> <a href="https://wa.me/2290161631431" target="_blank" style="color:var(--term-green)">+229 01 61 63 14 31</a><br>
• <strong>Téléphone :</strong> +229 01 95 70 75 64<br>
• <strong>Email :</strong> <a href="mailto:nombaalbouchra71@gmail.com" style="color:var(--term-cyan)">nombaalbouchra71@gmail.com</a>
</div>`,

        clear: () => {
            if (terminalLogs) terminalLogs.innerHTML = '';
            return null;
        }
    };

    function executeTerminalCommand(rawCmd) {
        if (!rawCmd.trim()) return;
        const cmd = rawCmd.trim().toLowerCase();

        if (cmd === 'clear') {
            terminalCommands.clear();
            return;
        }

        const cmdLine = document.createElement('div');
        cmdLine.className = 'term-line';
        cmdLine.innerHTML = `<span style="color:var(--term-green)">nomba@dev:~$</span> ${rawCmd}`;
        terminalLogs.appendChild(cmdLine);

        let output = null;
        if (cmd === 'help' || cmd === 'man') {
            output = terminalCommands.help();
        } else if (cmd.includes('skill') || cmd === 'cat skills.json') {
            output = terminalCommands.skills();
        } else if (cmd.includes('project') || cmd.includes('ls')) {
            output = terminalCommands.projects();
        } else if (cmd === 'about' || cmd === 'whoami' || cmd === 'bio') {
            output = terminalCommands.about();
        } else if (cmd.includes('contact') || cmd.includes('get-contact') || cmd === 'whatsapp') {
            output = terminalCommands.contact();
        } else {
            output = `<div class="term-output-block" style="color:#f87171">Commande inconnue: '${rawCmd}'. Tapez <span style="color:var(--term-yellow)">help</span> pour voir les commandes.</div>`;
        }

        if (output) {
            const outEl = document.createElement('div');
            outEl.innerHTML = output;
            terminalLogs.appendChild(outEl);
        }

        if (terminalScreen) {
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
        }
    }

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                executeTerminalCommand(terminalInput.value);
                terminalInput.value = '';
            }
        });
    }

    document.querySelectorAll('.term-cmd-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            executeTerminalCommand(btn.dataset.cmd);
        });
    });


    /* ===================================================
       3. SCROLL REVEAL
       =================================================== */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal-item').forEach(el => {
        revealObserver.observe(el);
    });


    /* ===================================================
       4. DARK / LIGHT THEME
       =================================================== */
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        themeToggle.innerHTML = theme === 'dark'
            ? '<i class="fa-regular fa-sun"></i>'
            : '<i class="fa-regular fa-moon"></i>';
    }

    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('portfolio_theme', next);
            updateThemeIcon(next);
        });
    }


    /* ===================================================
       5. MOBILE NAVIGATION
       =================================================== */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => navMenu.classList.remove('active'));
        });
    }


    /* ===================================================
       6. PROJECTS FILTER
       =================================================== */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card-hx');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    /* ===================================================
       7. PROJECT SPECIFICATIONS MODAL
       =================================================== */
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.getElementById('modal-close');

    const projectData = {
        marcx: {
            title: "Marcx-Dressing",
            url: "https://marcx-dressing.onrender.com/",
            cat: "E-Commerce / Prêt-à-porter",
            specs: [
                { k: "Architecture", v: "Single Page Application" },
                { k: "Gestion Panier", v: "Session Storage & Live Updates" },
                { k: "Tunnel de Commande", v: "WhatsApp Automated Linker" },
                { k: "Déploiement", v: "Render Cloud (HTTPS/SSL)" }
            ],
            desc: "Boutique e-commerce complète de mode et prêt-à-porter. Catalogue dynamique multicritères, panier en temps réel et validation directe de commande via WhatsApp."
        },
        smoke: {
            title: "Smoke Paradise",
            url: "https://smoke-paradise.onrender.com/",
            cat: "E-Commerce & Vitrine Digitale",
            specs: [
                { k: "Design System", v: "Dark Obsidian Modern UI" },
                { k: "Composants", v: "Galerie Immersive & Cartes Produits" },
                { k: "Responsive", v: "Mobile-First Fluid Layout" },
                { k: "Hébergement", v: "Render Web Service" }
            ],
            desc: "Plateforme digitale offrant une expérience immersive et moderne. Conçue pour maximiser l'engagement client et fluidifier la prise de contact et la passation de commandes."
        },
        globalgest: {
            title: "GlobalGest SCMS",
            url: "https://globalgesttest.scms",
            cat: "ERP & Logiciel de Gestion Commerciale",
            specs: [
                { k: "Typologie", v: "Logiciel Métier Web (SCMS/ERP)" },
                { k: "Modules", v: "Stocks, Factures, Achats & Ventes" },
                { k: "Reporting", v: "Tableaux de Bord KPI" },
                { k: "Environnement", v: "Production & Tests" }
            ],
            desc: "Solution logicielle web d'entreprise pour la gestion commerciale intégrée : traçabilité des stocks, émission automatisée de factures et suivi de la performance financière."
        },
        healthy: {
            title: "HEALTHY Tech — Santé Communautaire & IA",
            url: "assets/docs/memoire-soutenance-healthy-cnib.pdf",
            docUrl: "assets/docs/memoire-soutenance-healthy-cnib.pdf",
            isDoc: true,
            cat: "HealthTech & IA • Dossier Investisseurs (Projet Soutenu au CNIB)",
            specs: [
                { k: "Thème Officiel", v: "Santé communautaire & IA pour la détection précoce au Bénin" },
                { k: "Date Soutenance", v: "15 Février 2025 (Promotion Août 2024)" },
                { k: "Cadre Académique", v: "CNIB Jéricho — Ministère du Numérique et de la Digitalisation" },
                { k: "Direction Mémoire", v: "Sous la direction de Mr FRANCEGBE Ulrich Romain" },
                { k: "Auteurs / Fondateurs", v: "NOMBA Al'bouchra (Dir. Générale) & KOURA Malachie (Dir. Technique)" },
                { k: "Besoin Financement", v: "12 000 000 FCFA (Dev, Marketing, Déploiement)" },
                { k: "Seuil Rentabilité", v: "Atteint à 18 mois (1 000 000 FCFA / mois)" },
                { k: "Prévisions CA", v: "An 1 : 15 000 000 FCFA | An 2 : 30 000 000 FCFA (Bénéfice : 15M)" },
                { k: "Objectif Utilisateurs", v: "500 000 utilisateurs actifs d'ici l'An 3" },
                { k: "Technologies", v: "React, Node.js, MongoDB/PostgreSQL, Machine Learning IA, 2FA" },
                { k: "Conformité Légale", v: "Protection des données de santé, conformité RGPD & lois béninoises" }
            ],
            desc: "Mémoire et projet d'entreprise innovante soutenu avec succès devant le jury officiel du Centre Numérique International du Bénin (CNIB). La plateforme HEALTHY combine intelligence artificielle prédictive, télémédecine et prévention communautaire pour réduire les inégalités d'accès aux soins de santé au Bénin et en Afrique de l'Ouest."
        }
    };

    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const data = projectData[btn.dataset.project];
            if (!data) return;

            const actionHtml = data.isDoc ? `
                <div style="display:flex;gap:0.75rem;flex-wrap:wrap">
                    <a href="${data.docUrl}" target="_blank" download class="btn-primary-hx" style="flex:1;justify-content:center;text-decoration:none">
                        <i class="fa-solid fa-download"></i> Télécharger le Mémoire PDF (47 pages)
                    </a>
                    <a href="${data.docUrl}" target="_blank" rel="noopener" class="btn-ghost-hx" style="flex:1;justify-content:center;text-decoration:none">
                        <i class="fa-solid fa-file-pdf"></i> Lire le Document en Ligne
                    </a>
                </div>
            ` : `
                <a href="${data.url}" target="_blank" rel="noopener" class="btn-primary-hx" style="display:inline-flex;width:100%;justify-content:center;text-decoration:none">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Ouvrir le Projet Live
                </a>
            `;

            modalBody.innerHTML = `
                <div style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:var(--hx-blue);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem">${data.cat}</div>
                <h2 style="font-family:var(--font-heading);font-size:1.75rem;font-style:italic;font-weight:400;color:var(--text-primary);letter-spacing:-0.03em;margin-bottom:0.75rem">${data.title}</h2>
                <p style="font-size:0.9rem;color:var(--text-secondary);line-height:1.7;margin-bottom:1.5rem">${data.desc}</p>
                <div style="background:var(--bg-elevated);border:1px solid var(--border);border-radius:var(--radius-md);padding:1rem;margin-bottom:1.5rem;font-family:var(--font-mono);font-size:0.8rem;">
                    ${data.specs.map(s => `
                        <div style="display:flex;justify-content:space-between;gap:1rem;padding:0.35rem 0;border-bottom:1px solid var(--border-subtle)">
                            <span style="color:var(--text-muted)">${s.k}</span>
                            <span style="color:var(--text-primary);font-weight:600;text-align:right">${s.v}</span>
                        </div>
                    `).join('')}
                </div>
                ${actionHtml}
            `;

            modal.classList.add('active');
        });
    });

    if (modalClose) modalClose.addEventListener('click', () => modal.classList.remove('active'));
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });


    /* ===================================================
       8. CV MODAL & PRINT
       =================================================== */
    const cvModal = document.getElementById('cv-modal');
    const btnPrintCv = document.getElementById('btn-print-cv');
    const cvModalClose = document.getElementById('cv-modal-close');
    const btnTriggerPrint = document.getElementById('btn-trigger-print');

    if (btnPrintCv) btnPrintCv.addEventListener('click', () => cvModal.classList.add('active'));
    if (cvModalClose) cvModalClose.addEventListener('click', () => cvModal.classList.remove('active'));
    if (cvModal) cvModal.addEventListener('click', (e) => { if (e.target === cvModal) cvModal.classList.remove('active'); });
    if (btnTriggerPrint) btnTriggerPrint.addEventListener('click', () => window.print());

    // Keyboard close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal && modal.classList.remove('active');
            cvModal && cvModal.classList.remove('active');
        }
    });


    /* ===================================================
       9. CONTACT FORM & WHATSAPP
       =================================================== */
    const contactForm = document.getElementById('portfolio-contact-form');
    const btnSendWhatsapp = document.getElementById('btn-send-whatsapp');
    const formStatus = document.getElementById('form-status');

    function getFieldVal(id) {
        const el = document.getElementById(id);
        return el ? el.value.trim() : '';
    }

    if (btnSendWhatsapp) {
        btnSendWhatsapp.addEventListener('click', () => {
            const name = getFieldVal('contact-name');
            const email = getFieldVal('contact-email');
            const subject = getFieldVal('contact-subject');
            const message = getFieldVal('contact-message');

            if (!name || !message) {
                if (formStatus) {
                    formStatus.className = 'form-feedback error';
                    formStatus.textContent = currentLang === 'fr'
                        ? '⚠ Veuillez renseigner votre Nom et votre Message.'
                        : '⚠ Please enter your Name and Message.';
                }
                return;
            }

            const text =
                `*📬 Prise de contact — Portfolio NOMBA AL'BOUCHRA*%0A%0A` +
                `👤 *Nom:* ${encodeURIComponent(name)}%0A` +
                `✉️ *Email:* ${encodeURIComponent(email || 'Non fourni')}%0A` +
                `📌 *Objet:* ${encodeURIComponent(subject || 'Discussion projet')}%0A%0A` +
                `💬 *Message:*%0A${encodeURIComponent(message)}`;

            window.open(`https://wa.me/2290161631431?text=${text}`, '_blank');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = getFieldVal('contact-name');
            const email = getFieldVal('contact-email');
            const subject = getFieldVal('contact-subject');
            const message = getFieldVal('contact-message');

            const mailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
            const mailBody = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:nombaalbouchra71@gmail.com?subject=${mailSubject}&body=${mailBody}`;

            if (formStatus) {
                formStatus.className = 'form-feedback success';
                formStatus.textContent = currentLang === 'fr'
                    ? '✓ Client email ouvert avec succès !'
                    : '✓ Email client opened successfully!';
            }
        });
    }


    /* ===================================================
       10. BACK TO TOP
       =================================================== */
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });
    }


    /* ===================================================
       11. NAVBAR SCROLL EFFECT
       =================================================== */
    const navbarPill = document.getElementById('navbar-pill');

    window.addEventListener('scroll', () => {
        if (!navbarPill) return;
        if (window.scrollY > 60) {
            navbarPill.style.boxShadow = 'var(--nav-glass-shadow-inner), 0 4px 30px rgba(0,0,0,0.15)';
        } else {
            navbarPill.style.boxShadow = 'var(--nav-glass-shadow-inner), 0 2px 16px rgba(0,0,0,0.1)';
        }
    }, { passive: true });


    /* ===================================================
       12. FOOTER YEAR
       =================================================== */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();


    /* ===================================================
       13. EXECUTIVE PHOTO GALLERY & LIGHTBOX MODAL
       =================================================== */
    const activePhoto = document.getElementById('active-profile-photo');
    const photoThumbBtns = document.querySelectorAll('.photo-thumb-btn');
    const photoModal = document.getElementById('photo-modal');
    const photoModalImg = document.getElementById('photo-modal-img');
    const photoModalCaption = document.getElementById('photo-modal-caption');
    const photoModalClose = document.getElementById('photo-modal-close');

    // Function to open photo modal
    window.openPhotoModal = function(src, caption) {
        if (!photoModal || !photoModalImg) return;
        photoModalImg.src = src;
        if (photoModalCaption) {
            photoModalCaption.textContent = caption || "NOMBA AL'BOUCHRA";
        }
        photoModal.classList.add('active');
    };

    // Close photo modal
    if (photoModalClose) {
        photoModalClose.addEventListener('click', () => {
            photoModal.classList.remove('active');
        });
    }

    if (photoModal) {
        photoModal.addEventListener('click', (e) => {
            if (e.target === photoModal) {
                photoModal.classList.remove('active');
            }
        });
    }

    // Photo Switcher in About section
    photoThumbBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetSrc = btn.dataset.src;
            const targetCaption = btn.dataset.caption;

            photoThumbBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (activePhoto && targetSrc) {
                activePhoto.style.opacity = '0.3';
                activePhoto.style.transform = 'scale(0.97)';
                setTimeout(() => {
                    activePhoto.src = targetSrc;
                    activePhoto.dataset.caption = targetCaption || '';
                    activePhoto.style.opacity = '1';
                    activePhoto.style.transform = 'scale(1)';
                }, 200);
            }
        });
    });

    // Clicking main profile photo opens lightbox
    if (activePhoto) {
        activePhoto.style.cursor = 'zoom-in';
        activePhoto.addEventListener('click', () => {
            const activeBtn = document.querySelector('.photo-thumb-btn.active');
            const caption = activeBtn ? activeBtn.dataset.caption : "Portrait — NOMBA AL'BOUCHRA";
            window.openPhotoModal(activePhoto.src, caption);
        });
    }

    // Add Escape key handler for photo modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && photoModal && photoModal.classList.contains('active')) {
            photoModal.classList.remove('active');
        }
    });


    /* ===================================================
       14. MATRIX HACKER CODE BACKGROUND CANVAS
       =================================================== */
    const matrixCanvas = document.getElementById('matrix-canvas');
    const matrixToggle = document.getElementById('matrix-toggle');

    if (matrixCanvas) {
        const ctx = matrixCanvas.getContext('2d');
        let width = matrixCanvas.width = window.innerWidth;
        let height = matrixCanvas.height = window.innerHeight;

        // Rich character set: binary, hex, logic & developer syntax
        const chars = '0101010101010123456789ABCDEF{}<>/=;+-%$#@!*&|~AI.HEALTHY.NOMBA()=>async.await';
        const fontSize = 14;
        let columns = Math.floor(width / fontSize);
        let drops = [];

        function initDrops() {
            columns = Math.floor(width / fontSize);
            drops = [];
            for (let i = 0; i < columns; i++) {
                drops[i] = Math.floor(Math.random() * -height / fontSize);
            }
        }
        initDrops();

        window.addEventListener('resize', () => {
            width = matrixCanvas.width = window.innerWidth;
            height = matrixCanvas.height = window.innerHeight;
            initDrops();
        }, { passive: true });

        let lastTime = 0;
        const fpsInterval = 35; // ~28-30 FPS for fluid matrix rain

        function drawMatrix(timestamp) {
            requestAnimationFrame(drawMatrix);

            if (document.body.classList.contains('matrix-off')) return;

            const elapsed = timestamp - lastTime;
            if (elapsed < fpsInterval) return;
            lastTime = timestamp - (elapsed % fpsInterval);

            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            
            // Subtle fade effect to create the code rain trail
            ctx.fillStyle = isDark ? 'rgba(13, 13, 13, 0.08)' : 'rgba(250, 250, 248, 0.09)';
            ctx.fillRect(0, 0, width, height);

            ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;

                // Alternate between cyan and matrix green with white head
                if (Math.random() > 0.92) {
                    ctx.fillStyle = isDark ? '#ffffff' : '#0369a1';
                    ctx.shadowBlur = isDark ? 6 : 0;
                    ctx.shadowColor = '#38bdf8';
                } else if (i % 3 === 0) {
                    ctx.fillStyle = isDark ? '#38bdf8' : '#0284c7';
                    ctx.shadowBlur = 0;
                } else {
                    ctx.fillStyle = isDark ? '#34d399' : '#059669';
                    ctx.shadowBlur = 0;
                }

                if (y > 0) {
                    ctx.fillText(text, x, y);
                }

                if (y > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        requestAnimationFrame(drawMatrix);

        // Matrix FX Toggle (Normal -> Boost -> Off -> Normal)
        let matrixState = localStorage.getItem('portfolio_matrix_mode') || 'normal';
        function applyMatrixState(state) {
            document.body.classList.remove('matrix-boost', 'matrix-off');
            if (state === 'boost') {
                document.body.classList.add('matrix-boost');
                if (matrixToggle) {
                    matrixToggle.classList.add('active');
                    matrixToggle.title = 'Effet Matrix: Lumineux (Cliquez pour désactiver)';
                }
            } else if (state === 'off') {
                document.body.classList.add('matrix-off');
                if (matrixToggle) {
                    matrixToggle.classList.remove('active');
                    matrixToggle.title = 'Effet Matrix: Désactivé (Cliquez pour réactiver)';
                }
            } else {
                if (matrixToggle) {
                    matrixToggle.classList.add('active');
                    matrixToggle.title = 'Effet Matrix: Actif (Cliquez pour intensifier)';
                }
            }
            localStorage.setItem('portfolio_matrix_mode', state);
        }
        applyMatrixState(matrixState);

        if (matrixToggle) {
            matrixToggle.addEventListener('click', () => {
                if (matrixState === 'normal') matrixState = 'boost';
                else if (matrixState === 'boost') matrixState = 'off';
                else matrixState = 'normal';
                applyMatrixState(matrixState);
            });
        }
    }


    /* ===================================================
       15. HACKER LIVE CODE STREAM TYPEWRITER
       =================================================== */
    const hackerCodeEl = document.getElementById('hacker-code-typing');
    if (hackerCodeEl) {
        const codeSnippets = [
            "const ai = new HealthModel({ precision: 0.99 });",
            "await ai.detectEarlySymptoms(community_data);",
            "deployCloud('render', { ssl: true, status: 200 });",
            "SELECT * FROM inventory WHERE stock_level > 0;",
            "system.connect({ architect: 'NOMBA Al\\'bouchra' });",
            "git commit -m 'feat: launch HEALTHY v2.5 to prod'",
            "init_ecommerce_cart({ realtime_whatsapp: true });",
            "while(learning) { innovate(); buildFuture(); }"
        ];

        let snippetIdx = 0;
        let charIdx = 0;
        let isDeleting = false;

        function typeCode() {
            const currentSnippet = codeSnippets[snippetIdx];

            if (isDeleting) {
                hackerCodeEl.textContent = currentSnippet.substring(0, charIdx - 1);
                charIdx--;
            } else {
                hackerCodeEl.textContent = currentSnippet.substring(0, charIdx + 1);
                charIdx++;
            }

            let typeSpeed = isDeleting ? 20 : 45;

            if (!isDeleting && charIdx === currentSnippet.length) {
                typeSpeed = 2200; // Pause at end of snippet
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                isDeleting = false;
                snippetIdx = (snippetIdx + 1) % codeSnippets.length;
                typeSpeed = 400; // Pause before next snippet
            }

            setTimeout(typeCode, typeSpeed);
        }

        setTimeout(typeCode, 800);
    }

});
