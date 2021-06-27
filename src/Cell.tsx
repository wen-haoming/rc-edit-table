import React, { useRef, useState, MouseEventHandler } from 'react';
import classNames from 'classnames';
import marked from 'marked';

interface Props {
  prefixCls?: string;
  trIdx: number;
  tdIdx: number;
  trItem: any;
}

//
const CellComp: React.FC<Props> = (props) => {
  const { prefixCls, trIdx, tdIdx, trItem } = props;
  const contentRef = useRef<HTMLElement>(null);
  const tdBgRef = useRef<HTMLElement>(null);

  const handleKeydown = (e) => {
    //  如果该单元格内没有元素的话，第一个内容是一个p标签来填充，而不是一个 content
    if (contentRef.current && !contentRef.current.childNodes.length) {
      const pNode = document.createElement('p');
      contentRef.current.append(pNode);
      //   pNode.autofocus = true;
    }
  };

  const handleClickTd = (e) => {
    if (e.target.nodeName === 'TD') {
      const selObj = window.getSelection();
      const length = contentRef.current?.children.length;
      selObj?.setPosition(contentRef.current, length);
    }
  };
  return (
    <td onClick={handleClickTd}>
      <div className={classNames(`${prefixCls}-td-content`)}>
        <div
          ref={contentRef}
          suppressContentEditableWarning
          onKeyDown={handleKeydown}
          contentEditable
        >
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
