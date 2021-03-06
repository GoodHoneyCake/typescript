{
  type Direction = "up" | "down" | "left" | "right";

  const position = {
    x: 0,
    y: 0,
  };

  function move(direction: Direction) {
    switch (direction) {
      case "up":
        position.y++;
        break;
      case "down":
        position.y--;
        break;
      case "left":
        position.x--;
        break;
      case "right":
        position.x++;
        break;
      default:
        throw new Error("unknown");
    }
  }

  console.log(position);
  move("up");
  console.log(position);
  move("down");
  console.log(position);
  move("left");
  console.log(position);
  move("right");
  console.log(position);
}
