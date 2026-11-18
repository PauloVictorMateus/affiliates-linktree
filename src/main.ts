import './style.css'
import { profile, promoLinks } from './data/links'

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
    </header>

    <nav class="links" aria-label="Grupos do WhatsApp">
      <ul class="links__list">
        ${linksHtml}
      </ul>
    </nav>

    <footer class="footer">
      <p>Toque em um grupo para abrir no WhatsApp</p>
    </footer>
  </main>
`
