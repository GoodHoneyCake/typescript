// 전역적으로 커피콩을 가지고 있는 변수를 만들고
// 커피콩을 이용해서 커피를 만드는 makeCoffee함수 구현
// makeCoffee에는 한가지 인자를 전달가능 바로 샷임
// 샷은 원샷 투샷 - 원샷은 커피를 한 번 내리고 투샷은 두번 내리고
// 얼마나 많은 샷을 포함 할껀지 전달 하는 인자가 있어야함
// 리턴 값은 원샷 커피 혹은 투샷 커피 쓰리샷 커피한잔이 만들어 지는 거겠지
// 절차지향적으로 만들어보기
{
  type CoffeeCup = {
    shots: number;
    hasMlik: boolean;
  };

  const COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER = 7;

  let coffeeBeansGram: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeansGram < shots * COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER) {
      throw new Error("커피콩 부족 커피콩을 충전해주세요.");
    }

    coffeeBeansGram -= shots * COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER;

    return {
      shots,
      hasMlik: false,
    };
  }

  coffeeBeansGram += 10 * COFFEE_BEANS_OF_ONE_SHOT_GRAM_PER;
  console.log(`커피콩 충전 ${coffeeBeansGram}g`);
  const coffee = makeCoffee(3);
  console.log(coffee);
  console.log(`남은 커피콩 ${coffeeBeansGram}g`);
  const coffee2 = makeCoffee(2);
  console.log(coffee2);
  console.log(`남은 커피콩 ${coffeeBeansGram}g`);
}
