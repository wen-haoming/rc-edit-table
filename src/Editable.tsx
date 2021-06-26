import React from 'react';
import classNames from 'classnames';
import './assets/index.less';

interface Props {
  prefixCls?: string;
  dataSource?: (string | number | null | undefined)[][];
}

const initialData = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [null, null, undefined],
];

export const RCeditable: React.FC<Props> = (props) => {
  const { prefixCls = 'rc-edit-table', dataSource = initialData } = props;

  return (
    <div className={classNames(`${prefixCls}-wrap`)}>
      <table className={classNames(`${prefixCls}`)}>
        {/* <caption>Superheros and sidek2123123icks</caption> */}
        {/* <thead className={classNames(`${prefixCls}-head`)}>
          <tr>
            <th  colspan="2">The table header</th>
          </tr>
        </thead> */}
        <colgroup>
          <col width="161" />
          <col width="187" />
          <col width="214" />
          <col width="125" />
        </colgroup>
        <tbody className={classNames(`${prefixCls}-body`)}>
          {initialData.map((trItem, trIdx) => {
            return (
              <tr key={`tr-${trIdx}`}>
                {trItem.map((tdItem, tdIdx) => {
                  return (
                    <td key={`td-${trIdx}-${tdIdx}`}>
                      <div className={classNames(`${prefixCls}-td-content`)}>
                        <p contentEditable>{tdItem}</p>
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
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RCeditable;
