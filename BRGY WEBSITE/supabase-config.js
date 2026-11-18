
/* ==========================================
   BARANGAYHUB - SUPABASE CONNECTION
========================================== */

const SUPABASE_URL = "https://tgzinqpwruougtsvqfgf.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_eYcq_DXBqRrwGW5qrtv8Lw_DRR8dV7z";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
);

console.log("BarangayHub: Supabase connection initialized.");

/* ==========================================
   TEST SUPABASE DATABASE CONNECTION
========================================== */

async function testSupabaseConnection() {
    const { data, error } = await supabaseClient.rpc(
        "barangayhub_connection_check"
    );

    if (error) {
        console.error("Supabase database test failed:", error.message);
        return;
    }

    console.log("SUPABASE DATABASE RESPONSE:", data);
}

testSupabaseConnection();
