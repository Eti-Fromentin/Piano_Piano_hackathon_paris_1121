import React, { useEffect, useState } from "react";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import SoundfontProvider from "./SoundfontProvider";

import "react-piano/dist/styles.css";
import "./piano.css";

function PianoKeyboard() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";
  const [ notesPlayed, setNotesPlayed] = useState([])

  const Keyshortcuts = {
    HOME_ROW: [{
      natural: 'q',
      flat: 'a',
      sharp: 'z'
    }, {
      natural: 's',
      flat: 'z',
      sharp: 'e'
    }, {
      natural: 'd',
      flat: 'e',
      sharp: 'r'
    }, {
      natural: 'f',
      flat: 'r',
      sharp: 't'
    }, {
      natural: 'g',
      flat: 't',
      sharp: 'y'
    }, {
      natural: 'h',
      flat: 'y',
      sharp: 'u'
    }, {
      natural: 'j',
      flat: 'u',
      sharp: 'i'
    }, {
      natural: 'k',
      flat: 'i',
      sharp: 'o'
    }, {
      natural: 'l',
      flat: 'o',
      sharp: 'p'
    }, {
      natural: 'm',
      flat: 'p',
      sharp: 'ù'
    }, {
      natural: "!",
      flat: ':',
      sharp: ';'
    }],
  };

  const noteRange = {
    first: MidiNumbers.fromNote("a3"),
    last: MidiNumbers.fromNote("d5"),
  };
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: noteRange.first,
    lastNote: noteRange.last,
    keyboardConfig: Keyshortcuts.HOME_ROW,
  });

  useEffect(() => {
  
  }, [])

    return (
      <SoundfontProvider
        instrumentName="acoustic_grand_piano"
        audioContext={audioContext}
        hostname={soundfontHostname}
        render={({ isLoading, playNote, stopNote, onPlayNoteInput }) => (
          <Piano
            noteRange={noteRange}
            width={1500}
            playNote={playNote}
            stopNote={stopNote}
            disabled={isLoading}
            keyboardShortcuts={keyboardShortcuts}
            onPlayNoteInput={onPlayNoteInput}
          />

        )}
      />
    
  


  );
}

export default PianoKeyboard;