# Especificação do Projeto

## Perfis de Usuários


<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil José Antõnio Motoboy </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">32 anos carteira CNH categoria A, trabalha como motoboy há 2 anos</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>Emprego fixo como entregador</td>
</tr>
</tbody>
  <tbody>
    <tr align=center>
      <th colspan="2">Perfil Carlos Henrique Empresário</th>
    </tr>
    <tr>
      <td width="150px"><b>Descrição</b></td>
      <td width="600px">40 anos,empresário e dono de uma rede de lanchonetes</td>
    </tr>
    <tr>
    <td><b>Necessidades</b></td>
    <td>Encontrar motoboy qualificado para realizar entregas</td>
    </tr>
  </tbody>
</table>


## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO ... `O QUE` |PARA ... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
|José Antônio|Saber o tempo e distância até o local de entrega|Planejar a melhor rota para trazer agilidade as entregas| 
|José Antônio|Saber como está o trânsito em tempo real|Desviar de certos caminhos e encontrar o melhor percurso para as entregas| 
|José Antônio|Saber quantos quilômetros foram percorridos|Ter controle sobre os gastos de combustível|
|José Antônio|Saber o valor que será pago pelas corridas com antecedência|Decidir se vale a pena ou não realizar determinadas entregas|
|Carlos Henrique|Visualizar quais motoboys são mais bem avaliados|Contratar os melhores profissionais e trazer qualidade aos atendimentos|
|Carlos Henrique|Visualizar a distância que os pedidos foram feitos pelos clientes|Saber a média de combustível e outros gastos que serão realizados pelos entregadores e ter mais controle|

## Requisitos do Projeto

### Requisitos Funcionais

|ID                 | Descrição                                                       | Prioridade |
|-------------------|-----------------------------------------------------------------|------------|
| RF- ENTREGADOR 01 |Sistema deve permitir ao usuário (entregador) incluir seu perfil | ALTA|
| RF- ENTREGADOR 02 |Sistema deve permitir a busca de determinado motoboy e empresa no sistema|ALTA|
| RF- ENTREGADOR 03 |Sistema deve permitir ao usuário (entregador) ter acesso as informações cadastrais do estabelecimento contratante tais como: endereço, horário de funcionamento, valor pago por entrega, se o estabelecimento possui veículo | ALTA       |
| RF- ENTREGADOR 04 |Sistema deve permitir ao usuário (entregador) ter acesso a "nota" do estabelecimento contratante (exemplo: trato com o entregador| MÉDIA       |
| RF- ENTREGADOR 01 |Sistema deve permitir ao usuário (responsável do estabelecimento contratante) incluir seus dados cadastrais (endereço, horário de funcionamento, valor pago por entrega, se o estabelecimento possui veículo)| ALTA |
| RF- ENTREGADOR 02 |Sistema deve permitir ao usuário (responsável do estabelecimento contratante) ter acesso a informações cadastrais do entregador, tais como: modelo do veículo, dados de NCH, horário disponível para entrega| ALTA |
| RF- ENTREGADOR 03 |Sistema deve permitir ao usuário (entregador) ter acesso a "nota" do entregador (exemplo: tempo de entrega, condições do produto na entrega, avaliação do cliente em relação a comunicação do entregador)| ALTA |

### Requisitos não Funcionais

[Utilize o modelo de tabela abaixo para apresentar os requisitos não-funcionais]

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |O sistema de funcionar 24 horas por dia, 7 dias por semana|ALTA|
| RNF-02 |O sistema deve ser responsivo|MÉDIA|
| RNF-03 |O sistema deve notificar os usuários automaticamente (em segundo plano) quando for confirmado solicitação|MÉDIA|
| RNF-04 |O sistema deve atualizar a entrada de usuários em até 1 minuto|BAIXA|
| RNF-05 |O sistema deve retornar ao usuário confirmação de entrada de dados|BAIXA|
| RNF-06 |O sistema deve retornar falha ao usuário em caso de não confirmação de entrada de dados em 1 segundo|MÉDIA|
