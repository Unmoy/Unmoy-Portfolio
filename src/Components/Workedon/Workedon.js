import "./Workedon.css";
import { Link } from "react-router-dom";

const Workedon = ({ project }) => {
  const { name, description, id } = project;
  return (
    <div class="box-container col-md-4">
      <div class="box-1">
        <span>{id}</span>
        <p class="work-title">{name}</p>
        <p class="details">{description}</p>
        <button>
          <Link className="see_more_link" to="/projects">
            See More
          </Link>
        </button>
      </div>
      s
    </div>
  );
};

export default Workedon;
