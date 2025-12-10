import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ueber_wteo: resolve(__dirname, 'ueber-wteo/index.html'),
                zertifizierungen: resolve(__dirname, 'zertifizierungen/index.html'),
                bewerbung: resolve(__dirname, 'bewerbung/index.html'),
                events_awards: resolve(__dirname, 'events-awards/index.html'),
                register: resolve(__dirname, 'register/index.html'),
                trainer_partner: resolve(__dirname, 'trainer-partner/index.html'),
                community: resolve(__dirname, 'community/index.html'),
                kontakt: resolve(__dirname, 'kontakt/index.html'),
                rechtliches: resolve(__dirname, 'rechtliches/index.html'),

                en_main: resolve(__dirname, 'en/index.html'),
                en_about: resolve(__dirname, 'en/about/index.html'),
                en_certifications: resolve(__dirname, 'en/certifications/index.html'),
                en_apply: resolve(__dirname, 'en/apply/index.html'),
                en_events_awards: resolve(__dirname, 'en/events-awards/index.html'),
                en_register: resolve(__dirname, 'en/register/index.html'),
                en_trainer_partner: resolve(__dirname, 'en/trainer-partner/index.html'),
                en_community: resolve(__dirname, 'en/community/index.html'),
                en_contact: resolve(__dirname, 'en/contact/index.html'),
                en_legal: resolve(__dirname, 'en/legal/index.html'),
            },
        },
    },
})
