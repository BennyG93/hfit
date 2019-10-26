import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableHighlight, TextInput } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';

export default class HfitTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      timerDuration: 6000,
      resetTimer: false,
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startStopTimer() {
    this.setState({isTimerStart: !this.state.isTimerStart, resetTimer: false});
  }
  resetTimer() {
    this.setState({isTimerStart: false, resetTimer: true});
  }
  getFormattedTime(time) {
      this.currentTime = time;
  }

  _renderTimeInput() {
    return(
      <View>
        <Text>Time:</Text>
        <TextInput
          keyboardType={"numeric"}
          value={this.state.timerDuration}
          onChangeText={(timerDuration) => this.setState({timerDuration})} />
      </View>
    )
  }

  _renderTitle() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>HFIT</Text>
      </View>
    )
  }

  _renderTimer() {
    return (
      <View style={styles.timerWrapper}>
        <View style={styles.timerWrapperInner}>
          <Text style={styles.lapTimer}>00:00.95</Text>
          <Timer
            totalDuration={this.state.timerDuration} secs
            //Time Duration
            start={this.state.isTimerStart}
            //To start
            reset={this.state.resetTimer}
            //To reset
            options={options}
            //options for the styling
            handleFinish={handleTimerComplete}
            //can call a function On finish of the time
            getTime={this.getFormattedTime} />
        </View>
      </View>
    )
  }

  _renderButtons() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight onPress={this.startStopTimer} underlayColor='#777' style={styles.button}>
          <Text>
            {!this.state.isTimerStart ? "START" : "STOP"}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.resetTimer} underlayColor='#777' style={styles.button}>
          <Text>RESET</Text>
        </TouchableHighlight>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
            {this._renderTitle()}
            {this._renderTimer()}
        </View>
        <View style={styles.bottom}>
            {this._renderButtons()}
        </View>
      </View>
    );
  }
}

const handleTimerComplete = () => alert("Custom Completion Function");
const options = {
  text: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'flex-end',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: 30,
    paddingBottom: 10,
    backgroundColor: '#F9F9F9'
  },

  title: {
    alignSelf: 'center',
    fontWeight: '600',
  },

  top: {
    flex: 1,
  },

  bottom: {
    flex: 2,
    backgroundColor: '#F0EFF5'
  },

  timerWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flex: 100,
  },

  timerWrapperInner: {
    alignSelf: 'center',
  },

  mainTimer: {
    fontSize: 60,
    fontWeight: '100',
    alignSelf: 'flex-end'
  },

  lapTimer: {
    fontSize: 18,
    alignSelf: 'flex-end'
  },

  buttonWrapper: {
  flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 30,
},

  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },

  lapRow: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   height: 40,
   paddingTop: 10,
   borderBottomWidth: 0.5,
   borderBottomColor: '#ddd'
  },

  lapNumber: {
    fontSize: 16,
    color: '#777'
  },

  lapTime: {
    color: '#000',
    fontSize: 20,
    fontWeight: '300'
  }
});
