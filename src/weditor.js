/**
 * Created by yeanzhi on 17/3/26.
 */
'use strict';
import React, {Component} from "react";
import $ from 'jquery';
import hotkeys from 'hotkeys-js';
import ReactDOM from 'react-dom';
import Header from './header';
import Catalogue from './catalogue';
import './lib/initQuill'
import {initQuillEditor} from './lib/quillEditor'
import LinkBubble from './components/linkBubble';


export default class WEditor extends Component {
    state = {
        rangeFormat: {}
    }

    constructor() {
        super();
        this.w = $(window);
    }

    componentDidMount() {
        let quillEditor = this.quill = initQuillEditor(ReactDOM.findDOMNode(this.refs.editor));
        quillEditor.on('selection-change', (range, oldRange, source) => {
            if (range) {
                let rangeFormat = quillEditor.getFormat(range);
                this.setState({rangeFormat});
            } else {
                console.log('Cursor not in the editor');
            }
        });
        this.w.on('resize', this.onResize)
    }

    componentWillUnmount() {
        this.w.off('resize', this.onResize)
    }

    onResize = () => {
        console.log(window.innerWidth)
    };

    render() {
        return (
            <div className="weditor-wrapper">
                <Header rangeFormat={this.state.rangeFormat}/>
                <div className="weditor-body">
                    <Catalogue style={{}}/>
                    <div className="content-container">
                        <div ref="editor">
                            <p>nihaomeiyou</p><p>fdsa想线下选择性</p><p>sssss说说¥eq¥¥eq¥¥2321fdjiofds</p><p>fdsa</p><p>fd</p>
                            <p>ffd撒反倒是</p><p>sadsadsadsa</p><p>学习型dsadsadasdsadsa</p><p><br/></p>
                            <ul>
                                <li>gfdgfdgfdgfdgfdgfdgfdjjafdssoajfda</li>
                                <li>fds</li>
                            </ul>
                            <p>fd</p><p>sa</p><p><br/></p><p>fd</p><p>sfdsafdsa</p><p>
                            ffff12jfidosaj4jfid3osa5jfd43soajfidosajijfidsjaojfdjisajfiodjiosajfiodjsaoijfdiosjaofjdsioajfoidsjaoifjdsioajfiodsjafiodjsaoi</p>
                            <p>jgfjtyhgftyjfthygtjffhtygjfthgfhyjftygjhgjhgjhgjhgjghjhgjhgjf34t4354eytfhfghr6</p><p>
                            fdsafdsafdsaffffffgfgfgfgfgfgfgfgfgffgfgggggggg</p><p><br/></p><p>fdsafdsafdsfdsafdsfdsa</p>
                            <p><br/></p><p>fd</p><p>s</p></div>
                    </div>
                </div>
                <LinkBubble />
            </div>
        );
    }
}
