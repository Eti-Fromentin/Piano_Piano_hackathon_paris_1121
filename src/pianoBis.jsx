import React from "react";
import { KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
import "./piano.css";

import SoundfontProvider from "./SoundfontProvider";
import PianoWithRecording from "./pianoWithRecordings";

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("a3"),
  last: MidiNumbers.fromNote("d5"),
};
const Keyshortcuts = {
  HOME_ROW: [
    {
      natural: "q",
      flat: "a",
      sharp: "z",
    },
    {
      natural: "s",
      flat: "z",
      sharp: "e",
    },
    {
      natural: "d",
      flat: "e",
      sharp: "r",
    },
    {
      natural: "f",
      flat: "r",
      sharp: "t",
    },
    {
      natural: "g",
      flat: "t",
      sharp: "y",
    },
    {
      natural: "h",
      flat: "y",
      sharp: "u",
    },
    {
      natural: "j",
      flat: "u",
      sharp: "i",
    },
    {
      natural: "k",
      flat: "i",
      sharp: "o",
    },
    {
      natural: "l",
      flat: "o",
      sharp: "p",
    },
    {
      natural: "m",
      flat: "p",
      sharp: "ù",
    },
    {
      natural: "ù",
      flat: "p",
      sharp: ";",
    },
  ],
};

const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: Keyshortcuts.HOME_ROW,
});

class pianoBis extends React.Component {
  state = {
    recording: {
      mode: "RECORDING",
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
  };

  constructor(props) {
    super(props);

    this.scheduledEvents = [];
  }

  render() {
    return (
      <div className="pianoContainer">
        <div className="mt-5">
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }) => (
              <PianoWithRecording
                recording={this.state.recording}
                setRecording={this.setRecording}
                noteRange={noteRange}
                width={1500}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
                keyboardShortcuts={keyboardShortcuts}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default pianoBis;
