/* --- VARIAVEIS GLOBAIS --- */
:root {
    /* Cores de Fundo */
    --bg-main: #050506;       /* Preto profundo */
    --bg-card: #121214;       /* Cinza chumbo leve */
    --bg-input: #1C1C1F;      /* Fundo de inputs */
    
    /* Cores de Destaque */
    --primary: #00E054;       /* Verde Neon (Marca) */
    --primary-glow: rgba(0, 224, 84, 0.4);
    --primary-hover: #00B342;
    
    /* Tipografia */
    --text-main: #FFFFFF;
    --text-muted: #A1A1AA;
    
    /* Bordas e Formas */
    --border: #27272A;
    --radius: 16px;
    --radius-sm: 8px;
}

/* --- RESET & BASE --- */
* { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }

body { 
    background-color: var(--bg-main); 
    color: var(--text-main); 
    line-height: 1.6;
    overflow-x: hidden;
}

html { scroll-behavior: smooth; }

/* Efeitos de Luz (Glow) de Fundo */
.glow-bg {
    position: fixed;
    width: 800px; height: 800px;
    background: radial-gradient(circle, rgba(0,224,84,0.04) 0%, rgba(0,0,0,0) 65%);
    border-radius: 50%;
    z-index: -1;
    pointer-events: none;
}
.top-center { top: -400px; left: 50%; transform: translateX(-50%); }

/* --- HEADER (CORRIGIDO) --- */
header {
    display: flex; justify-content: space-between; align-items: center;
    padding: 15px 5%; 
    background: rgba(5,5,6,0.95); backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0; z-index: 100;
}

.logo { 
    font-weight: 900; font-size: 1.5rem; color: #fff; 
    display: flex; align-items: center; gap: 8px; letter-spacing: -1px;
    flex-shrink: 0; 
}
.logo i, .logo span { color: var(--primary); }

/* Container Nav Flexível */
nav {
    display: flex; 
    align-items: center; 
    gap: 40px; 
}

.nav-links { 
    display: flex; 
    gap: 30px; 
    align-items: center; 
}

