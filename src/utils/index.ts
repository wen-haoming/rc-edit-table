const mapNodeType = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
};

export const findNodeType = (
  node: HTMLElement,
  nodeType: keyof typeof mapNodeType,
): HTMLElement => {
  while (node.nodeType !== mapNodeType[nodeType]) {
    // eslint-disable-next-line no-param-reassign
    node = node.parentNode;
  }
  return node;
};
