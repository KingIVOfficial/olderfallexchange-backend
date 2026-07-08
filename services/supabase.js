import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qyumplqtxdbidwrypmcn.supabase.co";
const supabaseServiceRoleKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5dW1wbHF0eGRiaWR3cnlwbWNuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MzEwNDMxMCwiZXhwIjoyMDk4NjgwMzEwfQ.c9QaeMZxO0o8JipfBsjmOl474phEHY2WSSOMebsnNPw";

export const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);
