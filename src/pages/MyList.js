import React from "react";
import { useMyContext } from "../context/contextProvider";
import Button from "@material-ui/core/Button";

function MyList() {
  const { list, deleteChar } = useMyContext();

  return (
    <div>
      YOUR LIST
      {list.length > 0 ? (
        <>
          {list?.map((item) => (
            <>
              <img src={item.img} />
              <div className="NewReleasesSectionCard_text_top">
                <h1>{item.name}</h1>
                <span>Nickname: {item.nickname}</span>
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => deleteChar(item.char_id)}
              >
                DELET THE ITEM
              </Button>
            </>
          ))}
        </>
      ) : (
        <h1>YOUR LIST IS EMPTY</h1>
      )}
    </div>
  );
}

export default MyList;
