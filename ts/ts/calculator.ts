{
  type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

  function calculate(command: Command, a: number, b: number): number {
    switch (command) {
      case "add":
        return a + b;
      case "substract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        return a / b;
      case "remainder":
        return a % b;
      default:
        throw new Error("unknown error");
    }
  }

  console.log(calculate("add", 1, 3));
  console.log(calculate("substract", 1, 3));
  console.log(calculate("multiply", 1, 3));
  console.log(calculate("divide", 1, 3));
  console.log(calculate("remainder", 1, 3));
}
