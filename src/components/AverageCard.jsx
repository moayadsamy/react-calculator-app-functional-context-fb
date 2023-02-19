import { useContext } from "react";
import { AppContext } from "../context/app-context";
import MarksController from "../controllers/MarksController";

let AverageCard = (props) => {

  let controller = new MarksController();
  let context = useContext(AppContext);

  let onDeleteHandler = async () => {
    let deleted = await controller.delete(props.mark.id);
    if (deleted) {
      context.deleteMark(props.mark.id);
    }
  };
    return (
        <section className="card">
          <article className="card-top-content">
            <div className="card-top-content-leading">
              <span className="name-first-char">S</span>
              <div className="student-info">
                <span>{props.mark.name}</span>
                <span>{props.mark.id}</span>
              </div>
            </div>
            <button className="delete-btn" onClick={onDeleteHandler}>
              <i className="fa-solid fa-xmark delete-row"></i>
            </button>
          </article>
          <article className="card-marks">
            <section className="mark-info">
              <span>Mid-Term</span>
              <span>{props.mark.mid}</span>
            </section>
            <section className="mark-info">
              <span>Final-Term</span>
              <span>{props.mark.final}</span>
            </section>
            <section className="mark-info">
              <span>Activities</span>
              <span>{props.mark.activities}</span>
            </section>
          </article>
        </section>
    );
};
export default AverageCard;