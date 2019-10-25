import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, ListView } from 'react-native';

export default class App extends React.Component {
  _renderTitle() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Stopwatch</Text>
      </View>  
    )
  }
  
  _renderTimers() {
    return (
      <View style={styles.timerWrapper}>
        <View style={styles.timerWrapperInner}>
          <Text style={styles.lapTimer}>00:00.95</Text>
          <Text style={styles.mainTimer}>00:02.95</Text>
        </View>
      </View>
    )
  }
  
  _renderButtons() {
    return (
      <View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight underlayColor='#777' style={styles.timeButton}>
          <Text>+15</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#777' style={styles.timeButton}>
          <Text>+60</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#777' style={styles.timeButton}>
          <Text>+</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableHighlight underlayColor='#777' style={styles.button}>
            <Text>Lap</Text>
          </TouchableHighlight>
          <TouchableHighlight underlayColor='#777' style={styles.button}>
            <Text>Start</Text>
          </TouchableHighlight>
          </View>
        </View>
    )
  }
  
  _renderLaps() {
    return (
      <View style={styles.lapsWrapper}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={ (rowData) => (
            <View style={styles.lapRow}>
              <Text style={style.lapNumber}>{rowData.name}</Text>
              <Text style={style.lapTime}>{rowData.value}</Text>
            </View>
          )}
        />
      </View>
    )
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this._renderTitle()}
          {this._renderTimers()}
        </View>
        <View style={styles.bottom}>
          {this._renderButtons()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  header: {
    paddingTop: 20,
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
  
  timeButton: {
    height: 30,
    width: 60,
    borderRadius: 10,
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
