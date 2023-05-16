export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};

    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (value) => {
          state[key] = value; // 값 변경 즉시 반영
          this.observers[key]?.forEach((observer) => observer(value)); // 변경 시 key에 등록해 둔 cb 함수들 호출
        },
      });
    }
  }

  /**
   * subscribe
   * @description 특정 state 변경 여부를 감시할 observer를 등록한다.
   */
  subscribe(key, cb) {
    // observers: {key1 : [cb1, cb2, ...], key2: [cb3]}
    Array.isArray(this.observers[key])
      ? this.observers[key].push(cb)
      : (this.observers[key] = [cb]);
  }
}
