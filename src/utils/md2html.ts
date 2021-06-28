const transformHDom = (currentNode: HTMLElement, prefixCls: string, type: string = 'h1') => {
  const selection = window.getSelection();
  const hNode = document.createElement(type);
  const spanNode = document.createElement('span');
  const brNode = document.createElement('br');
  spanNode.className = 'filler';
  hNode.appendChild(spanNode);
  spanNode.appendChild(brNode);
  const parentNode = currentNode?.parentNode;
  if (parentNode && (parentNode.className as string).includes(`${prefixCls}-td-content`)) {
    currentNode.innerText = '';
    currentNode?.appendChild(hNode);
  } else {
    parentNode?.replaceChild(hNode, currentNode);
  }
  selection?.collapse(hNode);
};

export default {
  transformHDom,
};
