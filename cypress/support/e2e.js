// Arquivo de suporte do Cypress
// Você pode adicionar comandos personalizados ou configurações globais aqui

// Exemplo: Limpar cookies antes de cada teste
beforeEach(() => {
  cy.log("Iniciando teste...");
  cy.clearCookies();
});


Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignora erros não capturados para evitar que o teste falhe
  return false;
});
