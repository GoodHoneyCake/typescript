{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public : default value 따로 명시하지 않으면 기본적으로 설정됨
  // private 외부에서 불러오기 CoffeeMachine.COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER 불가능
  // protected 외부에서 접근 불가하지만 클래스를 상속한 자식은 접근가능
  class CoffeeMachine {
    private static COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER: number = 7; // class level
    private coffeeBeansGram: number = 0; // instance (obj) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeansGram = coffeeBeans;
    }

    static makeMachine(coffeebeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeebeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피콩은 0개 이상 넣어야합니다");
      }
      this.coffeeBeansGram += beans;
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
  const aCoffeeMachine = CoffeeMachine.makeMachine(32);
  aCoffeeMachine.fillCoffeeBeans(32);
}
