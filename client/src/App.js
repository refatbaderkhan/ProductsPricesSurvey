import DateAndUsernameSection from "components/ui/DateAndUsernameSection";
import LocationAndSupplierSection from "components/ui/LocationAndSupplierSection";
import ProductGroupSection from "components/ui/ProductGroupSection";
import ProductDetailsSection from "components/ui/ProductDetailsSection";
import ProductPriceSection from "components/ui/ProductPriceSection";


function App() {
  return (
    <div className="w-full">
      <DateAndUsernameSection />
      <LocationAndSupplierSection />
      <ProductGroupSection />
      <ProductDetailsSection />
      <ProductPriceSection />
    </div>
  );
}

export default App;