.nav-links a { 
    color: var(--text-muted); text-decoration: none; 
    font-weight: 500; font-size: 0.95rem; transition: 0.3s; 
    white-space: nowrap; 
}
.nav-links a:hover { color: #fff; }

.btn-login { 
    background: rgba(255,255,255,0.05); border: 1px solid var(--border);
    color: #fff; text-decoration: none; 
    padding: 10px 20px; border-radius: 50px;
    font-weight: 600; font-size: 0.9rem;
    display: flex; align-items: center; gap: 8px;
    transition: 0.3s; white-space: nowrap;
}
.btn-login:hover { border-color: var(--primary); color: var(--primary); background: rgba(0, 224, 84, 0.05); }


/* --- HERO SECTION (Cinematográfico) --- */
.hero {
    position: relative;
    height: 85vh;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 20px;
    overflow: hidden;
    margin-bottom: 0; 
}

/* Imagem de Fundo com Animação */
.hero-bg-image {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    /* Placeholder Dark/Movie */
    background-image: url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    z-index: -2;
    /* Máscara escura forte para leitura */
    box-shadow: inset 0 0 0 1000px rgba(5, 5, 6, 0.85);
    animation: pulseBackground 15s infinite alternate ease-in-out;
}

@keyframes pulseBackground {
    0% { transform: scale(1); }
    100% { transform: scale(1.08); }
}

/* Degrade na base do hero para conectar com a proxima section */
.hero::after {
    content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 150px;
    background: linear-gradient(to top, var(--bg-main), transparent);
    z-index: -1;
}

.hero-content { position: relative; z-index: 1; max-width: 800px; }

.badge-hero {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(0,224,84,0.1); border: 1px solid rgba(0,224,84,0.3);
    color: var(--primary); font-size: 0.85rem; font-weight: 700;
    padding: 8px 20px; border-radius: 50px; margin-bottom: 30px;
    text-transform: uppercase; letter-spacing: 1px;
    backdrop-filter: blur(5px);
}

h1 { 
    font-size: 4rem; line-height: 1.1; margin-bottom: 25px; 
    letter-spacing: -2px; font-weight: 900; color: #fff;
    text-shadow: 0 0 40px rgba(0,0,0,0.5);
}

.hero p { 
    color: rgba(255,255,255,0.85); font-size: 1.25rem; 
    margin-bottom: 40px; max-width: 600px; 
    margin-left: auto; margin-right: auto; 
}

.hero-actions { display: flex; justify-content: center; margin-bottom: 40px; }
.hero-info { display: flex; gap: 30px; justify-content: center; color: #fff; font-size: 1rem; font-weight: 500; }
.hero-info i { color: var(--primary); font-size: 1.2rem; margin-right: 5px;}

/* --- CONTENT PREVIEW (Barra de Ícones) --- */
.content-preview {
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 30px 5%;
}
.content-grid {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}
.content-item {
    display: flex; align-items: center; justify-content: center; gap: 15px;
    background: rgba(255,255,255,0.02);
    padding: 20px; border-radius: 12px;
    font-weight: 600; color: #fff;
    border: 1px solid transparent; transition: 0.3s;
}
.content-item:hover { border-color: var(--primary); background: rgba(0,224,84,0.05); }
.icon-content { font-size: 2rem; color: var(--primary); }

/* --- FEATURES --- */
.features { padding: 100px 5%; }
.section-header { text-align: center; margin-bottom: 60px; }
.section-header h2 { font-size: 2.5rem; margin-bottom: 15px; font-weight: 800;}
.section-header p { color: var(--text-muted); font-size: 1.1rem; }

.features-grid { 
    display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 25px; max-width: 1200px; margin: 0 auto;
}
.feature-card { 
    background: var(--bg-card); padding: 40px 30px; 
    border-radius: var(--radius); border: 1px solid var(--border); 
    transition: 0.3s; 
}
.feature-card:hover { border-color: var(--primary); transform: translateY(-5px); }
.icon-box { font-size: 2.5rem; color: var(--primary); margin-bottom: 20px; }
.feature-card h3 { font-size: 1.3rem; margin-bottom: 10px; font-weight: 700; }
.feature-card p { color: var(--text-muted); font-size: 0.95rem; }

/* --- FORMULÁRIO DE TESTE --- */
.test-section { 
    padding: 100px 5%; 
    background: linear-gradient(180deg, var(--bg-main) 0%, var(--bg-card) 100%); 
}
.form-container { 
    max-width: 520px; margin: 0 auto; 
    background: #0E0E10; border: 1px solid var(--border); 
    border-radius: 24px; padding: 40px; 
    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.8); 
}
.form-header { text-align: center; margin-bottom: 30px; }
.form-header h2 { 
    display: flex; align-items: center; justify-content: center; 
    gap: 10px; font-size: 1.8rem; margin-bottom: 5px; font-weight: 800;
}
.form-header p { color: var(--text-muted); }

/* Apps Step */
.apps-grid { display: flex; justify-content: center; gap: 15px; margin-bottom: 25px; }
.app-icon { 
    width: 60px; height: 60px; background: var(--bg-input); 
    border-radius: 12px; display: flex; align-items: center; justify-content: center; 
    font-size: 1.8rem; color: var(--text-muted); border: 1px solid var(--border); 
}

/* Inputs Modernos */
.input-group { margin-bottom: 20px; }
.input-group label { display: block; margin-bottom: 8px; color: var(--text-muted); font-size: 0.9rem; font-weight: 500; }
.input-wrapper { position: relative; }

.input-icon { 
    position: absolute; left: 16px; top: 50%; transform: translateY(-50%); 
    color: var(--text-muted); font-size: 1.2rem; pointer-events: none;
}

input, select { 
    width: 100%; padding: 14px 14px 14px 48px; 
    background: var(--bg-input); border: 1px solid var(--border); 
    border-radius: 10px; color: #fff; font-size: 1rem; 
    outline: none; transition: 0.3s; font-weight: 500;
}
input:focus, select:focus { border-color: var(--primary); box-shadow: 0 0 0 3px rgba(0,224,84,0.1); }

/* Phone layout */
.phone-wrapper { display: flex; gap: 10px; }
.country-wrapper { position: relative; width: 100px; }
#flag-icon { 
    position: absolute; left: 12px; top: 50%; 
    transform: translateY(-50%); width: 20px; 
    z-index: 2; pointer-events: none;
}
.country-select { padding-left: 40px; appearance: none; cursor: pointer; }
.full { width: 100%; }

