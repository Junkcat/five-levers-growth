import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const TG_TOKEN = ("8120833901:AAETeqkfLA_ynt-E0fShaDD8KtXc3CyroRs").trim();

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  company: string;
  name: string;
  contact: string;
  requestType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { company, name, contact, requestType }: ContactRequest = await req.json();

    console.log("Sending contact request to Telegram:", { company, name, contact, requestType });

    // Send Telegram notification
    try {
      const telegramMessage = `🔔 Новый запрос: ${requestType}\n\n📊 Компания: ${company}\n👤 ФИО: ${name}\n📧 Контакт: ${contact}`;
      
      const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: "@askolesnikov",
          text: telegramMessage,
          parse_mode: "HTML",
        }),
      });

      const telegramData = await telegramResponse.json();
      
      if (!telegramResponse.ok) {
        console.error("Telegram API error:", telegramData);
        throw new Error(telegramData.description || "Failed to send Telegram message");
      }

      console.log("Telegram notification sent successfully:", telegramData);

      return new Response(JSON.stringify({ success: true, message: "Telegram notification sent" }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      });
    } catch (telegramError: any) {
      console.error("Error sending Telegram notification:", telegramError);
      throw telegramError;
    }
  } catch (error: any) {
    console.error("Error in send-contact-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
