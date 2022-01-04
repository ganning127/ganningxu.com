module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          "fs": false,
          "path": false,
          "os": false,
        }
      }
      return config
    },
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_CLIENT_KEY: process.env.NEXT_PUBLIC_SUPABASE_CLIENT_KEY,
      NEXT_PUBLIC_SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,
    }
  }
}