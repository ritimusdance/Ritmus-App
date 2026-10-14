// Preencha as duas linhas abaixo com os dados do seu projeto no Supabase
// (Project Settings > API > Project URL e anon public key).
// A chave "anon public" pode ficar aqui: ela é pública por natureza e a proteção
// dos dados é feita pelo login e pelas regras do banco (schema.sql).
window.RITMUS_CONFIG = {
  SUPABASE_URL: https://zcinnqnjhbvtgyoeaigm.supabase.co/rest/v1/,
  SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjaW5ucW5qaGJ2dGd5b2VhaWdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5OTIwMjgsImV4cCI6MjEwNzU2ODAyOH0.6ZcRxVhksH_KwmxgXT5TpihJiSx7F1EKXOuBqdo98yw,

  // E-mails dos dois usuários criados em Authentication > Users no Supabase.
  // Se mudar aqui, mude também no schema.sql (tabela perfis).
  EMAIL_DIRETORIA: "diretoria@ritmus.app",
  EMAIL_GERENTE: "gerente@ritmus.app"
};
