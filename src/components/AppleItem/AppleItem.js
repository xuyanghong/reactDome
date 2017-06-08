import React from 'react';
import { Component } from 'react';

import './AppleItem.scss'

export class AppleItem extends Component {
    
    render() {
       let { state, actions } = this.props;
      //  console.log(actions);

        let mockActions = {
            eatApple : id => console.log('eatApple',id)
        };

         actions = mockActions;

         if (state.isEaten) return null;

        return (
            <div className="appleItem" >
                <div className="apple"><img src="" alt="苹果"/></div>
                <div className="info">
                    <div className="name">红苹果 - {state.id} 号</div>
                    <div className="weight">{state.weight}</div>
                </div>
                <div className="btn-div"><button onClick = {() => actions.eatApple(state.id)} >吃掉</button></div>
            </div>
        );

    }

}
