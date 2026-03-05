import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'https://market-assets.strapi.io',
            'strapi-ai-staging.s3.us-east-1.amazonaws.com',
            'strapi-ai-production.s3.us-east-1.amazonaws.com',
            'https://ltbayhwxivltmrczvadg.supabase.co'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'https://ltbayhwxivltmrczvadg.supabase.co'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;