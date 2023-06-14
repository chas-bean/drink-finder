import Measurement from "../types/measurement";

const tspConversionTable = {
  cl: 2.02884,
  oz: 1 / 0.166667,
  part: 1,
  parts: 1,
  shot: 9,
  shots: 9,
};

export default function adaptMeasurement(measure: string): Measurement | null {
  let symbols = measure.trimEnd().split(" ").reverse();

  // @note Some recipes don't include units, default for those
  if (symbols.length === 1) {
    symbols.unshift("oz");
  }

  const [unit] = symbols.splice(0, 1).map((u) => u.trim().toLowerCase());

  const conversionFactor =
    tspConversionTable[unit as keyof typeof tspConversionTable];

  if (!conversionFactor) {
    // @note Unsupported unit
    return null;
  }

  const teaspoons = symbols.reduce((accum, amount) => {
    const fractions = amount.split("/");
    if (fractions.length > 1) {
      accum +=
        conversionFactor *
        (parseInt(fractions[0]) / parseInt(fractions[1], 10));
    } else {
      accum += conversionFactor * parseInt(fractions[0]);
    }

    return accum;
  }, 0);

  return {
    teaspoons,
    text: measure.trimEnd(),
  };
}
