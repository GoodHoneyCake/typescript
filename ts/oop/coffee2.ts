{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    static COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER: number = 7; // class level
    coffeeBeansGram: number = 0; // instance (obj) level

    constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans;
    }

    static makeMachine(coffeebeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeebeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (
        this.coffeeBeansGram <
        shots * CoffeeMachine.COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER
      ) {
        throw new Error("커피콩 부족");
      }

      this.coffeeBeansGram -=
        shots * CoffeeMachine.COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const aCoffeeMachine = new CoffeeMachine(32);
  console.log(aCoffeeMachine);
  const bCoffeeMachine = CoffeeMachine.makeMachine(3);
  console.log(bCoffeeMachine);
}
