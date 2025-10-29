import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // или твой домен
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Vary": "Origin",
};

const TG_TOKEN = (Deno.env.get("TELEGRAM_BOT_TOKEN") ?? "").trim();
const TG_CHAT_ID = (Deno.env.get("TELEGRAM_CHAT_ID") ?? "").trim();

const tgUrl = (m: string) => `https://api.telegram.org/bot${TG_TOKEN}/${m}`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders, status: 200 });

  try {
    const { company, name, contact, requestType } = await req.json();

    if (!TG_TOKEN || !TG_CHAT_ID) {
      return new Response(JSON.stringify({ error: "Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Health-check токена (помогает отличить 'token bad' от 'chat not found')
    const me = await fetch(tgUrl("getMe"));
    if (!me.ok) {
      const body = await me.text();
      return new Response(JSON.stringify({ error: "Invalid bot token", body }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const text =
      `🔔 Новый запрос: ${requestType || "-"}\n\n` +
      `📊 Компания: ${company || "-"}\n` +
      `👤 ФИО: ${name || "-"}\n` +
      `📧 Контакт: ${contact || "-"}`;

    const chatId = /^\-?\d+$/.test(TG_CHAT_ID) ? Number(TG_CHAT_ID) : TG_CHAT_ID;

    const tgResp = await fetch(tgUrl("sendMessage"), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });

    const tgJson = await tgResp.json().catch(() => null);
    if (!tgResp.ok || tgJson?.ok === false) {
      const code = tgJson?.error_code ?? tgResp.status;
      const desc = tgJson?.description ?? "Unknown Telegram error";
      return new Response(JSON.stringify({ telegram_error: { code, desc } }), {
        status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
