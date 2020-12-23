const map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

const cameraWidth = 800;
const cameraHeight = 500;
const cameraSpriteWidth = 20;
const mapColumns= 30;
const mapRows = 30;
const cellWidth = cameraHeight / mapColumns;
const fps = 1000 / 60;
const moveSpeed = 1;
const panSpeed = 0.05;
const rayCount = 50;
const rayWidth = cameraWidth / rayCount;

function Camera() {
  let cameraX = 300;
  let cameraZ = 100;
  let cameraPan = -90 * Math.PI / 180;

  return {
    get cameraX() {
      return cameraX;
    },
    get cameraZ() {
      return cameraZ;
    },
    get cameraPan() {
      return cameraPan;
    },
    pan: (rotate: number) => {
      cameraPan += rotate;
    },
    moveForward: (distance: number) => {
      cameraX += distance * Math.cos(cameraPan);
      cameraZ += distance * Math.sin(cameraPan);
    }
  }
}

function KeyListener() {
  let left = false;
  let up = false;
  let right = false;
  let down = false;

  window.addEventListener("keydown", event => {
    switch (event.key) {
      case "ArrowLeft":
        left = true;
        break;
      case "ArrowUp":
        up = true;
        break;
      case "ArrowRight":
        right = true;
        break;
      case "ArrowDown":
        down = true;
        break;
    }
  });

  window.addEventListener("keyup", event => {
    switch (event.key) {
      case "ArrowLeft":
        left = false;
        break;
      case "ArrowUp":
        up = false;
        break;
      case "ArrowRight":
        right = false;
        break;
      case "ArrowDown":
        down = false;
        break;
    }
  });

  return {
    get left() {
      return left;
    },
    get up() {
      return up;
    },
    get right() {
      return right;
    },
    get down() {
      return down;
    }
  };
}

const keyListener = KeyListener();
const camera = Camera();

function init() {
  const canvas3D = document.querySelector("#canvas3D") as HTMLCanvasElement;
  const canvas2D = document.querySelector("#canvas2D") as HTMLCanvasElement;
  const ctx3D = canvas3D.getContext("2d");
  const ctx2D = canvas2D.getContext("2d");
  
  window.setInterval(() => {
    loop(ctx3D, ctx2D);
  }, fps);
}

function loop(ctx3D: CanvasRenderingContext2D, ctx2D: CanvasRenderingContext2D) {
  clearCanvases([ctx3D, ctx2D]);
  paintCameraOnMiniMap(ctx2D);
  paintWallsOnMiniMap(ctx2D);
  castRays(ctx2D, ctx3D);
  updateCameraPosition();
}

function clearCanvases(canvasContexes: CanvasRenderingContext2D[]) {
  canvasContexes.forEach(ctx => {
    ctx.clearRect(0, 0, 800, 500);
  });
}

function paintCameraOnMiniMap(ctx2D: CanvasRenderingContext2D) {
  const { cameraX, cameraZ, cameraPan } = camera;

  ctx2D.translate(cameraX + cameraSpriteWidth / 2, cameraZ + cameraSpriteWidth / 2);
  ctx2D.rotate(cameraPan);
  ctx2D.fillRect(-(cameraSpriteWidth / 2), -(cameraSpriteWidth / 2), cameraSpriteWidth, cameraSpriteWidth);
  ctx2D.rotate(-cameraPan);
  ctx2D.translate(-(cameraX + cameraSpriteWidth / 2), -(cameraZ + cameraSpriteWidth / 2));
}

function paintWallsOnMiniMap(ctx: CanvasRenderingContext2D) {
  let i: number;
  let j: number;

  for (i = 0; i < 30; i++) {
    for (j = 0; j < 30; j++) {
      const sprite = map[i][j];

      if (sprite === 1) {
        ctx.fillRect(j * cellWidth, i * cellWidth, cellWidth, cellWidth);
      }
    }
  }
}

function castRays(ctx2D: CanvasRenderingContext2D, ctx3D: CanvasRenderingContext2D) {
  const { cameraX, cameraZ, cameraPan } = camera;

  let d: number;
  let r: number;

  for (r = rayCount * -0.5; r < rayCount * 0.5; r++) {
    for (d = 0; d < 800; d += cellWidth * 0.25) {
      const x = cameraX;
      const z = cameraZ;

      const x1 = x + (d * Math.cos(r * Math.PI / 180 + cameraPan));
      const z1  = z + (d * Math.sin(r * Math.PI / 180 + cameraPan));

      if (x1 >= 0 && x1 <= 800 && z1 >= 0 && z1 <= 800) {
        ctx2D.fillRect(x1 + cameraSpriteWidth / 2, z1 + cameraSpriteWidth / 2, 1, 1);
        const wall = checkForWall(x1 + cameraSpriteWidth / 2, z1 + cameraSpriteWidth / 2, r + rayCount * 0.5, d, ctx3D);

        if (wall) {
          break;
        }
      }
    }
  }
}

function checkForWall(_x: number, _z: number, rayCount: number, distance: number, ctx: CanvasRenderingContext2D) {
  const x = Math.floor(_x / cellWidth);
  const z = Math.floor(_z / cellWidth);

  try {
    if (map[z][x] === 1) {
      ctx.fillStyle = LightenDarkenColor("#DDDDDD", -(distance / 5));
      ctx.fillRect(
        rayCount * rayWidth,
        z + distance / 2,
        rayWidth,
        Math.max(0, cameraHeight - distance)
      );
      return true;
    }
  } catch (error) {
    console.error({ x, z });
  }

  return false;
}

function LightenDarkenColor(col: string, amt: number) {
  // https://css-tricks.com/snippets/javascript/lighten-darken-color/ 
  let usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  const num = parseInt(col,16);

  let r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  let g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

function updateCameraPosition() {
  if (keyListener.down) {
    camera.moveForward(-moveSpeed);
  } else if (keyListener.up) {
    camera.moveForward(moveSpeed);
  }

  if (keyListener.left) {
    camera.pan(-panSpeed);
  } else if (keyListener.right) {
    camera.pan(panSpeed);
  }
}

init();
