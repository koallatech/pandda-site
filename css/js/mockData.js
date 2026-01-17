/* MOCK DATA - Simulação do Backend
    Este arquivo simula as tabelas do Supabase
*/

const MockDB = {
    // Lista de IPs bloqueados (simulação)
    blockedIPs: [
        '192.168.0.1', 
        '10.0.0.50'
    ],

    // Lista de telefones que já pediram teste
    usedPhones: [
        '+5511999999999', // Número de teste bloqueado
        '+5521988887777'
    ],

    // Lista de Usuários Ativos
    activeClients: [
        { phone: '+5511999999999', plan: 'DualAPP' }
    ]
};

// Simula a obtenção do IP do usuário
function getMockUserIP() {
    // Retorna um IP aleatório para teste ou um fixo se quiser testar bloqueio
    return '200.100.50.25'; 
    // Mude para '192.168.0.1' para testar o bloqueio de IP
}
