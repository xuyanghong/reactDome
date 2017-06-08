var React = require('react');
var ReactDOM = require('react-dom');


import './css/common.css';
// import Layer from './components/layer/layer.js';
import ProductBox ,{LotsOfGreetings ,Blinkapp ,LikeButton,CheckLink,Counter,FancyCheckbox,Check,Mycomponet} from './components/layer/layerIndex.js';
import {AppleBusket} from './containers/AppleBasket/AppleBasket.js';


ReactDOM.render(
    <div>
        <ProductBox />
        <LotsOfGreetings  />
        {/*<Blinkapp />*/}
        <LikeButton />
        <CheckLink href="http://www.react-cn.com/checked.html" data-link = "checklink" >
            Click here!
        </CheckLink>
        <Counter />
        <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
            Hello world!
        </FancyCheckbox>
        <Check />
        <Mycomponet />
        <AppleBusket />
    </div>,
    
    document.getElementById('app')
)

