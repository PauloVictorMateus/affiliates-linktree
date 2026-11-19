import './style.css'
import { profile, promoLinks, socialLinks } from './data/links'

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
}

function linkIcon(link: { title: string; image?: string }): string {
  if (link.image) {
    return `<img class="link-logo" src="${link.image}" alt="" width="52" height="52" />`
  }
  return `<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>`
}

const socialIcons: Record<string, string> = {
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.52V8.48L15.84 12l-6.09 3.52z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.5 3c.4 2.4 1.8 4.1 4.1 4.5v2.4c-1.4 0-2.7-.4-4-1.2v6.6c0 3.3-2.6 5.9-6 5.9S2.6 18.6 2.6 15.3c0-3.2 2.5-5.8 5.7-5.9v2.5c-1.7.1-3.1 1.5-3.1 3.3 0 1.8 1.5 3.3 3.3 3.3s3.3-1.5 3.3-3.3V3h2.7z"/></svg>`,
  kwai: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.5 4h3.2v6.2L15.6 4H19l-6.6 7.1L19.6 20H16l-5.4-6.8V20H6.5V4z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 1.8H7A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8zM12 8.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M14.2 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H17V5.2A18 18 0 0 0 14.9 5c-2.1 0-3.5 1.3-3.5 3.6v2h-2.3v2.8h2.3V21h2.8z"/></svg>`,
}

function renderSocials(): string {
  const items = socialLinks
    .map(
      (social) => `
      <li>
        <a class="social social--${social.id}" href="${social.url}" target="_blank" rel="noopener noreferrer" aria-label="${social.label}" title="${social.label}">
          ${socialIcons[social.id] ?? ''}
        </a>
      </li>
    `,
    )
    .join('')

  return `<nav class="socials" aria-label="Redes sociais"><ul class="socials__list">${items}</ul></nav>`
}

function renderAvatar(): string {
  if (profile.avatarUrl) {
    return `<img class="avatar" src="${profile.avatarUrl}" alt="Promo Top" width="148" height="148" />`
  }
  return `<div class="avatar avatar--initials" aria-hidden="true">${initials(profile.name)}</div>`
}

const linksHtml = promoLinks
  .map(
    (link) => `
    <li>
      <a
        class="link-card${link.highlight ? ' link-card--highlight' : ''}"
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="link-card__icon">${linkIcon(link)}</span>
        <span class="link-card__text">
          <span class="link-card__title">${link.title}</span>
          ${link.description ? `<span class="link-card__desc">${link.description}</span>` : ''}
        </span>
        <span class="link-card__arrow" aria-hidden="true">›</span>
      </a>
    </li>
  `,
  )
  .join('')

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="page">
    <div class="glow glow--top" aria-hidden="true"></div>
    <div class="glow glow--bottom" aria-hidden="true"></div>

    <header class="profile">
      ${renderAvatar()}
      <h1 class="profile__name">${profile.name}</h1>
      <p class="profile__bio">${profile.bio}</p>
      ${renderSocials()}
    </header>

    <nav class="links" aria-label="Grupos do WhatsApp">
      <ul class="links__list">
        ${linksHtml}
      </ul>
    </nav>

    <footer class="footer">
      <p class="footer__touch">Toque em um grupo para abrir no WhatsApp</p>
      <p class="footer__click">Clique em um grupo para abrir no WhatsApp</p>
    </footer>
  </main>
`
