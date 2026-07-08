# IMPRO.SP — Como publicar e atualizar o site

Guia para quem não programa. Qualquer dúvida, cole este arquivo numa conversa com uma IA e peça ajuda passo a passo.

---

## 1. O que é cada arquivo

| Arquivo | O que é |
|---|---|
| `index.html` | Redireciona a raiz do site para a Home. **Não apague.** |
| `index.dc.html` | HOME (português) |
| `cursos.dc.html` | Cursos e Programação |
| `quem-somos.dc.html` | Quem Somos |
| `internacional.dc.html` | Internacional |
| `index-en.dc.html`, `cursos-en.dc.html`, `quem-somos-en.dc.html`, `internacional-en.dc.html` | As mesmas 4 páginas em inglês (botão EN no menu) |
| `Nav.dc.html` | Menu do topo (usado por todas as páginas) |
| `Footer.dc.html` | Rodapé (usado por todas as páginas) |
| `support.js` | Motor que faz as páginas funcionarem. **Não apague, não edite.** |
| `_ds/` | Fontes, cores e estilos da marca. **Não apague.** |
| `_redirects` | Deixa os endereços bonitos no Cloudflare (ex.: `/cursos`). |
| `images/` | Todas as imagens do site (veja abaixo). |

Para publicar, suba **a pasta inteira** do jeito que está.

---

## 2. Trocar as imagens (faça ANTES de publicar)

Regra de ouro: **substitua o arquivo mantendo exatamente o mesmo nome**. Nada mais precisa mudar.

| Arquivo | O que colocar | Formato sugerido |
|---|---|---|
| `images/professores/gabriel-caropreso.jpg` | ✅ Já tem a foto real | vertical, P&B |
| `images/professores/tamara-borges.jpg` | Foto da Tamara | vertical (ex.: 800×1000), P&B |
| `images/professores/maro-lesioti.jpg` | Foto da Maro | vertical (ex.: 800×1000), P&B |
| `images/professores/luana-proenca.jpg` | Foto da Luana | vertical (ex.: 800×1000), P&B |
| `images/home/comunidade.jpg` | Foto de jam / encontro da comunidade | horizontal (ex.: 1600×900) |
| `images/internacional/aguardo-ansiosamente.jpg` | Foto de cena do espetáculo (Quem Somos, bloco 03) | horizontal (ex.: 1600×900) |
| `images/flyer-figura.jpg` | ✅ Já tem o flyer do FIGURA | quando mudar a atividade em cartaz, troque este arquivo |

- As fotos dos professores aparecem em corte 4:5 e recebem tratamento P&B automático.
- Os arquivos placeholder atuais mostram por escrito qual foto vai em cada lugar.

---

## 3. Publicar com GitHub + Cloudflare Pages

1. **GitHub:** crie uma conta em github.com → botão **New repository** → nome `improsp-site` → **Public** → Create.
2. Na página do repositório: **Add file → Upload files** → arraste TODOS os arquivos e pastas deste projeto → **Commit changes**.
   - Importante: arraste o *conteúdo* da pasta (index.html deve ficar na raiz do repositório, não dentro de uma subpasta).
3. **Cloudflare:** crie uma conta em cloudflare.com → **Workers & Pages → Create → Pages → Connect to Git** → autorize o GitHub e escolha o repositório.
4. Configuração de build: deixe **tudo em branco** (não há build). Framework: *None*. Clique em **Save and Deploy**.
5. Em ~1 minuto o site estará no ar num endereço `*.pages.dev`.
6. **Domínio próprio (www.improsp.com.br):** no projeto do Pages → aba **Custom domains** → Add → siga as instruções de DNS que o Cloudflare mostrar.

### Atualizar o site depois
Edite/substitua o arquivo no GitHub (Upload files de novo, com o mesmo nome) → o Cloudflare republica sozinho em ~1 minuto.

---

## 4. Editar textos

Os textos ficam dentro dos arquivos `.dc.html` — são HTML legível. Abra o arquivo no GitHub (ícone de lápis), procure o texto e edite. Datas, preço e endereço do FIGURA aparecem em `index.dc.html` E `cursos.dc.html` (+ versões `-en`): atualize nos dois.

### Quando o FIGURA lotar ou terminar
- Em `cursos.dc.html` e `cursos-en.dc.html`, procure `figuraAberto ?? true` e troque para `?? false` → o carimbo vira "TURMA LOTADA" e o botão some.
- Em `index.dc.html` e `index-en.dc.html`, `emCartaz ?? true` → `?? false` esconde o bloco "Em cartaz" inteiro.

### Lacunas já previstas no layout
- Lotação/acessibilidade da mostra final: linha cinza "em confirmação" em `cursos.dc.html` — edite quando tiver o dado.
- Espaço da Masterclass Híbrida: card "AGUARDANDO ESPAÇO" em `cursos.dc.html` — atualize quando fechar o local.
