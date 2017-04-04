/**
 * Created by yeanzhi on 17/3/19.
 */
'use strict';
import React, {Component} from "react";
import Icon from './components/icon/index';
import {getEditor} from './lib/quillEditor'
import ToolTip from './components/tooltip'
export default class CommonEditor extends Component {

    clearFormat = ()=>{
        if(getEditor()){
            const {index,length} = getEditor().getSelection();
            if(index === 0 || !!index){
                getEditor().removeFormat(index,length,'user');
            }
        }
    };

    undo = ()=>{
        if(getEditor()){
            getEditor().history.undo();
        }
    };

    redo = ()=>{
        if(getEditor()){
            getEditor().history.redo();
        }
    };

    format = ()=>{
        let {index,length} = getEditor().getSelection();
        if(!!index){
            format.currentFormat = getEditor().getFormat(index,length);
        }
    }

    render() {
        return (
            <span className="ql-formats common-header">
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>撤销(ctrl+Z)</div>}
                >
                    <button className="ql-undo" onClick={this.undo}>
                        <Icon type="undo"/>
                    </button>
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>重做(ctrl+Y)</div>}
                >
                    <button className="ql-redo" onClick={this.redo}>
                        <Icon type="redo"/>
                    </button>
                </ToolTip>
                 <ToolTip
                     placement="bottom"
                     mouseEnterDelay={0}
                     mouseLeaveDelay={0}
                     overlay={<div>格式刷</div>}
                 >
                    <button className="ql-format" onClick={this.format}>
                        <Icon type="geshishua"/>
                    </button>
                </ToolTip>
                <ToolTip
                    placement="bottom"
                    mouseEnterDelay={0}
                    mouseLeaveDelay={0}
                    overlay={<div>清除格式 ctrl+shift+C</div>}
                >
                   <button className="ql-clear-format" onClick={this.clearFormat}>
                        <Icon type="qingchu"/>
                    </button>
                </ToolTip>
            </span>
        )
    }
}
