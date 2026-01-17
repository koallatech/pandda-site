// --- Elementos do DOM ---
const btnJaInstalei = document.getElementById('btn-ja-instalei');
const stepApps = document.getElementById('step-apps');
const stepForm = document.getElementById('step-form');
const formTeste = document.getElementById('formTeste');
const inputPhone = document.getElementById('whatsapp');
const inputCountry = document.getElementById('pais');
const inputFlag = document.getElementById('flag-icon');
const toast = document.getElementById('toast');
const btnSubmit = formTeste.querySelector('button[type="submit"]');
const btnText = document.getElementById('btn-text');

// --- Mapa de Bandeiras ---
const flags = {
    '+55': 'https://flagcdn.com/w20/br.png',
    '+351': 'https://flagcdn.com/w20/pt.png',
    '+1': 'https://flagcdn.com/w20/us.png'
};

// --- Event Listeners ---

// 1. Troca de Bandeira ao mudar país
inputCountry.addEventListener('change', () => {
    const code = inputCountry.value;
    inputFlag.src = flags[code] || flags['+55'];
});

// 2. Avançar Etapa (Botão Já Instalei)
if (btnJaInstalei) {
    btnJaInstalei.addEventListener('click', () => {
        stepApps.classList.add('hidden');
        stepForm.classList.remove('hidden');
        stepForm.classList.add('fade-in');
    });
}

// 3. Máscara de Telefone
inputPhone.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove letras
    const country = inputCountry.value;

    if (country === '+55') {
        // Formato (XX) XXXXX-XXXX
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    }
    
    e.target.value = value;
});

// 4. Submit do Formulário
formTeste.addEventListener('submit', async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
        nome: document.getElementById('nome').value,
        whatsapp: cleanPhone(inputPhone.value),
        pais: inputCountry.value,
        email: document.getElementById('email').value,
        horario: document.getElementById('horario').value,
        ip: getMockUserIP() // Função do mockData.js
    };

    const fullNumber = formData.pais + formData.whatsapp;

    try {
        // Simula delay de rede (1.5s)
        await new Promise(r => setTimeout(r, 1500));

        // VALIDAÇÕES (Simuladas)
        if (MockDB.blockedIPs.includes(formData.ip)) {
            throw new Error("Solicitação bloqueada por segurança (IP Repetido).");
        }
        
        // Simulação de número bloqueado: (11) 99999-9999
        if (formData.whatsapp.includes('999999999')) {
             throw new Error("Este número já possui um teste ativo.");
        }

        // SUCESSO
        showToast("success", "✅ Solicitação Enviada! Verifique seu WhatsApp.");
        formTeste.reset();
        
        // Volta ao inicio após 4s
        setTimeout(() => {
            stepForm.classList.add('hidden');
            stepApps.classList.remove('hidden');
        }, 4000);

    } catch (error) {
        showToast("error", `⚠️ ${error.message}`);
    } finally {
        setLoading(false);
    }
});

// --- Funções Auxiliares ---

function cleanPhone(phone) {
    return phone.replace(/\D/g, '');
}

function setLoading(isLoading) {
    if (isLoading) {
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = '0.7';
        btnText.textContent = "Processando...";
    } else {
        btnSubmit.disabled = false;
        btnSubmit.style.opacity = '1';
        btnText.textContent = "Gerar Acesso DualAPP";
    }
}

function showToast(type, message) {
    toast.className = `toast ${type}`; // 'toast success' ou 'toast error'
    toast.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}

function simularCheckout() {
    const btn = event.target;
    const oldText = btn.innerHTML;
    btn.innerHTML = "Redirecionando...";
    btn.disabled = true;
    setTimeout(() => {
        alert("🔄 Redirecionando para Mercado Pago...");
        btn.innerHTML = oldText;
        btn.disabled = false;
    }, 1000);
}