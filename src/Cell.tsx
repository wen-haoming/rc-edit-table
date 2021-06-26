import React, { useRef,useState } from 'react';
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
  const contentRef = useRef(null)
 const [content,setContent] = useState('')


  const handleKeydown = (e)=>{
    if(contentRef.current && !contentRef.current.childNodes.length){
       let Pnode =  document.createElement('p')
        contentRef.current.append(Pnode)
        Pnode.autofocus = true
    }

  }

  return (
    <td>
      <div className={classNames(`${prefixCls}-td-content`)}>
        <div ref={contentRef} suppressContentEditableWarning onKeyDown={handleKeydown}  contentEditable >
          {/* {trItem[tdIdx]} */}
        </div>
      </div>
      <div className={classNames(`${prefixCls}-td-bg`)}>
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
