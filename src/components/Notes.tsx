import * as React from "react";
import { Note } from "../models/note.model";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Button, CardActions } from "@mui/material";

interface INoteProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes: React.FunctionComponent<INoteProps> = ({ note, handleDelete }) => {
  return (
    <>
      <Card
        sx={{
          width: "30%",
          minHeight: 280,
          backgroundColor: note.color,
          marginBottom: 5,
        }}
      >
        <CardHeader title={note.title} />
        <CardContent>{note.text}</CardContent>
        <CardContent>{note.date}</CardContent>
        <CardActions>
          <Button
            size="small"
            color="error"
            variant="outlined"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Notes;
