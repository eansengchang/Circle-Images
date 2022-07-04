class Section {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.area = this.r*this.r

		this.centerX = (this.x + this.r)
		this.centerY = (this.y + this.r)
	}

	show(pixels) {
		let d = pixelDensity();

		let rAverage = 0;
		let gAverage = 0;
		let bAverage = 0;
		let total = 0;

		// console.log(pixels)

		for (let x = floor(this.x); x < this.r + this.x; x++) {
			for (let y = floor(this.y); y < this.r + this.y; y++) {
				let off = (y * width + x) * 4;
				// console.log(pixels[off], pixels[off + 1], pixels[off + 2])
				rAverage += pixels[off]
				gAverage += pixels[off + 1]
				bAverage += pixels[off + 2]
			}
		}

		rAverage /= this.area;
		gAverage /= this.area;
		bAverage /= this.area;


		noStroke()
		fill(rAverage, gAverage, bAverage)
		circle(this.centerX, this.centerY, this.r*2)
	}

	mouseClicked(){
		if(dist(mouseX, mouseY, this.centerX, this.centerY) < this.r && this.r > 3){
			return true;
		}
	}
}