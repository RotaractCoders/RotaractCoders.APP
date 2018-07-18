## Como instalar o aplicativo

O aplicativo está disponivel para [Android](https://play.google.com/store/apps/details?id=io.ionic.rotaract4430) e para [web](http://rotaract4430.azurewebsites.net/) 

## O que é Rotaract

O Rotaract é uma comunidade global de jovens que causam mudanças positivas no mundo e que compartilham ideias e desenvolvem habilidades de liderança. O lugar onde conhecemos pessoas com os mesmos ideais. Um programa do Rotary Internacional (RI) onde é possível desenvolver a liderança e agir nas comunidades das mais diversas formas, através de serviços voluntários, indo muito além de uma simples organização mundial, é um lugar onde seus integrantes passam a ter um novo ideal de vida! Rotaractianos utilizam recursos adquiridos através de projetos de captação, ou disponibilizados pelo Rotary Internacional e pela fundação Rotária e se beneficiam do apoio administrativo providenciado pelo RI. Todo clube de Rotaract deve ser patrocinado por um clube de Rotary, hoje clube parceiro de Rotary. Sendo assim, é um programa dentro de uma instituição maior, um braço de seu(s) Rotary(s) Club(s).

Para saber mais [click aqui](http://rotaract4430.com.br/o-que-e-rotaract/)

## Como funciona o projeto

Atualmente o Aplicativo funciona apenas para o [distrito 4430](http://rotaract4430.com.br), mas nossa ambição é expandir para todos os distritos do Brasil.

### Backend

Sua função é estrair os dados da [OMIR brasil](http://omirbrasil.org.br/), normalizar, armazenar em uma base de dados e disponibilizar esses dados em um API.

Foi desenvolvido em C# com banco de dados [Azure Storage](https://azure.microsoft.com/pt-br/services/storage/)

A documentação foi feita com o [Swagger](google.com) e esta disponivel [aqui](http://apirotaract4430.azurewebsites.net/swagger/)

### Configure (esse nome está pessimo...)

Onde fica a parte de adminstração dos dados (Agenda, FAQ, status dos processamentos, etc).

Foi desenvolvido em [Angular](https://angular.io/) usando o [angular-cli](https://cli.angular.io/) e se comunica com a [API](http://apirotaract4430.azurewebsites.net/swagger/)

### Aplicativo

O aplicativo foi desenvolvido em [Ionic](google.com) e se comunica com a [API](http://apirotaract4430.azurewebsites.net/swagger/)

Por enquanto só realiza consultas na [API](http://apirotaract4430.azurewebsites.net/swagger/)

## O que já temos planejado

Temos um [quadro no trello](https://trello.com/b/zzf6ZHOC/ti) com todos planejamento para as proximas versões, da uma conferida lá!

## Como contribuir?

Nosso projeto não tem fins lucrativos, ninguem esta ganhando nada (financeiramente) com isso... muito pelo contrario. kkkkkk

Você pode contribuir de diversas formas:

### Dando ideias de novas funcionalidades

Mande uma mensagem para o administrador do projeto.

### Programando

Temos um [quadro no trello](https://trello.com/b/4LZR5jI5/ti-t%C3%A9cnico) com todas as atividades técnicas que você pode nos ajudar a fazer!

As regras para nos ajudar são simples.

- Escolha uma atividade que consiga fazer.
- Arraste ela para lista de "Fazendo" e marque-se como o responsável por ela.
- De fork no projeto que vai alterar e realize apenas as modificações que forem necessarias para concluir a tarefa!
- Realize o commit com o texto da tarefa que você está fazendo.
- Realize o pull request.
- Mova a tarefa no trello para lista "Pronto"
- Espere seu pull request ser aprovado.
- Comemore!

## Responsavel/Administrador

- [Eduardo Fernandes](https://www.facebook.com/eduardo.fernandes.3386)

