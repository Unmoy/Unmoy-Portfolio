import "./ServiceCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ServiceCard = ({ service }) => {
  const { name, description, icon } = service;
  return (
    <div className="col-12 col-lg-6 col-md-6">
      <div class="box_wrapper">
        <p class="work_title">
          {name}
          <FontAwesomeIcon icon={icon} className="service_icon" />
        </p>
        <p class="details">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
