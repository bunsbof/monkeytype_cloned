import {
  FaAt,
  FaHashtag,
  FaClock,
  FaFont,
  FaQuoteLeft,
  FaMountain,
  FaWrench,
  FaTools,
  FaSearch,
} from "../assets";

export class MenuModeGenerator {
  constructor() {
    this.modes = {
      conditions: {
        isShown: false,
        punctuation: { isOn: false, icon: FaAt },
        numbers: { isOn: false, icon: FaHashtag },
      },
      modeList: [
        { name: "time", icon: FaClock },
        { name: "words", icon: FaFont },
        { name: "quotes", icon: FaQuoteLeft },
        { name: "zen", icon: FaMountain },
        { name: "custom", icon: FaWrench },
      ],
    };
  }

  genMode(modeKey) {
    const modeDefaults = {
      time: {
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
        conditions: true,
        control: {
          defaultValue: "25",
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
        conditions: false,
        control: {
          defaultValue: "short",
          options: [
            "all",
            "short",
            "medium",
            "long",
            "thicc",
            { optionMode: "find", value: null, icon: FaSearch },
          ],
        },
      },
      zen: {
        conditions: false,
      },
      custom: {
        conditions: true,
        control: {
          options: [
            {
              optionMode: "change",
              value: "The quick brown fox jumps over the lazy dog",
            },
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
