import * as React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button } from "@mui/material";
import { Note } from "../models/note.model";
import { useState,useRef } from "react";
import ColorPicker from "material-ui-color-picker";

interface ICreateNotesProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({
  notes,
  setNotes,
}) => {
  const textRef=useRef<HTMLInputElement | null>(null)
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [color, setColor] = useState("#dfdfdf");
  const handleSubmit = (): void => {
    if (title === "" || text === "") {
      console.log("error");
      debugger;
      console.log(textRef.current?.value)
      return;
    }
    setNotes([
      ...notes,
      {
        id: new Date().toString(),
        title: title,
        text: text,
        color: color,
        date: new Date().toString(),
      },
    ]);

    setText("");
    setTitle("");
  };
  return (
    <>
      <h2>Create Notes</h2>
      <Box>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          sx={{ display: "block", margin: 2 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          inputRef={textRef}
        />
        <TextField
          id="text"
          label="Text"
          variant="outlined"
          inputProps={{
            style: {
              height: 100,
              padding: "0 14px",
            },
          }}
          sx={{ display: "block", margin: 2 }}
          multiline
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <TextField
          id="color"
          label="Color"
          variant="outlined"
          defaultValue="#dfdfdf"
          sx={{ display: "block", margin: 2 }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        
        <Button
          variant="outlined"
          sx={{ display: "block", margin: 2 }}
          onClick={(e) => handleSubmit()}
        >
          Create Notes
        </Button>

        
      </Box>
    </>
  );
};

export default CreateNotes;
