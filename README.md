# 📚 LibControl

O **LibControl** é uma aplicação web pensada para leitores que desejam **organizar sua biblioteca pessoal** e **registrar resenhas (reviews)** dos livros que já leram. O projeto une um back-end em **Java** a uma interface construída com **Angular**.

> ⚠️ **Status do projeto:** O LibControl ainda está em **desenvolvimento ativo**. Várias funcionalidades estão sendo implementadas e refinadas, e existe a pretensão de lançar uma versão estável no futuro.

🔗 Repositório: [Cordeiroovelha/Libcontrol-UI](https://github.com/Cordeiroovelha/Libcontrol-UI)

---

## ✨ Funcionalidades previstas

- **Biblioteca pessoal:** cadastro e gerenciamento de livros lidos.
- **Reviews:** espaço para o usuário atribuir notas e escrever resenhas sobre as obras.
- **Organização:** categorização e busca dentro do acervo pessoal.
- **Visual:** criação de uma identidade visual marcante.

---

## 🛠 Tecnologias

| Camada | Tecnologia |
|--------|------------|
| **Back-end** | Java (Spring Boot) |
| **Front-end** | Angular 19 |
| **Build (backend)** | Maven |

O back-end segue uma estrutura em camadas (`domain/model`, `repository`, `service`, `resource`, `security`, `config`), típica de APIs REST com Spring.  
O front-end foi gerado com Angular CLI 19.2.0 e utiliza o servidor de desenvolvimento padrão do Angular (`ng serve`).

---

## 🚧 Status e roadmap

O projeto encontra-se em **fase de desenvolvimento**. Atualmente trabalhando na página de reviews!

**Pretensões futuras:**
- Concluir o fluxo completo de cadastro de livros e reviews.
- Implementar autenticação e área do usuário.
- Refinar a experiência de uso e o design da interface.
- Lançar uma versão pública estável.

---

## 📁 Estrutura do repositório

```text
Libcontrol-UI/
├── BibliotecaControl/   # API back-end em Java (Spring Boot)
│   ├── src/main/java/br/edu/ifsp/web2/bibliotecacontrol/
│   └── pom.xml
└── LibControl-ui/       # Interface front-end em Angular
    ├── src/
    └── package.json
```

---

## 🚀 Como executar o projeto

### Pré-requisitos

- **Java** (versão compatível com o `pom.xml` do backend)
- **Node.js** e **Angular CLI** (para o front-end)

### Back-end (Java)

```bash
# Na pasta BibliotecaControl
./mvnw spring-boot:run
```

### Front-end (Angular)

```bash
# Na pasta LibControl-ui
npm install
ng serve
```

Acesse `http://localhost:4200/` no navegador.

---

## 🤝 Contribuição

O projeto está em desenvolvimento e contribuições são bem-vindas. Sinta-se à vontade para abrir **issues** com sugestões, relatar problemas ou enviar **pull requests** com melhorias.

---

## 📄 Licença

Este projeto ainda não possui uma licença definida. Entre em contato com o mantenedor para mais informações.
