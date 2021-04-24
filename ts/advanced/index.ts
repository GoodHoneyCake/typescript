{
  const obj = {
    name: "kim",
  };

  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"];
  const text: Name = "hello";

  type Gender = Animal["gender"];

  type Keys = keyof Animal;

  const key: Keys = "gender";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = { name: "kim", gender: "male" };
}
