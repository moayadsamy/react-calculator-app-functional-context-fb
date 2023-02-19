import { useContext, useRef } from "react";
import { AppContext } from "../context/app-context";
import MarksController from "../controllers/MarksController";
import Mark from "../models/Mark";
import FormGroup from "./FormGroup";

let AverageForm = () => {
    let nameRef = useRef();
    let midTermRef = useRef();
    let finalRef = useRef();
    let activitiesRef = useRef();

    let context = useContext(AppContext);

    let onSubmitHandler = async (event) => {
        event.preventDefault();
        if(checkData()) {
            // TODO: Call save Function from MarksController
            let mark = getMark();
            let controller = new MarksController();
            let id = await controller.create(mark);
            if (id != null) {
                mark.id = id;
                context.addMark(mark);
            }
        }
        // console.log(nameRef.current.value);
    };

    let checkData = () => {
        if(nameRef.current.value != "" && midTermRef.current.value != "" && finalRef.current.value != "" && activitiesRef.current.value != "" ) {
            return true;
        }

        alert("Enter required data");
        return false;
    };

    let getMark = () => {
        return new Mark(nameRef.current.value, midTermRef.current.value, finalRef.current.value, activitiesRef.current.value);
    }

    return(
        <form className="marks-form" onSubmit={onSubmitHandler}>
        <FormGroup  label="student Name" type="text" placeholder="Enter Student Name" ref={nameRef}/>
        <FormGroup  label="mid-term" type="number" placeholder="Enter Mid Term" ref={midTermRef}/>
        <FormGroup  label="Final" type="number" placeholder="Enter Final Mark" ref={finalRef}/>
        <FormGroup  label="Activities" type="number" placeholder="Enter Activities" ref={activitiesRef}/>
        
    
        <button type="submit" className="form-btn">SAVE</button>
      </form>
    );
};
export default AverageForm;