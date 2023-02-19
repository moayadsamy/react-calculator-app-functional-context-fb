import axios from "axios";
import Mark from "../models/Mark";

class MarksController {

    /**
     * Delete Function
     * @param id
     * @return boolean delete
     */


    async delete (id) {
        try {
            let response = await axios.delete(`https://react-calc-1-b6090-default-rtdb.firebaseio.com/marks/${id}.json`);
            return response.status == 200;
        } catch (error) {
            return false;
        }
    }

    /**
     * Read Function
     * @return [mark]
     */

    async read() {
        try {
            let response = await axios.get(
                "https://react-calc-1-b6090-default-rtdb.firebaseio.com/marks.json"
            );
            if (response.status == 200) {
                let marks = [];
                for (let key in response.data) {
                    let object = response.data[key];
                    let mark = new Mark();
                    mark.id = key;
                    mark.name = object.name;
                    mark.mid = object.mid;
                    mark.activities = object.activities;
                    mark.final = object.final;
                    marks.push(mark);
                }
                return marks;
            }
        } catch (error) {
            return [];
        }
    }

    /**
     * Create Function
     * @param {Mark} mark 
     * @return Mark mark
     */

    async create(mark) {
        try {
            let response = await axios.post('https://react-calc-1-b6090-default-rtdb.firebaseio.com/marks.json', mark);
        if (response.status == 200) {
            return response.data.name;
        }
        } catch (error) {
            return null;
        }
    }
    // create(mark) {
    //     axios.post("https://react-calc-1-b6090-default-rtdb.firebaseio.com/marks.json",
    //         mark,  
    // )
    //     .then((response) => {
    //         mark.id = response.data.name;
    //         console.log(mark);
    //         return mark;
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    //     return null;
    // }
}

export default MarksController;