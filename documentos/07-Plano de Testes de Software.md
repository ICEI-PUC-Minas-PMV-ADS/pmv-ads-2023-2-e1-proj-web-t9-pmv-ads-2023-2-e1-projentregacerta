# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |

<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-01: Verificar o funcionamento da barra de busca na tela lista de entregadores cadastrados</td>
  <td>
   <ul>
    <li>RF- EMPRESA 09	Sistema deve permitir a empresa buscar o nome do entregador na lista de entregadores cadastrados</li>
    <li>RF-04	 O sistema deve permitir que o usuário do site consiga selecionar a quantidade de estrelas desejadas para avaliar o perfil da  empresa ou motoboy de 1 a 5 estrelas. </li>
  
   </ul>
  </td>
  <td>Verificar se o sistema esta encontrando os dados inseridos pelo usuário, neste caso o nome ou sobrenome do entregador.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
    <li> Acessar a página lista entregadores cadastrados </li>
    <li> inserir o dado a ser pesquisado na barra de busca </li>
    
   </ol>
   </td>
  <td>O sistema deve localizar e exibir os dados inseridos na barra de busca dos entregadores.</td>
  <td>Diego</td>
 </tr>
</table>


<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-02: Verificar perfil de usuários</td>
  <td>
   <ul>
    <li>RF- 2 Site deve permitir a visualização por parte do usuário de informações gerais a respeito do motoboy</li>
  
   </ul>
  </td>
  <td>Verificar se o sistema esta exibindo todas as informações a respeito do motoboy selecionado pelo usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em cadastre-se.</li>
    <li>selecionar "empregador" e se cadastrar</li>
    <li>Selecionar "Funcionários cadastrados"</li>
    <li>Selecionar "ver mais" no funcionário desejado</li>
   </ol>
   </td>
  <td>O sistema deve permitir a visualização de todas as informações incluindo imagem, histórico de entregas, avaliação, experiência profissional.</td>
  <td>Vinícius Vieira</td>
 </tr>
</table>
<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-03:    Verificar se a fucionalidade de avaliação por estrelas está fucionando. </td>
  <td>
   <ul>
    <li>RF-04	     O sistema deve permitir que o usuário do site consiga selecionar a quantidade de estrelas desejadas para avaliar o perfil da  empresa ou motoboy de 1 a 5 estrelas. </li>
  
   </ul>
  </td>
  <td>Verificar se cada perfil permanece com a quantidade de estrelas selecionadas pelo o usuário,ao selecionar cada perfil .</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar nos links da página Home.</li>
    <li> Ir até um perfil do site e selecionar a quantidade de estrelas desejadas. </li>
   </ol>
   </td>
  <td>As estrelas devem permanecer na quantidade selecionada pelo usuário para cada perfil.</td>
  <td>Jayvison Santana </td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-04: Verificar o funcionamento do cadastro de usuário</td>
  <td>
   <ul>
    <li>RF- EMPRESA 01	Sistema deve permitir cadastro de usuários, tanto empregador quanto entregador. </li>
  
   </ul>
  </td>
  <td>Verificar se dados cadastrais estão sendo memorizados corretamente, se o sistema bloqueia cadastro de mesmo usuário (a fim de evitar duplicação), se o sistema não permite cadastro com informações essencias necessárias (tais como e-mail e senha).</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li> Clicar no link Cadastro.</li>
    <li> Preencher informações de cadastro solicitadas de diversas maneiras, dentre elas: faltando inserção de e-mail, colocando senha e verificação de senhas difenrentes, não inserindo a senha, e finalmente inserindo todas as informações corretas, inserindo novamente todas as informações corretas de outro usuário e por fim, inserindo todas as informações corretas de um dos usuários já cadastrados, porém com senha diferente</li>
        
   </ol>
   </td>
  <td>O sistema não deve permitir cadastro de usuários se não for inserido e-mail e/ou senha, não deve permitir cadastro caso senha e confirmação de senha estiverem diferentes e caso o usuário já estiver previamente cadastrados. O sistema deve permitir o cadastro quando as informaçãoes essenciais, tais como e-mail, senha e confime senha estiverem adequadamente preenchidos.</td>
  <td>Rodrigo</td>
 </tr>
</table>

 <table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-05: Verificar o funcionamento do login de usuário</td>
  <td>
   <ul>
    <li>RF- EMPRESA 01	Sistema deve realizar login de usuário, tanto empregador quanto entregador. </li>
  
   </ul>
  </td>
  <td>Verificar se ao efetuar a inserção dos dados de e-mail e senha o sistema efetua o login e direciona à tela de entregador ou empregador de acordo com o cadastro prévio.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar no link Login.</li>
    <li>Preencher informações de e-mail e senha diferente do previamente cadastrados, preencher dados de e-mail e senha idêntico ao previamente cadastrado</li>
        
   </ol>
   </td>
  <td>O sistema não deve permitir login em caso de dados inseridos na tela de login diferente do previamente cadastrado, e para inserção de dados previamente cadastrados, o sistema deverá efetuar o login do usuário e direcioná-lo a tela de empregador ou entregador, de acordo com o cadastro prévio realizado.</td>
  <td>Rodrigo</td>
 </tr>
</table>



<table>
 <tr>
  <th>Caso de teste</th>
  <th>Requisitos associados</th>
  <th>Objetivo do teste</th>
  <th>Passos</th>
  <th>Critérios de êxito</th>
  <th>Responsável</th>
 </tr>
 <tr>
  <td>CT-06: Verificar perfil de usuários (empresa) </td>
  <td>
   <ul>
    <li>RF- 2 Site deve permitir a visualização por parte do usuário de informações gerais a respeito do motoboy</li>
    <li> RF-8 O acesso a tela de perfil da empresa pode ser realizado na logo da empresa na tela Home.</li>
   </ul>
  </td>
  <td>Verificar se o sistema esta exibindo todas as informações a respeito do motoboy selecionado pelo usuário.</td>
  <td>
   <ol>
    <li>Acessar o navegador.</li>
    <li>Informar o endereço do site.</li>
    <li>Visualizar a página Home.</li>
    <li>Clicar em cadastre-se.</li>
    <li>selecionar "empregador" e se cadastrar</li>
    <li>Ver perfil"</li>
   </ol>
   </td>
  <td>O sistema deve permitir a visualização de todas as informações incluindo imagem, informações do restaurante, avaliação,informção de contato, endereço.</td>
  <td>Iago Maciel</td>
 </tr>
</table>

