import NavBar from "shared-components/NavBar";
import RedirectToSignedInIfSignedOut from "shared-components/RedirectToPlantsIfSignedInIfSignedOut";

const PlantListPage = () => {
  return (
    <RedirectToSignedInIfSignedOut>
      <NavBar />
    </RedirectToSignedInIfSignedOut>
  );
};

export default PlantListPage;
