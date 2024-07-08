function customRender(reactElement, container){
    /*
    this is not in optimized way of code i.e. not written in loop

    const domElement = document.createElement(reactElement.type)  // DOM Element is created
    domElement.innerHTML = reactElement.children  // DOM element ke andar children dal diye
    domElement.setAttribute('href', reactElement.props.href)   // attribute is setted
    domElement.setAttribute('target', reactElement.props.target)  // attribute is setted

    container.appendChild(domElement)  // DOM element is appended to the container(i.e inside root )
    */

    // In optimized way written in loop
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children'){  // you can also ignore this line
            continue;
        }

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}


const reactElement = {
    type: 'a', // type can be 'a' tag or 'p' tag or 'div' tag
    props: {     // props is  property
        href: 'https://google.com',
        target: '_blank'

    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)  // rectElement ko inject(means render i.e dal diye hai) kar diye hai maincontainer me