  Feature: API

  Background:
      Given acessa a API
  
  @cenario1
  Scenario: Verificacao de criacao de usuario
      When cria usuario e senha via API retornando codigo 201
      Then mesmo usuario nao pode ser criado via API retornando codigo 406

  
  @cenario2
  Scenario: Verificacao do token de acesso e autorizacao do usuario
      When cria usuario e senha via API retornando codigo 201
      Then gera o token de acesso
      And confirma se o usuario esta autorizado

  
  @cenario3
  Scenario: Verificacao dos livros disponiveis
      When usuario acessa via API
      Then exibe lista de livros

  
  @cenario4
  Scenario: Aluga livro
      When usuario acessa via API
      Then exibe lista de livros
      And usuario aluga livro

  
  @cenario5
  Scenario: Exibe lista de livros reservados pelo usuario
      When usuario acessa via API
      And exibe lista de livros
      And usuario aluga livro
      Then exibe lista de livros reservados
      And os livros reservados aparecendo nos detalhes do usuario