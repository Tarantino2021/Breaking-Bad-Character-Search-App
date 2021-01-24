import React from "react";
import { useMyContext } from "../context/contextProvider";
import Button from "@material-ui/core/Button";

function MyList() {
  const { list, deleteChar } = useMyContext();

  return (
    <div className="myList">
      <h1 className="myList_heading">YOUR LIST OF CHARACTERS</h1>
      {list.length > 0 ? (
        <>
          {list?.map((item) => (
            <div className="myList_item_wrapper">
              <img src={item.img} />
              <div className="myList_text_top">
                <h1>{item.name}</h1>
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteChar(item.char_id)}
              >
                DELETE THE CHARACTER
              </Button>
            </div>
          ))}
        </>
      ) : (
        <h1>YOUR LIST IS EMPTY</h1>
      )}
    </div>
  );
}

export default MyList;
