import NavBar from "shared-components/NavBar";
import RedirectToSignedInIfSignedOut from "shared-components/RedirectToPlantsIfSignedInIfSignedOut";
import { useEffect } from "react";
import * as plantService from "services/plant";

const PlantListPage = () => {
  useEffect(() => {
    (async () => {
      const response = await plantService.getPlants();
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <RedirectToSignedInIfSignedOut>
      <NavBar />
    </RedirectToSignedInIfSignedOut>
  );
};

export default PlantListPage;
