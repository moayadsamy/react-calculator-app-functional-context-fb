const { createContext, useState } = require("react");

export const AppContext = createContext({
    marks: [],
    addMark: (mark) => {},
    addMarks: (marks) => {},
    deleteMark: (id) => {},
});

export const AppContextProvider = (props) => {
    let [marks, setMarks] = useState([]);

    let addMarks = (marks) => {
        setMarks(marks);
    };
    let addMark = (mark) => {
        setMarks((prevState) => {
            return [mark, ...prevState];
        });
    };
    let deleteMark = (id) => {
        let filteredMarks = marks.filter((element) => element.id != id);
        setMarks(filteredMarks);
    };

    return <AppContext.Provider value={{
        marks: marks,
        addMark: addMark,
        addMarks: addMarks,
        setMark: addMark,
        deleteMark: deleteMark,
    }}>{props.children}</AppContext.Provider>
}