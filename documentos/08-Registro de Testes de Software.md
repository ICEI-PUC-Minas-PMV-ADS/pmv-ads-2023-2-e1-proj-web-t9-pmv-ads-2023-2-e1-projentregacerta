# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste executado]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Resultados obtidos | Descrever resultados do teste  |
| Responsável pela execução do caso de Teste | Nome do integrante da equipe |

[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste]
<h2> Os testes funcionais realizados na aplicação web são descritos a seguir.</h2>

<ol>
  <li> CT-01: Verificar se a barra de pesquisa esta retornando os dados pesquisados pelos usuários.

  Responsável: Diego.

![plano de testes](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/assets/101624093/e9acccf2-0c3d-4a59-90ba-f871826d8883)

<p> Na imagem acima, o sistema retornou correntamente o nome pesquisado pelo usuário</p>

![plano de testes 2](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/assets/101624093/fb4543ef-f885-4341-ac07-48d0e64bc8e4)


<p> Nessa última imagem, o sistema não retornou nenhum dado, pois o nome pesquisado não foi cadastrado.</p>


  <li> CT - 02: Verificar perfil de usuários.</li>
  
  Responsável : Vinícius Vieira

 
 ![Perfil Motoboy](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/blob/main/documentos/img/tela%20Funcionalidade%20Motoboy%20Vinicius.png)



<li> CT-04: CT-04: Verificar o funcionamento do cadastro de usuário.

  Responsável: Rodrigo.

![plano de testes](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/main/documentos/img/campo%20e-mail%20e%20senha%20s%C3%A3o%20obrigat%C3%B3rios.png)

<p> Na imagem acima, o sistema retornou que os campos de e-mail e senha são obrigatórios, não permitindo o cadastro</p>

![plano de testes 2](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/main/documentos/img/senhas%20n%C3%A3o%20conferem.png)


<p> Na imagem acima, o sistema retornou que os campos senha e confirme senha estão divergentes, não permitindo o cadastro.</p>


![plano de testes 3](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/main/documentos/img/cadastro%20efetuado%20com%20sucesso.png)


<p> Na imagem acima, o sistema efetuou o cadastro corretamente, visto que todas as premissas de preenchimento foram atendidas.</p>


![plano de testes 4](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/main/documentos/img/erro%20usu%C3%A1rio%20j%C3%A1%20cadastrado.png)


<p> Na imagem acima, o sistema não permitiu o cadastro, devido esse usuário já estar previamente cadastrado.</p>


<li> CT-05: CT-05: Verificar o funcionamento do login de usuário.

  Responsável: Rodrigo.

![plano de testes](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/main/documentos/img/nome%20de%20usu%C3%A1rio%20e%20senha%20n%C3%A3o%20conferem.png)

<p> Na imagem acima, o sistema retornou que os campos de e-mail e senha não conferem, ou por não estar cadastrado previamente ou devido a senha estar diferente da cadastrada previamente. O teste também dá o mesmo retorno em caso de não preenchimento do e-mail ou senha.</p>

![plano de testes 2](https://raw.githubusercontent.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t9-pmv-ads-2023-2-e1-projentregacerta/main/documentos/img/login%20efetuado%20com%20sucesso.png)

<p> Na imagem acima, o sistema efetuou o login com sucesso devido as informações de e-mail e senha concidirem com as previamente cadastradas. </p>
