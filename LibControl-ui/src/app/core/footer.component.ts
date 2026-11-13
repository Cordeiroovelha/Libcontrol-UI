import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bg-success text-white text-center py-3">
      <div class="container">
        <!-- Container flexível: empilha no celular (flex-column) e alinha ao lado no desktop (flex-sm-row) -->
        <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
          
          <!-- Informações de Copyright e Licença -->
          <span class="mb-0">
            &copy; 2026 &middot; Projeto licenciado sob a
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-underline"
            >
              Licença MIT
            </a>
          </span>

          <!-- Separador visual (oculto em telas pequenas) -->
          <span class="d-none d-sm-inline text-white-50" aria-hidden="true">|</span>

          <!-- Links Sociais -->
          <div class="d-flex gap-3">
            <span class="text-white">Links Sociais: </span>
            <a
              href="https://github.com/Cordeiroovelha/Libcontrol-UI"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none"
              aria-label="Repositório do projeto no GitHub"
            >
              <i class="bi bi-github me-1"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/murilo-juttel-cordeiro-02b3812a8/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-white text-decoration-none"
              aria-label="Perfil do autor no LinkedIn"
            >
              <i class="bi bi-linkedin me-1"></i>
            </a>
            <a
              href="mailto:cordeiro.juttel@gmail.com"
              class="text-white text-decoration-none"
              aria-label="Enviar e-mail para o autor"
            > 
              <i class="bi bi-envelope me-1"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  `,
  styles: `
    footer {
      background-color: #00E054 !important;
    }

    footer a {
      text-decoration: none !important;
    }

    footer a:hover {
      color: rgb(137, 137, 137) !important;
      text-decoration: none !important;
    }

    footer h1 {
      font-size: 1rem;
      margin: 10px 0;
    }
  `
})
export class FooterComponent {

}
