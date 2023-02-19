import { useContext, useEffect } from "react";
import AverageCard from "../components/AverageCard";
import AverageForm from "../components/AverageForm";
import { AppContext } from "../context/app-context";
import MarksController from "../controllers/MarksController";
import "../resources/style.css";
let App = () => {
  let context = useContext(AppContext);
  let controller = new MarksController();

  let fetchData = async () => {
    let data = await controller.read();
    if (data.length > 0) {
      context.addMarks(data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


    return(
        <div className="content-wrapper">
      <section className="form-section">
        <header className="form-header">
          <article className="form-header_content">
            <span className="form-title">Average Calculator</span>
            <p className="form-info">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eum
              consectetur explicabo, molestias, hic aut perferendis, deleniti
              dolores repellendus natus numquam. Qui laborum alias eligendi, ab
              voluptas itaque? Exercitationem, minima? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Suscipit veniam sit quisquam
              vero quod. Eum velit excepturi id ratione, facere aut sequi
              architecto tempora a numquam odit quidem totam exercitationem.
            </p>
          </article>
          <figure className="form-header_img">
            <img
              src="https://img.freepik.com/free-vector/calculator-concept-illustration_114360-2686.jpg?w=2000"
              alt=""
            />
          </figure>
        </header>
        <AverageForm />
      </section>
      <section>
        {context.marks.map((element) => (
          <AverageCard key={element.id} mark={element} />
        ))}
      </section>
    </div>
    );
};
export default App;