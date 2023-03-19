import React, {Component} from "react";
import './capslock.css'

export default class CapsLock extends Component{

    constructor(props){
        super(props);

        this.state = {
            texto1_texto: "",
            texto2_texto: "Texto"
        }

        this.transformar = this.transformar.bind(this);
        this.transformar_minusculo = this.transformar_minusculo.bind(this);

    }

    transformar(){
        let texto2_texto = this.state.texto1_texto.toUpperCase();
        this.setState({texto2_texto})
    }

    transformar_minusculo(){
        let texto2_texto = this.state.texto1_texto.toLowerCase();
        this.setState({texto2_texto})
    }

    render(){
        return (
            <div className="capslock">
                <h3>{this.props.texto1} para {this.props.texto2}</h3>
                <div class="inputs">
                    <input type="text" onChange={(event)=>{this.setState({texto1_texto:event.target.value})}}></input>
                    <input type="button" value="Maiúsculo" onClick={this.transformar}></input>
                    <input type="button" value="Minúsculo" onClick={this.transformar_minusculo}></input>
                </div>
                <p>{this.state.texto2_texto}</p>
            </div>
            

        )
    }
}