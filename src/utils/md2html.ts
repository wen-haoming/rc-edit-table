const transformH1 = (currentNode: HTMLElement, prefixCls: string) => {
    const selection = window.getSelection();
    const h1Node = document.createElement('h1');
    const parentNode = currentNode?.parentNode;
    if ( parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
        currentNode.innerText = '';
        currentNode?.appendChild(h1Node);
    } else {
        parentNode?.replaceChild(h1Node, currentNode);
    }
    selection?.collapse(h1Node);
};

const transformH2 = (currentNode: HTMLElement, prefixCls: string) => {
    const selection = window.getSelection();
    const h1Node = document.createElement('h2');
    const parentNode = currentNode?.parentNode;
    if ( parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
        currentNode.innerText = '';
        currentNode?.appendChild(h1Node);
    } else {
        parentNode?.replaceChild(h1Node, currentNode);
    }
    selection?.collapse(h1Node);
};

const transformH3 = (currentNode: HTMLElement, prefixCls: string) => {
    const selection = window.getSelection();
    const h1Node = document.createElement('h3');
    const parentNode = currentNode?.parentNode;
    if ( parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
        currentNode.innerText = '';
        currentNode?.appendChild(h1Node);
    } else {
        parentNode?.replaceChild(h1Node, currentNode);
    }
    selection?.collapse(h1Node);
};

const transformH4 = (currentNode: HTMLElement, prefixCls: string) => {
    const selection = window.getSelection();
    const h1Node = document.createElement('h4');
    const parentNode = currentNode?.parentNode;
    if ( parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
        currentNode.innerText = '';
        currentNode?.appendChild(h1Node);
    } else {
        parentNode?.replaceChild(h1Node, currentNode);
    }
    selection?.collapse(h1Node);
};

const transformH5 = (currentNode: HTMLElement, prefixCls: string) => {
    const selection = window.getSelection();
    const h1Node = document.createElement('h5');
    const parentNode = currentNode?.parentNode;
    if ( parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
        currentNode.innerText = '';
        currentNode?.appendChild(h1Node);
    } else {
        parentNode?.replaceChild(h1Node, currentNode);
    }
    selection?.collapse(h1Node);
};

const transformH6 = (currentNode: HTMLElement, prefixCls: string) => {
    const selection = window.getSelection();
    const h1Node = document.createElement('h6');
    const parentNode = currentNode?.parentNode;
    if ( parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
        currentNode.innerText = '';
        currentNode?.appendChild(h1Node);
    } else {
        parentNode?.replaceChild(h1Node, currentNode);
    }
    selection?.collapse(h1Node);
};



export default {
  transformH1,
  transformH2,
  transformH3,
  transformH4,
  transformH5,
  transformH6
};