/* Botões do Form */
.action-buttons { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }

.btn-primary { 
    background: var(--primary); color: #000; 
    padding: 14px 32px; border-radius: var(--radius-sm); 
    text-decoration: none; font-weight: 700; border: none; 
    cursor: pointer; transition: 0.3s; 
    display: flex; align-items: center; justify-content: center; gap: 8px; 
    font-size: 1rem; box-shadow: 0 0 20px rgba(0,224,84,0.2); 
}
.btn-primary:hover { background: var(--primary-hover); transform: translateY(-2px); box-shadow: 0 0 30px rgba(0,224,84,0.4); }

.btn-secondary { 
    background: var(--bg-input); color: var(--text-muted); 
    border: 1px solid var(--border); padding: 12px 20px; 
    border-radius: 8px; cursor: pointer; display: flex; 
    align-items: center; gap: 8px; font-weight: 600; transition: 0.3s;
}
.btn-secondary:hover { border-color: var(--text-main); color: #fff; }

.full-width { width: 100%; }
.big-btn { padding: 16px 40px; font-size: 1.1rem; }


/* --- PRICING REBUSCADO (Wide Panel) - NOVO CSS --- */
.pricing-section { 
    padding: 120px 5%; 
    background: var(--bg-main);
    position: relative;
}

.premium-offer-container {
    max-width: 1100px; margin: 0 auto;
    background: linear-gradient(145deg, #101012 0%, #09090b 100%);
    border-radius: 30px;
    padding: 50px;
    position: relative;
    overflow: hidden;
    /* Borda brilhante sutil */
    border: 1px solid rgba(255,255,255,0.05);
    box-shadow: 0 50px 100px -20px rgba(0,0,0,0.8);
    display: grid;
    grid-template-columns: 1fr 1.5fr; 
    gap: 60px;
    align-items: center;
}

/* Animação de Borda (Glow viajante) */
.premium-offer-container::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary), transparent);
    animation: borderFlow 4s infinite linear;
}

@keyframes borderFlow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

/* Lado Esquerdo: Preço e Ação */
.offer-left { text-align: left; }

.offer-tag {
    background: var(--primary); color: #000; font-weight: 800;
    padding: 6px 12px; border-radius: 6px; font-size: 0.8rem;
    display: inline-block; margin-bottom: 20px; text-transform: uppercase;
}

