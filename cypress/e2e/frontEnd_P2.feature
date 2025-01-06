  Feature: Front End Parte 2

  Background:
      Given usuario acessa a url "https://demoqa.com/"

 
  @cenario1
  Scenario: Submete formulario
      When escolhe a opcao Forms na pagina inicial
      And clica no submenu Practice Form
      And preencher todo o formulario com valores aleatorios
      And faz upload de arquivo "test.txt"
      Then submete formulario
      And garante que um popup foi aberto apos o submit
      And fecha o popup


 @cenario2
  Scenario: Abre nova janela
      When escolhe a opcao Alerts, Frame & Windows na pagina inicial
      And clica no submenu Browser Windows
      And clica no botao New Window
      Then verifica se uma nova janela foi aberta com a mensagem This is a sample page
      And fecha nova janela aberta


  @cenario3
  Scenario Outline: Criar novo registro
      When escolhe a opcao Elements na pagina inicial
      And clica no submenu Web Tables
      Then cria um novo registro de <nome> <sobrenome> <email> <idade> <salario> <depto>
      And editar novo regristo de <nome> <sobrenome> <email> <idade> <salario> <depto>
      And deleta o registro criado de <nome> <sobrenome> <email> <idade> <salario> <depto>

      Examples:
      |  nome        | sobrenome    | email                     | idade | salario | depto              |
      | "Paulo"      | "Zacarias"   | "paulo@test.com"          | 30    | 5000    | "Engenharia"       |      
      | "João"       | "Silva"      | "joaosilva@test.com"     | 25    | 4000    | "Marketing"        |
      | "Maria"      | "Oliveira"   | "mariaoliveira@test.com" | 29    | 4500    | "Vendas"           |
      | "Ana"        | "Santos"     | "anasantos@test.com"     | 28    | 5200    | "Design"           |
      | "Pedro"      | "Almeida"    | "pedroalmeida@test.com"  | 32    | 6000    | "Recursos Humanos" |
      | "Carlos"     | "Souza"      | "carlossouza@test.com"   | 40    | 7000    | "TI"               |
      | "Fernanda"   | "Lima"       | "fernandalima@test.com"  | 27    | 4600    | "Jurídico"         |
      | "Camila"     | "Costa"      | "camilacosta@test.com"   | 31    | 4800    | "Logística"        |
      | "Rafael"     | "Moura"      | "rafaelmoura@test.com"   | 34    | 5300    | "Produção"         |
      | "Julia"      | "Rocha"      | "juliarocha@test.com"    | 26    | 4100    | "Finanças"         |
      | "Diego"      | "Torres"     | "diegotorres@test.com"   | 36    | 5500    | "Pesquisa"         |
      | "Bianca"     | "Cardoso"    | "biancacardoso@test.com"| 22    | 3800    | "Atendimento"      |


  @cenario4
  Scenario Outline: Barra de progresso
      When escolhe a opcao Widgets na pagina inicial
      And clica no submenu Progress Bar
      And clica no botao Start
      Then para antes dos 25 por cento
      And clica no botao Start
      And clica no botao Reset


  @cenario5
  Scenario Outline: Ordem em ordem crescente
      When escolhe a opcao Interactions na pagina inicial
      And clica no submenu Sortable
      Then coloca os elementos em ordem crescente