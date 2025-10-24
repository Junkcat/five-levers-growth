import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

    console.log("Sending contact request:", { company, name, contact, requestType });

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FiveLevers <onboarding@resend.dev>",
        to: ["akolesnikov@5levers.pro"],
        subject: `FiveLevers: ${requestType} - ${company}`,
        html: `
          <h2>Новый запрос: ${requestType}</h2>
          <p><strong>Компания:</strong> ${company}</p>
          <p><strong>ФИО:</strong> ${name}</p>
          <p><strong>Контакт:</strong> ${contact}</p>
          <hr />
          <p><em>Отправлено с сайта FiveLevers</em></p>
        `,
      }),
    });

    const emailData = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", emailData);
      throw new Error(emailData.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify(emailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
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
