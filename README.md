![Untitled](Untitled%20f2076ae539fa4ce2bf076294a2dac76b/Untitled.png)

# Plataforma pré-evento DoWhile

Esse projeto foi desenvolvido durante a NLW-Heat, evento da RocketSeat, e consiste em uma plataforma onde o usuário pode enviar uma mensagem dizendo a expectativa para o evento DoWhile 2021 da RocketSeat, que aparecerá em tempo real para outros usuário que estiverem na plataforma no momento.

### **O Projeto**

O projeto consiste em uma plataforma onde o usuário vai acessar através do navegador ou do celular, e cairá em uma tela onde aparecerá as última 3 mensagens enviadas que é atualizado em tempo real, e um botão onde ele pode **entrar ****com o **GitHub** para ter acesso ao formulário de envio de mensagens.

### Funcionalidades

- Mensagens em tempo real
    - Utilizando o **[Socket.io](http://socket.io)**, cada **Client** conectado na aplicação recebe uma **Socket** e começa a receber os eventos de novas mensagens, que entram em uma **fila** para aparecer na tela a cada 3000 milisegundos.
- Autenticação com o GitHub
    - A autenticação foi feita utilizando o padrão **OAuth,** onde o **Client** solicita uma autenticação para o **GitHub**, que retorna o código do usuário para o Client, e então envia do Client para o **Backend**, onde o Backend busca as informações do usuário na conta do GitHub, e gera um **token** de acesso a aplicação, que será utilizado em toda navegação do usuário, que nesse caso é apenas enviar uma mensagem.
- Envio de mensagens
    - Após a autenticação, o usuário deve estar com o **token** armazenado na sua sessão do navegador ou App Mobile, então o **Frontend** identifica o usuário logado, e mostra o formulário com as informações e o campo para escrever uma mensagem.
    

### Tecnologias

- React com o Vite para o frontend web, utilizando sass para estilização de componentes, e context API para fazer o contato com o backend utilizando o axios para fazer as requisições.
- React-Native com o Expo para o App Mobile, utilizando styled components, e context API para fazer o contato com o backend utilizando o axios para fazer as requisições.
- Node.js com TypeScript para o backend, com Express para fazer o gerenciamento das rotas.
- [Socket.io](http://Socket.io) para fazer a comunicação em tempo real de atualização de mensagens ( acho tão maravilhoso que todo projeto da vontade de implementar só para ver funcionando lindamente).
- Prisma ORM( melhor ferramenta para BD que eu conheci ) com SQLite para banco de dados.

### Como rodar o projeto

Em breve...
