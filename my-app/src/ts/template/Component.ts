export default class Component<NodeType extends HTMLElement = HTMLElement> {
    public node: NodeType;
  
    constructor(tagName = 'div', className = '', content = '', attributes: Record<string, string> | null = null) {
      const el = document.createElement(tagName);
      el.className = className;
      el.textContent = content;
      if (attributes) {
        Object.entries(attributes).forEach(([attrName, attrValue]) => {
          el.setAttribute(attrName, attrValue);
        });
      }
      this.node = el as NodeType;
    }
}