import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const TG_TOKEN = "8120833901:AAETeqkfLA_ynt-E0fShaDD8KtXc3CyroRs";
const TG_CHAT_ID = 7778603;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { company, name, contact, requestType } = await req.json();

    console.log("Получен запрос:", { company, name, contact, requestType });

    const text =
      `🔔 Новый запрос: ${requestType || "-"}\n\n` +
      `📊 Компания: ${company || "-"}\n` +
      `👤 ФИО: ${name || "-"}\n` +
      `📧 Контакт: ${contact || "-"}`;

    const tgUrl = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;

    console.log("Отправка сообщения в Telegram...");

    const tgResp = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text: text,
        parse_mode: "HTML",
      }),
    });

    const tgJson = await tgResp.json();
    console.log("Ответ от Telegram:", tgJson);

    if (!tgResp.ok || tgJson?.ok === false) {
      console.error("Ошибка Telegram API:", tgJson);
      return new Response(
        JSON.stringify({ 
          error: "Telegram API error", 
          details: tgJson 
        }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    console.log("Сообщение успешно отправлено");

    return new Response(
      JSON.stringify({ success: true, message: "Сообщение отправлено" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Ошибка в функции:", err);
    return new Response(
      JSON.stringify({ error: String(err) }),
      {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
