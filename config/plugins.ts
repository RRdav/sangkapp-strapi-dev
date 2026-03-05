import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase-bucket',
      providerOptions: {
        apiUrl: env('SUPABASE_API_URL'),
        apiKey: env('SUPABASE_API_KEY'),
        bucket: env('SUPABASE_BUCKET'),
        directory: env('SUPABASE_DIRECTORY', ''),
        publicFiles: env.bool('SUPABASE_PUBLIC_FILES', true),
        signedUrlExpires: env.int('SUPABASE_SIGNED_URL_EXPIRES', 3600),
      },
      sizeLimit: 250 * 1024 * 1024, // 250MB
    },
  },
});

export default config;