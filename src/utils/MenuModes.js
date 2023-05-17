import { FaAt, FaHashtag, FaTools, FaSearch } from "../assets";

export class MenuModeGenerator {
  constructor() {
    this.modes = {
      conditions: {
        isShown: false,
        punctuation: { isOn: false, icon: FaAt },
        numbers: { isOn: false, icon: FaHashtag },
      },
    };
  }

  genMode(modeKey) {
    const modeDefaults = {
      time: {
        name: "time",
        conditions: true,
        control: {
          defaultValue: 30,
          options: [
            15,
            30,
            60,
            120,
            { optionMode: "custom", value: 1, icon: FaTools },
          ],
        },
      },
      words: {
        name: "wordCount",

        conditions: true,
        control: {
          defaultValue: 25,
          options: [
            10,
            25,
            50,
            100,
            { optionMode: "custom", value: 1, icon: FaTools },
          ],
        },
      },
      quotes: {
        name: "quotesLength",
        conditions: false,
        control: {
          defaultValue: "short",
          options: [
            "all",
            "short",
            "medium",
            "long",
            "thicc",
            { optionMode: "find", value: "", icon: FaSearch },
          ],
        },
      },
      zen: {
        name: "zen",
        conditions: false,
      },
      custom: {
        name: "customText",
        conditions: true,
        control: {
          options: [
            "change"
          ],
        },
      },
    };

    const modeProperties = modeDefaults[modeKey];
    const newModes = { ...this.modes, [modeKey]: modeProperties };

    if (!modeProperties.conditions) {
      delete newModes.conditions;
    }

    return newModes;
  }
}
