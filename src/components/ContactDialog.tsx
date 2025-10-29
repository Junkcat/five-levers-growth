import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  company: z.string().trim().min(1, "Название компании обязательно").max(200, "Максимум 200 символов"),
  name: z.string().trim().min(1, "ФИО обязательно").max(200, "Максимум 200 символов"),
  contact: z.string().trim().min(1, "Email или Telegram обязателен").max(255, "Максимум 255 символов"),
});

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  requestType: "diagnostic" | "methodology";
}

const ContactDialog = ({ open, onOpenChange, requestType }: ContactDialogProps) => {
  const [loading, setLoading] = useState(false);
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate inputs
      const validated = contactSchema.parse({ company, name, contact });
      
      setLoading(true);

      const { error } = await supabase.functions.invoke("send-contact-request", {
        body: {
          company: validated.company,
          name: validated.name,
          contact: validated.contact,
          requestType: requestType === "diagnostic" ? "Запрос диагностики" : "Скачать методологию PDF"
        },
      });

      if (error) throw error;

      toast({
        title: "Спасибо за запрос!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      // Reset form
      setCompany("");
      setName("");
      setContact("");
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Ошибка валидации",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить запрос. Попробуйте позже. Тест",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {requestType === "diagnostic" ? "Запросить диагностику" : "Скачать методологию PDF"}
          </DialogTitle>
          <DialogDescription>
            Заполните форму и мы свяжемся с вами в течение 48 часов
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="company">Название компании</Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="ООО Компания"
              required
              maxLength={200}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">ФИО</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Иванов Иван Иванович"
              required
              maxLength={200}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Email или Telegram</Label>
            <Input
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="email@example.com или @telegram"
              required
              maxLength={255}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Отправка..." : "Отправить"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
