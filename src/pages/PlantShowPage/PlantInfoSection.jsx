import PlantHeading from "./PlantHeading";
import BenefitBox from "./BenefitBox";
import PlantPurchaseOptions from "pages/PlantListPage/PlantPurchaseOptions";

const PlantInfoSection = (props) => {
  const { plant } = props;

  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col flex-1">
        <div className="block mb-8 md:hidden">
          <PlantHeading plant={plant} />
        </div>
        <img className="rounded-lg" src={plant.images[0].src} />
        <div className="flex mt-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="bg-slate-300 w-px"></div>
          <BenefitBox
            icon="fa-regular fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders over $50"
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 md:px-8">
        <div className="hidden md:block">
          <PlantHeading plant={plant} />
        </div>
        <p className="leading-relaxed mt-4 text-slate-600">
          {plant.description}
        </p>
        <PlantPurchaseOptions plant={plant} />
      </div>
    </div>
  );
};

export default PlantInfoSection;
