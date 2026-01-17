/* MOCK DATABASE */
const MockDB = {
    // IPs que simulamos estar bloqueados
    blockedIPs: [
        '10.0.0.1', 
        '192.168.1.50'
    ],
    // Números que já testaram (formato limpo sem +55)
    usedNumbers: [
        '11999999999' 
    ]
};

// Retorna um IP aleatório para simular usuário
function getMockUserIP() {
    // Retorna IP limpo. Mude para '10.0.0.1' para testar erro de bloqueio.
    return '200.150.10.1'; 
}