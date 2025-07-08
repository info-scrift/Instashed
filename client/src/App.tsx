import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Quote from "@/pages/Quote";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import ResidentialSheds from "@/pages/ResidentialSheds";
import AgriculturalBarns from "@/pages/AgriculturalBarns";
import PrefabGarages from "@/pages/PrefabGarages";
import CommercialBuildings from "@/pages/CommercialBuildings";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/residential-sheds" component={ResidentialSheds} />
      <Route path="/services/agricultural-barns" component={AgriculturalBarns} />
      <Route path="/services/prefab-garages" component={PrefabGarages} />
      <Route path="/services/commercial-buildings" component={CommercialBuildings} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/quote" component={Quote} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
