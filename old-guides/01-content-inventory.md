# Content Inventory and Structure

This document contains the detailed content inventory and structure plan for migrating from Gitbook to Starlight.

## Content Inventory
The old-guides directory contains the following sections and content:

1. **Loginproblemer**
   - Den bedste måde at logge ind på

2. **Google Drev**
   - Oversigt
     - Generelt
       - Hvordan deler jeg dokumenter?

3. **Meebook**
   - Kopiere meddelsesbog til nyt skoleår

4. **OS2faktor**
   - Få OS2faktor til din Chromebook
   - Hvordan bruger jeg OS2faktor?
   - Hvordan fjerner jeg gamle enheder fra OS2faktor?

5. **Skift af koder**
   - Sådan skifter du kode på uni-login
   - Sådan skifter du kode på meddel.dk (til Chromebooks)
   - Sådan skifter du din egen kode på din Chromebook

6. **Skoletube**
   - Oversigt
     - Skoletube
       - Opret en kanal
       - Indstillinger for din kanal
       - Hvordan finder jeg min kanal?
       - Invitér andre til din kanal
     - WeVideo
       - Sådan gemmer du din video

7. **Gode Links**
   - Oversigt over links
   - YouTube (external link)
   - Google Translate (external link)

## Starlight Navigation Structure
Based on the current Gitbook structure, here's the proposed Starlight navigation configuration for `astro.config.mjs`:

```javascript
starlight({
  title: 'EDB Guides',
  social: {
    github: 'https://github.com/edbpede/guides-new',
  },
  sidebar: [
    {
      label: 'Velkommen',
      items: [
        { label: 'Introduktion', link: '/' }
      ]
    },
    {
      label: 'Loginproblemer',
      items: [
        { label: 'Den bedste måde at logge ind på', link: '/loginproblemer/den-bedste-made-at-logge-ind-pa/' }
      ]
    },
    {
      label: 'Google Drev',
      items: [
        { label: 'Oversigt', link: '/google-drev/oversigt/' },
        { 
          label: 'Generelt',
          items: [
            { label: 'Hvordan deler jeg dokumenter?', link: '/google-drev/oversigt/generelt/hvordan-deler-jeg-dokumenter/' }
          ]
        }
      ]
    },
    {
      label: 'Meebook',
      items: [
        { label: 'Kopiere meddelsesbog til nyt skoleår', link: '/meebook/kopiere-meddelsesbog-til-nyt-skolear/' }
      ]
    },
    {
      label: 'OS2faktor',
      items: [
        { label: 'Få OS2faktor til din Chromebook', link: '/os2faktor/fa-os2faktor-til-din-chromebook/' },
        { label: 'Hvordan bruger jeg OS2faktor?', link: '/os2faktor/hvordan-bruger-jeg-os2faktor/' },
        { label: 'Hvordan fjerner jeg gamle enheder fra OS2faktor?', link: '/os2faktor/hvordan-fjerner-jeg-gamle-enheder-fra-os2faktor/' }
      ]
    },
    {
      label: 'Skift af koder',
      items: [
        { label: 'Sådan skifter du kode på uni-login', link: '/skift-af-koder/sadan-skifter-du-kode-pa-uni-login/' },
        { label: 'Sådan skifter du kode på meddel.dk', link: '/skift-af-koder/sadan-skifter-du-kode-pa-meddel-til-chromebooks/' },
        { label: 'Sådan skifter du din egen kode på din Chromebook', link: '/skift-af-koder/sadan-skifter-du-din-egen-kode-pa-din-chromebook/' }
      ]
    },
    {
      label: 'Skoletube',
      items: [
        { label: 'Oversigt', link: '/skoletube/oversigt/' },
        {
          label: 'Skoletube',
          items: [
            { label: 'Opret en kanal', link: '/skoletube/oversigt/skoletube/opret-en-kanal/' },
            { label: 'Indstillinger for din kanal', link: '/skoletube/oversigt/skoletube/indstillinger-for-din-kanal/' },
            { label: 'Hvordan finder jeg min kanal?', link: '/skoletube/oversigt/skoletube/hvordan-finder-jeg-min-kanal/' },
            { label: 'Invitér andre til din kanal', link: '/skoletube/oversigt/skoletube/inviter-andre-til-din-kanal/' }
          ]
        },
        {
          label: 'WeVideo',
          items: [
            { label: 'Sådan gemmer du din video', link: '/skoletube/oversigt/wevideo/sadan-gemmer-du-din-video/' }
          ]
        }
      ]
    },
    {
      label: 'Gode Links',
      items: [
        { label: 'Oversigt over links', link: '/gode-links/oversigt-over-links/' },
        { label: 'YouTube', link: 'https://yt.edbpede.net', attrs: { target: '_blank' } },
        { label: 'Google Translate', link: 'https://deepl.com/translator', attrs: { target: '_blank' } }
      ]
    }
  ]
}),
```

## Directory Structure Plan
The following directory structure will be implemented in the `/src/content/docs/` folder:

```
src/content/docs/
├── index.mdx                  # Introduktion (Home page)
├── loginproblemer/
│   └── den-bedste-made-at-logge-ind-pa.mdx
├── google-drev/
│   └── oversigt/
│       ├── index.mdx          # Main overview page
│       └── generelt/
│           ├── index.mdx      # Optional main generelt page
│           └── hvordan-deler-jeg-dokumenter.mdx
├── meebook/
│   └── kopiere-meddelsesbog-til-nyt-skolear.mdx
├── os2faktor/
│   ├── fa-os2faktor-til-din-chromebook.mdx
│   ├── hvordan-bruger-jeg-os2faktor.mdx
│   └── hvordan-fjerner-jeg-gamle-enheder-fra-os2faktor.mdx
├── skift-af-koder/
│   ├── sadan-skifter-du-kode-pa-uni-login.mdx
│   ├── sadan-skifter-du-kode-pa-meddel-til-chromebooks.mdx
│   └── sadan-skifter-du-din-egen-kode-pa-din-chromebook.mdx
├── skoletube/
│   └── oversigt/
│       ├── index.mdx          # Main overview page
│       ├── skoletube/
│       │   ├── index.mdx      # Optional main skoletube page
│       │   ├── opret-en-kanal.mdx
│       │   ├── indstillinger-for-din-kanal.mdx
│       │   ├── hvordan-finder-jeg-min-kanal.mdx
│       │   └── inviter-andre-til-din-kanal.mdx
│       └── wevideo/
│           ├── index.mdx      # Optional main wevideo page
│           └── sadan-gemmer-du-din-video.mdx
└── gode-links/
    └── oversigt-over-links.mdx
```

## URL Slug Structure
URL slugs will follow this pattern:
- Use the folder structure to create the URL path
- Remove Danish special characters (æ, ø, å) and replace with ae, oe, aa
- Use hyphens instead of spaces
- Keep URLs as close to the original content as possible for consistency

The URL structure follows a logical hierarchy:
- Primary section: `/section-name/`
- Article within a section: `/section-name/article-slug/`
- Nested article: `/section-name/subsection/article-slug/`

For example:
- `/loginproblemer/den-bedste-made-at-logge-ind-pa/`
- `/google-drev/oversigt/generelt/hvordan-deler-jeg-dokumenter/`
- `/skoletube/oversigt/skoletube/opret-en-kanal/`
