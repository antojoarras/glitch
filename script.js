(() => {
  
  /*-- Definitions --*/
  
  const levels = {
    1: [
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ],
      [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
        [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      ]
    ]
  };
  let activeLevel = 1;
  let previousLevel = 0;
  let cellSize = Math.min(window.innerWidth / 20, window.innerHeight / 20) * 2;
  
	/*-- Elements --*/

	/*-- Canvas --*/

	let c = {};
	c.canvas = document.getElementById("gameCanvas");
	c.canvas.width = window.innerWidth;
	c.canvas.height = window.innerHeight;
	c.canvas.style.display = "none";
	c.ctx = c.canvas.getContext("2d");
	c.mainMenu = document.getElementById("mainMenu");
	c.decoration = document.getElementById("decor");

	/*-- Buttons --*/

	let b = {};
	b.newGame = document.getElementById("newGame");
	b.loadGame = document.getElementById("loadGame");
	b.help = document.getElementById("help");
	b.aboutUs = document.getElementById("aboutUs");
	b.joinDiscord = document.getElementById("joinDiscord");

	/*-- Main Menu --*/

	b.newGame.onclick = () => {
		let p = func.newGame();
		func.resizeCanvas();
		setInterval(() => {
		}, 16);
	};
	b.loadGame.onclick = () => {};
	b.help.onclick = () => {};
	b.aboutUs.onclick = () => {};
	b.joinDiscord.onclick = () => {
		func.redirect("open", "https:///discord.gg/t2MxNzfj6V");
	};

	/*-- Game Logic --*/
  
  /*function check(player, wallX, wallY, size) {
    if (
      player.x < wallX + size &&
      player.x + player.size > wallX &&
      player.y < wallY + size &&
      player.y + player.size > wallY
    ) {
      return true
    } else return false
  }*/
  
	let isInventoryOpen = false;
	let keysDown = {};
  let spacePressed = false;
  let currentBackgroundColor = "white";
  this.dimension = 0
  
  document.addEventListener("keydown", (e) => {
    keysDown[e.key] = true;
    if (e.key === " " && !spacePressed) {
      spacePressed = true;
      if (player.dimension === 0) {
        player.dimension = 1;
        player.background = "#5f5f5f";
      } else {
        player.dimension = 0;
        player.background = "lightgrey";
      }
    }
  });
  
  document.addEventListener("keyup", (e) => {
    delete keysDown[e.key];
    if (e.key === " ") {
        spacePressed = false;
    }
});

	window.addEventListener("load", () => {
		func.resizeCanvas();
	});

	window.addEventListener("resize", () => {
		func.resizeCanvas();
	});

	/*-- Item System --*/
/*
	let items = [];
	let inventory = [];

	const availableItems = [{
			name: "Shield",
			description: "Absorbs damage",
			cost: 100
		},
		{
			name: "Speed Boost",
			description: "Increases movement speed",
			cost: 150
		},
		{
			name: "Healing Potion",
			description: "Restores health",
			cost: 200
		},
		{
			name: "Invisibility",
			description: "Temporarily makes you invisible",
			cost: 250
		}
	];

	function addItem(x, y) {
		const item = new Item(Math.random() * c.canvas.width, Math.random() * c.canvas.height);
		items.push(item);
	}

	class Item {
		constructor(x, y) {
			this.x = x;
			this.y = y;
			this.width = 20;
			this.height = 20;
			this.radius = 10;
			this.name = "";
			this.description = "";
		}

		draw(ctx) {
			ctx.beginPath();
			ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
			ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
			ctx.fill();
			ctx.closePath();

			ctx.font = "12px Ubuntu";
			ctx.fillStyle = "black";
			ctx.textAlign = "center";
			ctx.fillText(`${this.name}`, this.x, this.y - 10);
		}

		update() {}
	}

	for (let i = 0; i < 10; i++) {
		addItem(Math.random() * c.canvas.width, Math.random() * c.canvas.height);
	}
*/
	/*-- Functions --*/


	let func = {};
	func.redirect = (type, link) => {
		if (type === "redirect") {
			location.href = link;
		} else if (type === "open") {
			window.open(link);
		} else {
			console.log("Invalid redirect type.");
		}
	};
	func.resizeCanvas = () => {
    cellSize = Math.min(window.innerWidth / 10, window.innerHeight / 10);
    c.canvas.width = window.innerWidth;
    c.canvas.height = window.innerHeight;

    c.canvas.style.width = `${c.canvas.width}px`;
    c.canvas.style.height = `${c.canvas.height}px`;/*

    c.canvas.width = viewportWidth * window.devicePixelRatio;
    c.canvas.height = viewportHeight * window.devicePixelRatio;

    c.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);*/
  };
	func.colorShade = (col, amt) => {
		col = parseInt(col, 16);
		return (
			((col & 0x0000ff) + amt) |
			((((col >> 8) & 0x00ff) + amt) << 8) |
			(((col >> 16) + amt) << 16)
		).toString(16);
	};
	func.resizeCanvas = () => {
		c.canvas.width = window.innerWidth;// * window.devicePixelRatio;
		c.canvas.height = window.innerHeight;// * window.devicePixelRatio;
		//c.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
	};
	func.newGame = () => {
		console.log("Started a new game");
		c.canvas.style.display = "block";
		c.mainMenu.style.display = "none";
		c.decoration.style.display = "none";

		/*for (let i = 0; i < 10; i++) {
			addItem(Math.random() * c.canvas.width, Math.random() * c.canvas.height);
		}*/
	};

	class Player {
		constructor(
			startX,
			startY,
			size = c.canvas.height / 20,
			color = "#34c9eb"
		) {
			this.startX = startX;
			this.startY = startY;
			this.x = startX;
			this.y = startY;
			this.size = size;
			this.color = color;
			this.speed = this.size / 5;
			this.Keys = {};
      this.dimension = 0;
      this.background = "lightgrey"
		}

		update() {
      let dx = 0;
      let dy = 0;
      
      if ((keysDown["ArrowUp"] || keysDown["w"] || keysDown["W"]) && this.y > 0) {
        dy -= this.speed;
      }
      if ((keysDown["ArrowDown"] || keysDown["s"] || keysDown["S"]) && this.y + this.size < c.canvas.height) {
        dy += this.speed;
      }
      if ((keysDown["ArrowLeft"] || keysDown["a"] || keysDown["A"]) && this.x > 0) {
        dx -= this.speed;
      }
      if ((keysDown["ArrowRight"] || keysDown["d"] || keysDown["D"]) && this.x + this.size < c.canvas.width) {
        dx += this.speed;
      }
      
      if (dx !== 0 && dy !== 0) {
        dx /= 1.4;
        dy /= 1.4;
      }
      
      this.x += dx;
      this.y += dy;
      
      /*let offsetX = (c.canvas.width - cellSize * 10) / 2
      let offsetY = (c.canvas.height - cellSize * 10) / 2
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (levels[activeLevel][this.dimension][y][x] === 1) {
            if (check(player, x*cellSize + offsetX, y*cellSize + offsetY, cellSize)) {
              do {
                if (dx === 0 && dy === 0) {
                  this.x -= 1
                } else {
                  this.x -= dx;
                  this.y -= dy;
                }
              } while (check(player, x*cellSize + offsetX, y*cellSize + offsetY, cellSize))
            }
          }
        }
      }*/
      
      /*this.x = Math.max(0, Math.min(this.x, (c.canvas.width / window.devicePixelRatio) - this.size));
      this.y = Math.max(0, Math.min(this.y, (c.canvas.height / window.devicePixelRatio) - this.size));*/
    }
    
		draw() {
			c.ctx.beginPath();
      c.ctx.fillStyle = this.background
      c.ctx.fillRect(0, 0, c.canvas.width, c.canvas.height)
      c.ctx.arc(
				this.x + this.size / 2,
				this.y + this.size / 2,
				this.size / 2,
				0,
				Math.PI * 2
			);
			c.ctx.fillStyle = this.color;
			c.ctx.fill();
			c.ctx.closePath();
			c.ctx.beginPath();
			c.ctx.arc(
				this.x + this.size / 2,
				this.y + this.size / 2,
				this.size / 2,
				0,
				Math.PI * 2
			);
			c.ctx.lineWidth = 2;
			c.ctx.strokeStyle = "#128596";
			c.ctx.stroke();
      /*c.ctx.font = '14px Arial'
      c.ctx.fillText(this.dimension, 0, 100)*/
      c.ctx.closePath();
      c.ctx.beginPath();
      let offsetX = (c.canvas.width - cellSize * 10) / 2
      let offsetY = (c.canvas.height - cellSize * 10) / 2
      for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
          if (levels[activeLevel][this.dimension][y][x] === 1) {
            c.ctx.fillStyle = this.dimension ? 'lightgrey' : '#5f5f5f'
            c.ctx.strokeStyle = this.dimension ? 'white' : 'black'
            c.ctx.lineWidth = 1;
            c.ctx.fillRect(x*cellSize + offsetX, y*cellSize + offsetY, cellSize, cellSize)
            c.ctx.strokeRect(x * cellSize + offsetX, y * cellSize + offsetY, cellSize, cellSize);
          }
        }
      }
			c.ctx.closePath();
		}
  }
  
  console.log(levels)
  
	let player = new Player(100, c.canvas.height / 2);
	player.draw();

	setInterval(() => {
		c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height);
		func.update();
		func.draw();
	}, 16);
  
  func.update = () => {
    player.update();
  }

	func.draw = () => {
		c.ctx.clearRect(0, 0, c.canvas.width, c.canvas.height);
		player.draw();
	};
})();