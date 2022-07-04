let img;
let sections = []
let dropZone;

let names = ['earth.jpeg']

function preload() {
	img = loadImage(random(names));
}

function setup() {
	createCanvas(600, 600);
	img = img.get(0, 0, width, height)

	sections.push(new Section(0, 0, width/2))
}

function draw() {
	background(209, 128, 73)
	img.loadPixels()

	for (let section of sections) {
		section.show(img.pixels)
	}
	// noLoop()
}

function mouseClicked() {
	for (let i = sections.length - 1; i >= 0; i--) {
		let section = sections[i]
		if (section.mouseClicked()) {
			let x = section.x
			let y = section.y
			let r = section.r
			sections.splice(i, 1);
			sections.push(new Section(x, y, r/2))
			sections.push(new Section(x + r, y, r/2))
			sections.push(new Section(x, y + r, r/2))
			sections.push(new Section(x + r, y + r, r/2))
		}
	}
}