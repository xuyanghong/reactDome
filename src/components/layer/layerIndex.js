import React from 'react';
import { Component } from 'react';


var hbimg = require('../../images/hb.png');

import './layer.less';
import './txt.scss';

export default function productBox () {
  const props = {
    name: 'xiaoming',
    arr: ['apple','xiaomi','oppo']
  };

  return (
      <div className="layer">
        <div> {props.name} </div>
        <img src={hbimg} />
        {props.arr.map((item, index) =>
              <li key={index} id={index} >
                <div>{item}</div>
              </li>
            )}
      </div>
    );
}

class Greeting extends Component {
  render() {
    return (
      <div>Hello {this.props.name}!</div>
    );
  }
}

export class LotsOfGreetings extends Component {
  render () {
    return (
      <div>
        <Greeting name='Rexxar' />
      </div>
        
    );
  }
}

// 文字闪烁
 class Blink extends Component {
  constructor(props){
    super(props);
    this.state = { showText: true};

    setInterval(() => {
      this.setState(previousState => {
        return {showText: !previousState.showText};
      })
    },1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <div>{display}</div>
    );
  }
}

export class Blinkapp extends Component {
  render() {
    const marginTop20 = "70px";
    const height40 = "70px";
    return (
      <div style={{marginTop:marginTop20, height:height40}}>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
      </div>
    );
  }
}

// button

export class LikeButton extends Component{
  constructor(props) {
    super(props);
    this.state = {liked: true}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
        liked: !this.state.liked
      })
  }

  
  render() {
    let text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        You {text} this. Click to toggle.
      </p>
    );
  }
};

// props 捷径

export class CheckLink extends Component {
  render () {
    return <a {...this.props}> {'✔️'}{this.props.children}</a>;
  }
}

// 设置props 的类型  需要在class外面设置

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick.bind(this)}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };


// 手动传递props
export function FancyCheckbox(props) {
  var fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
  return (
    <div {...props} className={fancyClass}>
      {props.children}
    </div>
  );
}

// onchange

export class Check extends Component {
  constructor (props) {
    super(props);
    this.state = {value: 'hello!'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value.substr(0,5)
    })
  }

  render() {
    return (
      <input type="text" value = {this.state.value} onChange = {this.handleChange} />
    );
  }
}


// ref

export class Mycomponet extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.refs.myTextInput.focus();
  }

  render () {
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input type="button" value="Focus the text input" onClick={this.handleClick} />
      </div>
    );
  }
}

