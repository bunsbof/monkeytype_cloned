export class MenuModeGenerator {
  constructor() {
    this.modes = {
      conditions: {
        isShown: false,
        punctuation: false,
        numbers: false,
      },

      time: {
        isOn: false,
        conditions: true,
        control: {
          type: "time",
          options: [
            { value: 15, isOn: false },
            { value: 30, isOn: false },
            { value: 60, isOn: false },
            { value: 120, isOn: false },
            { value: "custom", isOn: false },
          ],
        },
      },

      words: {
        isOn: false,
        conditions: true,
        control: {
          type: "words",
          options: [
            { value: 10, isOn: false },
            { value: 25, isOn: false },
            { value: 50, isOn: false },
            { value: 100, isOn: false },
            { value: "custom", isOn: false },
          ],
        },
      },

      quotes: {
        isOn: false,
        conditions: false,
        control: {
          type: "quotes",
          options: [
            { value: "all", isOn: false },
            { value: "short", isOn: false },
            { value: "medium", isOn: false },
            { value: "long", isOn: false },
            { value: "thicc", isOn: false },
            { value: "find", isOn: false },
          ],
        },
      },

      zen: {
        isOn: false,
        conditions: false,
      },

      custom: {
        isOn: false,
        conditions: true,
        control: {
          type: "custom",
          options: [{ value: "change", isOn: false }],
        },
      },
    };
  }
}
