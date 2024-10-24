class Block {
	constructor(element, initialText) {
		this.element = document.querySelector(element)
		this.initialText = initialText
	}

	updateContent(text, color) {
		this.element.innerHTML = text
		this.element.style.backgroundColor = color
	}

	reset() {
		this.element.innerHTML = this.initialText
		this.element.style.backgroundColor = 'gray'
	}
}

class RedBlock extends Block {
	constructor(element) {
		super(element, 'Red Block')
	}

	stop() {
		this.updateContent('Stop', 'red')
	}
}

class GreenBlock extends Block {
	constructor(element) {
		super(element, 'Green Block')
	}

	go() {
		this.updateContent('Go', 'green')
	}
}

const redBlock = new RedBlock('#red_block')
const greenBlock = new GreenBlock('#green_block')

function handleInput(input) {
	redBlock.reset()
	greenBlock.reset()

	if (input === 'красный') {
		redBlock.stop()
	} else if (input === 'зеленый') {
		greenBlock.go()
	}
}

const userInput = prompt('Введите красный или зеленый')
handleInput(userInput);
