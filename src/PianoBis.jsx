import React from 'react';
import _ from 'lodash';
import { KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import "./piano.css";

import SoundfontProvider from './SoundfontProvider';
import PianoWithRecording from './pianoWithRecordings';

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('a3'),
  last: MidiNumbers.fromNote('d5'),
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

class PianoBis extends React.Component {
  state = {
    recording: {
      mode: 'RECORDING',
      events: [],
      currentTime: 0,
      currentEvents: [],
    },
  };

  constructor(props) {
    super(props);

    this.scheduledEvents = [];
  }

  getRecordingEndTime = () => {
    if (this.state.recording.events.length === 0) {
      return 0;
    }
    return Math.max(
      ...this.state.recording.events.map(event => event.time + event.duration),
    );
  };

  setRecording = value => {
    this.setState({
      recording: Object.assign({}, this.state.recording, value),
    });
  };

  onClickPlay = () => {
    this.setRecording({
      mode: 'PLAYING',
    });
    const startAndEndTimes = _.uniq(
      _.flatMap(this.state.recording.events, event => [
        event.time,
        event.time + event.duration,
      ]),
    );
    startAndEndTimes.forEach(time => {
      this.scheduledEvents.push(
        setTimeout(() => {
          const currentEvents = this.state.recording.events.filter(event => {
            return event.time <= time && event.time + event.duration > time;
          });
          this.setRecording({
            currentEvents,
          });
        }, time * 1000),
      );
    });
    // Stop at the end
    setTimeout(() => {
      this.onClickStop();
    }, this.getRecordingEndTime() * 1000);
  };

  onClickStop = () => {
    this.scheduledEvents.forEach(scheduledEvent => {
      clearTimeout(scheduledEvent);
    });
    this.setRecording({
      mode: 'RECORDING',
      currentEvents: [],
    });
  };

  onClickClear = () => {
    this.onClickStop();
    this.setRecording({
      events: [],
      mode: 'RECORDING',
      currentEvents: [],
      currentTime: 0,
    });
  };

  render() {
    return (
      <div className='pianoContainer'>
        
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

export default PianoBis;