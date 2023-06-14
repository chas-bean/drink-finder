import Measurement from "../types/measurement";

const tspConversionTable = {
  oz: 1 / 0.166667,
};

export default function adaptMeasurement(measure: string): Measurement | null {
  let symbols = measure.trimEnd().split(" ").reverse();

  const [unit] = symbols.splice(0, 1).map((u) => u.trim());

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
    text: measure,
  };
}
