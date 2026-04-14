import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

interface ComingSoonProps {
  title: string;
  description: string;
}

const ComingSoon = ({ title, description }: ComingSoonProps) => {
  const navigate = useNavigate();
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />
      <section className="min-h-[70vh] flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-6">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Скоро</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate("/")}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                К продуктам
              </Button>
              <Button onClick={() => setDialogOpen(true)}>
                Узнать о запуске
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} requestType={`Интерес к: ${title}`} />
    </div>
  );
};

export default ComingSoon;
