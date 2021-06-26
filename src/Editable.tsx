import React, { useMemo, useEffect } from 'react';
import classNames from 'classnames';
import './assets/index.less';

import Cell from './Cell';

interface Props {
  prefixCls?: string;
  dataSource?: (string | number | null | undefined)[][];
}

const initialData = [
  [1, 2, 3],
  ['a', 'b', 'c', false, 1, 2, 3, 4],
  [null, null, undefined],
];

export const RcEditable: React.FC<Props> = (props) => {
  const { prefixCls = 'rc-edit-table', dataSource = initialData } = props;

  useEffect(() => {
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }, []);

  const maxColLength = useMemo(() => {
    return dataSource.reduce((pre, curArr) => (curArr.length >= pre ? curArr.length : pre), 0);
  }, [dataSource.length]);

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
          {Array(maxColLength)
            .fill('')
            .map((_, idx) => {
              return <col width="161" key={idx} />;
            })}
        </colgroup>
        <tbody className={classNames(`${prefixCls}-body`)}>
          {dataSource.map((trItem, trIdx) => {
            return (
              <tr key={`tr-${trIdx}`}>
                {Array(maxColLength)
                  .fill('')
                  .map((_, tdIdx) => {
                    return (
                      <Cell
                        key={`td-${trIdx}-${tdIdx}`}
                        trIdx={trIdx}
                        trItem={trItem}
                        tdIdx={tdIdx}
                        prefixCls={prefixCls}
                      ></Cell>
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

export default RcEditable;
