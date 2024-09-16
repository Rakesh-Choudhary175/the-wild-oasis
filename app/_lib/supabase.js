import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = "https://jgjhpshbhcaroqitczhl.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impnamhwc2hiaGNhcm9xaXRjemhsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMTkzNzQ5NCwiZXhwIjoyMDM3NTEzNDk0fQ.U9if8zOqYEMDBqc8iMax7C5gJucRHVQvcp4txoPIEOo";

// export const supabase = createClient(supabaseUrl, supabaseKey);
