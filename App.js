import React, { Component } from 'react';
import { StyleSheet,Text,View, TouchableHighlight, TextInput, Button, Alert } from 'react-native';
import { Timer } from 'react-native-stopwatch-timer';
import TimeFormat from 'hh-mm-ss';
import NumericInput from 'react-native-numeric-input'

export default class HfitTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimerStart: false,
      timerDuration: 0,
      resetTimer: false,
      timerMins: 0,
      timerSecs: 0,
    };
    this.startStopTimer = this.startStopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.setTimer = this.setTimer.bind(this);
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
  setTimer() {
    let mins = this.state.timerMins > 9 ? "" + this.state.timerMins: "0" + this.state.timerMins
    let secs = this.state.timerSecs > 9 ? "" + this.state.timerSecs: "0" + this.state.timerSecs
    let time = TimeFormat.toMs(mins + ":" + secs, 'mm:ss')
    this.setState({timerDuration: time})
    this.resetTimer()
  }

  _renderTimeInput() {
    let selectorMinVal = 0,
        selectorMaxVal = 60

    return(
      <View style={styles.buttonWrapper}>
        <View>
          <Text>Intervals</Text>
          <NumericInput
            onChange={value => console.log({value})}
            type='up-down'
            minValue={selectorMinVal}
            rounded
          />
        </View>
        <View>
          <Text>Minutes:</Text>
          <NumericInput
            value={this.state.timerMins}
            onChange={value => this.setState({timerMins: value})}
            type='up-down'
            minValue={selectorMinVal}
            maxValue={selectorMaxVal}
            rounded
          />
        </View>
        <View>
          <Text>Seconds:</Text>
          <NumericInput
            value={this.state.timerSecs}
            onChange={value => this.setState({timerSecs: value})}
            type='up-down'
            minValue={selectorMinVal}
            maxValue={selectorMaxVal}
            rounded
          />
        </View>
      </View>
    )
  }

  toNumber(string) {
    let charRemove = string.replace(/[^0-9]/g, '')
    let newNumber = Number(charRemove)
    return newNumber
  }

  _renderSetButton() {
    return(
      <View>
        <Button
          title="Set Intervals"
          onPress={this.setTimer}
        />
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
          <Text style={styles.lapTimer}>00:00.00</Text>
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

  _renderStopStartButtons() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight onPress={this.startStopTimer} underlayColor='#777' style={styles.button}>
          <Text>
            {this.state.isTimerStart ? "STOP" : "START"}
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
        <View style={styles.mid}>
            {this._renderTimeInput()}
            {this._renderSetButton()}
        </View>
        <View style={styles.bottom}>
            {this._renderStopStartButtons()}
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

  mid: {
    flex: 1,
  },

  bottom: {
    flex: 1,
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

  startBtn: {
    color: '#00cc00'
  },

  stopBtn: {
    color: 'red'
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
  },

  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 30,
  },

  inputElementWrapper: {
    alignSelf: 'center',
  },
});
