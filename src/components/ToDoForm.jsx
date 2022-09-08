import React from "react";
import { useState } from "react";


const ToDoFrom = () => {
    let [addAList, setAddAList] = useState("");
    let [allLists, setAllLists] = useState([]);
    let [checkedItem, setCheckedItem] = useState(false);

    //add an item to the list
    const addToList = (e) => {
        e.preventDefault();
        let newList = { addAList, checkedItem };
        console.log(newList);
        setAllLists([...allLists, newList]);
    }

    //delete an item form the list
    const deleteItem = (e, index) => {
        console.log("delete an item", e, index)
        let elem = document.querySelector(`#check-${index}`)
        if(elem.checked == true){
            let copy = [...allLists]
            copy.splice(index,1);
            setAllLists(copy);
        } else {
            alert("please check the item first");
        }
    }

    const checkOnOff = (e, index) => {
        console.log("check box test", e, index);
        let copyAllLists = [...allLists];
        copyAllLists[index].checkedItem = e.target.checked;
        setAllLists(copyAllLists);
    }

    return (
        <div>
            <form onSubmit={addToList}>
                <div>
                    <label>Add an item to the list:</label><br></br>
                    <input type="text" onChange={(e) => setAddAList(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>

            {/*--------------------------------*/}

            <hr></hr>
            <h2> List Items:</h2>
            <div className="main-div">
                {
                    allLists.map((oneList, index) => {
                        return (
                            <div key={index}>
                                {/* show item with or without line */}
                                <p className="par" style={{ textDecorationLine: oneList.checkedItem ? 'line-through' : "" }}>
                                    {oneList.addAList}
                                </p>
                                {/* check if the item check box is true or false and display it accordingly */}
                                {oneList.checkedItem ?
                                    <input id={`check-${index}`} type="checkbox" onChange={(e) => checkOnOff(e, index)} checked /> :
                                    <input id={`check-${index}`} type="checkbox" onChange={(e) => checkOnOff(e, index)} />}
                                
                                {/* delete item */}
                                <button onClick={(e) => deleteItem(e, index)}>Del</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default ToDoFrom;