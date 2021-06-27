import React, { useRef, useState, MouseEventHandler } from 'react';
import classNames from 'classnames';
import marked from 'marked';
import { findNodeType } from './utils';
import md2Html from './utils/md2html';
interface Props {
  prefixCls?: string;
  trIdx: number;
  tdIdx: number;
  trItem: any;
}
function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

//
const CellComp: React.FC<Props> = (props) => {
  const { prefixCls = 'rc', trIdx, tdIdx, trItem } = props;
  const contentRef = useRef<HTMLElement>(null);
  const tdBgRef = useRef<HTMLElement>(null);

  const handleKeyup = (e) => {
    const selection = window.getSelection();
    //  如果该单元格内没有元素的话，第一个内容的第一行是p节点来填充，而不是一个 content节点
    if (contentRef.current && !contentRef.current.childNodes.length) {
      const pNode = document.createElement('p');
      pNode.className = `${prefixCls}-td-content-p`;
      contentRef.current.append(pNode);
    }

    const currentNode = findNodeType(selection?.focusNode, 'ELEMENT_NODE');

    const startStr = currentNode?.innerText || '';

    if (startStr.substring(0, 2) === '# ') {
       md2Html.transformH1(currentNode, prefixCls);
    }else if(startStr.substring(0, 3) === '## '){
      md2Html.transformH2(currentNode, prefixCls);
    }else if(startStr.substring(0, 4) === '### '){
      md2Html.transformH3(currentNode, prefixCls);
    }else if(startStr.substring(0, 5) === '#### '){
      md2Html.transformH4(currentNode, prefixCls);
    }else if(startStr.substring(0, 6) === '##### '){
      md2Html.transformH5(currentNode, prefixCls);
    }else if(startStr.substring(0, 7) === '###### '){
      md2Html.transformH6(currentNode, prefixCls);
    }
  };

  const handleClickTd = (e) => {
    //  点击 TD 单元格需要自动聚焦到最后一个元素
    if (e.target.nodeName === 'TD') {
      const selection = window.getSelection();
      const length = contentRef.current?.children.length;
      selection?.setPosition(contentRef.current, length);
    }
  };
  return (
    <td onClick={handleClickTd}>
      <div className={classNames(`${prefixCls}-td-content`)}>
        <div ref={contentRef} suppressContentEditableWarning onKeyUp={handleKeyup} contentEditable>
          {/* {trItem[tdIdx]} */}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-td-bg`)} ref={tdBgRef}>
        <div
          className={classNames({
            [`${prefixCls}-border-top`]: true,
            [`${prefixCls}-border-none`]: trIdx !== 0,
          })}
        ></div>
        <div
          className={classNames({
            [`${prefixCls}-border-bottom`]: true,
          })}
        ></div>
        <div
          className={classNames({
            [`${prefixCls}-border-left`]: true,
            [`${prefixCls}-border-none`]: tdIdx !== 0,
          })}
        ></div>
        <div
          className={classNames({
            [`${prefixCls}-border-right`]: true,
          })}
        ></div>
      </div>
    </td>
  );
};

export default CellComp;
