import React, { useState } from "react";
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
            <div className="myList_item_wrapper" key={item.char_id}>
              <div className="myList_img_wrapper">
                <img src={item.img} />

                <div className="extraInfo_wrapper">
                  <div className="extraInfo_text_wrapper">
                    <h2>
                      Birthday <h3>{item.birthday}</h3>
                    </h2>
                    <h2>
                      Nickname <h3>{item.nickname}</h3>
                    </h2>
                    <h2>
                      Portrayed <h3>{item.portrayed}</h3>
                    </h2>
                    <h2>
                      Status<h3>{item.status}</h3>{" "}
                    </h2>
                    <h2>Occupation</h2>
                    {item.occupation.map((info) => (
                      <h3>{info}</h3>
                    ))}
                  </div>
                </div>
              </div>

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
        <h1>Your list is empty</h1>
      )}
    </div>
  );
}

export default MyList;
