/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Public Mailchimp form user id (`u=`). Never put an API key in Vite env. */
  readonly VITE_MAILCHIMP_U?: string;
  readonly VITE_MAILCHIMP_ID?: string;
  readonly VITE_MAILCHIMP_DC?: string;
  readonly VITE_MAILCHIMP_PREFIX?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
