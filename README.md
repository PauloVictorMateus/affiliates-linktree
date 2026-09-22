# Linktree — Grupos de Promoção (WhatsApp)

Página simples estilo Linktree, 100% frontend, para centralizar os links dos seus grupos de promoção no WhatsApp.

## Como editar

1. Abra `src/data/links.ts`
2. Ajuste `profile` (nome, bio e foto opcional)
3. Substitua os `url` de cada item em `promoLinks` pelos links reais (`https://chat.whatsapp.com/...`)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (geralmente `http://localhost:5173`).

## Publicar na internet

Gere os arquivos estáticos:

```bash
npm run build
```

A pasta `dist/` pode ser enviada para **Vercel**, **Netlify**, **GitHub Pages** ou qualquer hospedagem de arquivos estáticos.

### Vercel (exemplo)

```bash
npx vercel
```

Ou conecte o repositório no painel da Vercel — o build command é `npm run build` e o output é `dist`.
