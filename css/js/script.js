// --- DOM Elements ---
const btnJaInstalei = document.getElementById('btn-ja-instalei');
const stepApps = document.getElementById('step-apps');
const stepForm = document.getElementById('step-form');
const formTeste = document.getElementById('formTeste');
const inputPhone = document.getElementById('whatsapp');
const inputCountry = document.getElementById('pais');
const toast = document.getElementById('toast');
const btnSubmit = formTeste.querySelector('button[type="submit"]');
const btnText = document.getElementById('btn-text');

// --- State Management ---

// 1. Botão "Já Instalei" (Avançar Etapa)
btnJaInstalei.addEventListener('click', () => {
    stepApps.classList.add('hidden');
    stepForm.classList.remove('hidden');
    stepForm.classList.add('fade-in'); // Classe CSS se quiser animação
});

// 2. Máscara de Telefone Inteligente
inputPhone.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    const country = inputCountry.value;

    if (country === '+55') {
        // Formato Brasileiro (XX) XXXXX-XXXX
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    
    e.target.value = value;
});

// 3. Simulação de Envio do Formulário (Checkout/Teste)
formTeste.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // UI: Loading State
    setLoading(true);

    // Dados do Formulário
    const formData = {
        nome: document.getElementById('nome').value,
        whatsapp: cleanPhone(inputPhone.value),
        pais: inputCountry.value,
        email: document.getElementById('email').value,
        horario: document.getElementById('horario').value,
        ip: getMockUserIP() // Vem do mockData.js
    };

    // Formata o número completo (+5511...)
    const fullNumber = formData.pais + formData.whatsapp;

    try {
        // Simula delay de rede (2 segundos)
        await new Promise(r => setTimeout(r, 2000));

        // VALIDAÇÃO 1: Check de IP Bloqueado
        if (MockDB.blockedIPs.includes(formData.ip)) {
            throw new Error("Este endereço IP já possui solicitações recentes bloqueadas.");
        }

        // VALIDAÇÃO 2: Check de Número Repetido
        if (MockDB.usedPhones.includes(fullNumber)) {
            throw new Error("Este número de WhatsApp já solicitou um teste anteriormente.");
        }

        // SUCESSO
        showToast("success", "✅ Solicitação Recebida! Seus dados chegarão no WhatsApp.");
        formTeste.reset();
        
        // Retorna para o passo inicial após 3 seg
        setTimeout(() => {
            stepForm.classList.add('hidden');
            stepApps.classList.remove('hidden');
        }, 3000);

    } catch (error) {
        // ERRO
        showToast("error", `⚠️ ${error.message}`);
    } finally {
        setLoading(false);
    }
});

// --- Helpers ---

function cleanPhone(phone) {
    return phone.replace(/\D/g, '');
}

function setLoading(isLoading) {
    if (isLoading) {
        btnSubmit.disabled = true;
        btnText.textContent = "Processando...";
        // Aqui você pode mostrar um spinner CSS
    } else {
        btnSubmit.disabled = false;
        btnText.textContent = "Gerar Solicitação";
    }
}

// Sistema de Toast (Notificação)
function showToast(type, message) {
    toast.className = `toast ${type}`;
    toast.textContent = message;
    toast.classList.remove('hidden');

    // Auto-hide após 4 segundos
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

// Simulação de Checkout
function simularCheckout() {
    const btn = event.target;
    const originalText = btn.textContent;
    
    btn.textContent = "Redirecionando...";
    btn.disabled = true;

    setTimeout(() => {
        alert("🔄 Redirecionando para o Mercado Pago...\n(Isso é uma simulação do Checkout)");
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
}
