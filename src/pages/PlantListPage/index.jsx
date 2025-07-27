import NavBar from "shared-components/NavBar";
import RedirectToSignedInIfSignedOut from "shared-components/RedirectToPlantsIfSignedInIfSignedOut";
import { useEffect, useState } from "react";
import * as plantService from "services/plant";
import PlantItem from "./PlantItem";

const PlantListPage = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();

      setPlants(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <RedirectToSignedInIfSignedOut>
      <NavBar />
      <div className="min-h-screen bg-green-50">
        {isLoading ? (
          <div className="flex justify-center pt-40">
            <i className="animate-spin fa-solid fa-arrows-rotate text-emerald-600 text-3xl"></i>
          </div>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="text-4xl font-playfair text-emerald-800 mb-6">
                Plants In Stock
              </div>
              <div className="flex flex-wrap justify-center">
                {plants.map((plant, idx) => (
                  <PlantItem key={idx} plant={plant} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </RedirectToSignedInIfSignedOut>
  );
};

export default PlantListPage;
