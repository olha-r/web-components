export default class ShapeBuilder extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        // Build dynamically shapes
        const str = this.getAttribute("number");
        const number = parseInt(str, 10);
        let content = "";
        for (let i = 0; i < number; i++) {
            content += `<my-shape delay="${i * 1000}" content="${i}" my-shape="rectangle" my-color="blue-color"></my-shape>`
        }
        this.innerHTML = content;
    }
}

customElements.define("shape-builder", ShapeBuilder);