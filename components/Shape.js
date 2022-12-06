export default class Shape extends HTMLElement {

    //called once the element is connected to the DOM
    connectedCallback() {
        //custom logic
        this.render();
    }

    disconnectedCallback() {
        console.log("Bye bye");
    }

    render() {
        const shape = this.getAttribute("my-shape");
        const color = this.getAttribute("my-color");
        const content = this.getAttribute("content");
        const str = this.getAttribute("delay");
        const delay = parseInt(str, 10);
        // const element = element.getElementById("square");
        setTimeout(() => {
            this.innerHTML = `
        <div class=" ${shape} ${color}">${content}</div>
        `;
        }, delay);
    }

}
customElements.define("my-shape", Shape);
