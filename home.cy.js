/// <reference types="cypress"/>
describe('Testes da Agenda de Contatos', () => {
    beforeEach(() => {
      // Visitar a página da aplicação
      cy.visit('https://agenda-contatos-react.vercel.app/')
    })
  
    it('Deve ser possível adicionar um novo contato', () => {
      // Clicar no botão para adicionar um novo contato
  
      // Preencher os campos do formulário
      cy.get('[type="text"]').type('João da Silva')
      cy.get('[type="tel"]').type('(11) 9999-9999')
      cy.get('[type="email"]').type('joao@example.com')
      cy.get('.adicionar').click()
  
      // Verificar se o novo contato foi adicionado corretamente
      cy.contains('João da Silva')
      cy.contains('(11) 9999-9999')
      cy.contains('joao@example.com')
    })
  
    it('Deve ser possível alterar um contato existente', () => {
      // Clicar no botão para editar um contato existente
      cy.contains('Editar').click()
  
      // Preencher os campos do formulário com novos valores
      cy.get('[type="text"]').clear().type('João da Silva Modificado')
      cy.get('[type="tel"]').clear().type('(11) 8888-8888')
      cy.get('[type="email"]').clear().type('joao_modificado@example.com')
  
      // Clicar no botão para salvar as alterações
      cy.contains('Salvar').click()
  
      // Verificar se as alterações foram salvas corretamente
      cy.contains('João da Silva Modificado')
      cy.contains('(11) 8888-8888')
      cy.contains('joao_modificado@example.com')
    })
    it('Deve ser possível remover um contato existente', () => {
        cy.get('.contato').its('length').then((length) => {
        
            cy.get('.delete').first().click()
            cy.get('.contato').its('length').should('eq', length-1);
          });
    })
  })