.offer-price { margin-bottom: 25px; }
.offer-price .currency { font-size: 2rem; color: var(--text-muted); font-weight: 500;}
.offer-price .amount { font-size: 5.5rem; color: #fff; font-weight: 800; line-height: 1; letter-spacing: -3px;}
.offer-price .term { font-size: 1.1rem; color: var(--text-muted); }

.payment-methods { display: flex; gap: 15px; margin-top: 20px; opacity: 0.8; font-size: 1.5rem; color: var(--text-muted); align-items: center;}
.secure-checkout-text { font-size: 0.8rem; display: flex; align-items: center; gap: 5px; margin-left: auto; color: var(--primary); font-weight: 600;}

/* Lado Direito: Grid de Benefícios */
.offer-right h3 { font-size: 2rem; margin-bottom: 10px; line-height: 1.1; font-weight: 800; color: #fff;}
.offer-right p { color: var(--text-muted); margin-bottom: 30px; font-size: 1.1rem;}

.specs-grid {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;
}

.spec-item {
    display: flex; gap: 15px; align-items: flex-start;
    background: rgba(255,255,255,0.03); padding: 15px;
    border-radius: 12px; border: 1px solid transparent;
    transition: 0.3s;
}
.spec-item:hover { border-color: rgba(0,224,84,0.3); background: rgba(0,224,84,0.05); }

.spec-icon { 
    background: rgba(0,224,84,0.1); width: 40px; height: 40px; 
    border-radius: 8px; display: flex; align-items: center; justify-content: center;
    color: var(--primary); font-size: 1.2rem; flex-shrink: 0;
}

.spec-info h4 { font-size: 0.95rem; color: #fff; margin-bottom: 2px; font-weight: 700;}
.spec-info span { font-size: 0.8rem; color: var(--text-muted); }

/* --- FOOTER --- */
footer { 
    background: #020202; border-top: 1px solid var(--border); 
    padding-top: 80px; font-size: 0.95rem; 
}
.footer-container { 
    max-width: 1200px; margin: 0 auto; padding: 0 5%;
    display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 60px;
}

.footer-logo { 
    font-size: 1.4rem; font-weight: 800; color: #fff; 
    margin-bottom: 20px; display: flex; align-items: center; gap: 5px; 
}
.footer-logo span { color: var(--primary); }
.footer-col p { color: var(--text-muted); margin-bottom: 25px; max-width: 300px; }

.social-links { display: flex; gap: 15px; }
.social-btn { 
    width: 40px; height: 40px; border-radius: 50%; 
    background: var(--bg-card); border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    color: #fff; text-decoration: none; transition: 0.3s; font-size: 1.2rem;
}
.social-btn:hover { border-color: var(--primary); background: var(--primary); color: #000; transform: translateY(-3px); }

.footer-col h4 { color: #fff; margin-bottom: 25px; font-size: 1.1rem; font-weight: 700;}
.footer-links, .contact-list { list-style: none; }
.footer-links li { margin-bottom: 12px; }
.footer-links a { color: var(--text-muted); text-decoration: none; transition: 0.2s; }
.footer-links a:hover { color: var(--primary); }

.contact-list li { display: flex; gap: 10px; align-items: center; color: var(--text-muted); margin-bottom: 15px; }
.contact-list i { color: var(--primary); }

.footer-bottom { 
    margin-top: 80px; padding: 30px 5%; border-top: 1px solid var(--border); 
    display: flex; justify-content: space-between; align-items: center; 
    background: #000;
}
.copyright { color: var(--text-muted); font-size: 0.85rem; }
.security-badges { display: flex; gap: 20px; }
.badge-item { 
    display: flex; align-items: center; gap: 6px; 
    color: var(--text-muted); font-size: 0.8rem; 
    border: 1px solid var(--border); padding: 5px 12px; 
    border-radius: 6px; 
}
.badge-item i { color: var(--primary); }

/* --- TOAST & UTILITARIOS --- */
.hidden { display: none !important; }
.fade-in { animation: fadeIn 0.5s ease forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

.toast {
    position: fixed; bottom: 20px; right: 20px; padding: 15px 20px;
    background: var(--bg-card); border: 1px solid var(--border); 
    border-radius: 8px; z-index: 200; box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    font-weight: 600;
}
.toast.success { border-color: var(--primary); color: var(--primary); }
.toast.error { border-color: #ff4444; color: #ff4444; }

/* --- RESPONSIVIDADE --- */
@media (max-width: 960px) {
    /* Header Mobile */
    .nav-links { display: none; } /* Esconde links no mobile */
    nav { gap: 10px; }
    
    /* Hero */
    h1 { font-size: 3rem; }
    .hero { height: auto; padding: 140px 20px 80px; }
    .hero-actions { flex-direction: column; width: 100%; }
    .btn-primary { width: 100%; }
    
    /* Pricing Mobile */
    .premium-offer-container { 
        grid-template-columns: 1fr; 
        padding: 30px; 
        text-align: center;
        gap: 40px;
    }
    .offer-left { text-align: center; order: 2; /* Preço vai para baixo no mobile */ }
    .offer-right { order: 1; }
    .specs-grid { grid-template-columns: 1fr; text-align: left;}
    .payment-methods { justify-content: center; flex-wrap: wrap; }
    .secure-checkout-text { margin-left: 0; width: 100%; justify-content: center; margin-top: 10px;}
    
    /* Footer */
    .footer-container { grid-template-columns: 1fr; gap: 40px; }
    .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
}