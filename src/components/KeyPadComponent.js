import React, {Component} from 'react';

class KeyPadComponent extends Component {
    render(){
        return (
        <div className="button">
            <button name="(" onClick={e => this.props.onClick(e.target.name)} className="operations">(</button>
            <button name="CE" onClick={e => this.props.onClick(e.target.name)} className="operations">CE</button>
            <button name=")" onClick={e => this.props.onClick(e.target.name)} className="operations">)</button>
            <button name="C" onClick={e => this.props.onClick(e.target.name)} className="operations">C</button>
            <br/>
            <button name="1" onClick={e => this.props.onClick(e.target.name)} className="number">1</button>
            <button name="2" onClick={e => this.props.onClick(e.target.name)} className="number">2</button>
            <button name="3" onClick={e => this.props.onClick(e.target.name)} className="number">3</button>
            <button name="+" onClick={e => this.props.onClick(e.target.name)} className="operations">+</button>
            <br/>
            <button name="4" onClick={e => this.props.onClick(e.target.name)} className="number">4</button>
            <button name="5" onClick={e => this.props.onClick(e.target.name)} className="number">5</button>
            <button name="6" onClick={e => this.props.onClick(e.target.name)} className="number">6</button>
            <button name="-" onClick={e => this.props.onClick(e.target.name)} className="operations">-</button>
            <br/>
            <button name="7" onClick={e => this.props.onClick(e.target.name)} className="number">7</button>
            <button name="8" onClick={e => this.props.onClick(e.target.name)} className="number">8</button>
            <button name="9" onClick={e => this.props.onClick(e.target.name)} className="number">9</button>
            <button name="*" onClick={e => this.props.onClick(e.target.name)} className="operations">x</button>
            <br/>
            <button name="." onClick={e => this.props.onClick(e.target.name)} className="operations">.</button>
            <button name="0" onClick={e => this.props.onClick(e.target.name)} className="number">0</button>
            <button name="=" onClick={e => this.props.onClick(e.target.name)} id="equals" className="operations">=</button>
            <button name="/" onClick={e => this.props.onClick(e.target.name)} className="operations">÷</button>
            


        </div>
        )
    }
}
export default KeyPadComponent;