import React, { useState } from "react";
import Header from "./components/Header";
import { Note } from "./models/note.model";
import { Grid } from "@mui/material";
import "./App.css";
import NotesList from "./components/NotesList";
import { Container } from "@mui/system";
import CreateNotes from "./components/CreateNotes";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: new Date().toString(),
      title: "Meetings",
      text: " Schedule meeting with UI/UX Team",
      color: "#dfdfdf",
      date: new Date().toString(),
    },
  ]);

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <NotesList notes={notes} setNotes={setNotes}/>
            <CreateNotes notes={notes} setNotes={setNotes}/>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
