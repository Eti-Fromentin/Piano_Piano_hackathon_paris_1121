import React from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";

import SoundfontProvider from "./SoundfontProvider";
import "./piano.css";

function PianoKeyboard() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

  const noteRange = {
    first: MidiNumbers.fromNote("a3"),
    last: MidiNumbers.fromNote("d5"),
  };
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });


    return (
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote }) => (
          <Piano
            noteRange={noteRange}
            width={1500}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
          />
        )}
      />
    
  


  );
}

export default PianoKeyboard;