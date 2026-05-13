import { createClient } from "@supabase/supabase-js";

const supabaseUrl = `https://lpkxxzhnlcclztbacepz.supabase.co`;
const supabasePublishableKey = `sb_publishable_MOcP6f86AzuwIVyfZh-EMw_-O97dc5m`;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

export default supabase;
