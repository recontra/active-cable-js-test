import React from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

export default class Agenda extends React.Component {
  constructor(...props) {
    super(...props);

    this.handleReceived = this.handleReceived.bind(this);

    this.state = {
      events: []
    };

    // needs to dynamically set clinicID based on current clinic
    this.channelSettings = {
      channel: "AgendaChannel",
      clinicId: 68
    };
  }

  handleReceived(event) {
    this.setState(state => {
      return {
        events: [...state.events, event]
      };
    });
  }

  render() {
    return (
      <ActionCableConsumer
        channel={this.channelSettings}
        onReceived={this.handleReceived}
      >
        <h1>Appointments appointments</h1>
        <ul>
          {this.state.events.map((e, i) => <li key={i}>{e.event} [{e.appointmentId}]</li>)}
        </ul>
      </ActionCableConsumer>
    );
  }
}
