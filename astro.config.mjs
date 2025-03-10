// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'EDB Guides',
      description: 'Vejledninger til IT-værktøjer i skolen',
      defaultLocale: 'da',
      locales: {
        da: {
          label: 'Dansk'
        }
      },
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
      ],
      customCss: [
        // Path to your custom CSS file, relative to the project root
        './src/styles/global.css'
      ],
      components: {
        // Custom component overrides can be added here
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});