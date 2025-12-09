import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary">
      <div className="text-center px-4">
        <div className="w-24 h-24 rounded-full hero-gradient flex items-center justify-center mx-auto mb-8">
          <span className="text-primary-foreground font-bold text-4xl">404</span>
        </div>
        <h1 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Página não encontrada</h1>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Desculpe, não conseguimos encontrar a página que você está procurando.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="default" size="lg" asChild>
            <a href="/">
              <Home className="w-5 h-5" />
              Voltar ao Início
            </a>
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
