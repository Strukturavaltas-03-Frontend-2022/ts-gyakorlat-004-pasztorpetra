// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: any[] = [
  new HumanHero(1 ,"Anna", "female", 34, 90),
  new HumanHero(2, "András", "male", 21, 98),
  new HumanHero(3, "Andrea", "female", 40, 97),
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
  new TransformerHero (1, "Balázs", 3, 4, "clan1"),
  new TransformerHero (2, "Betti", 6, 2, "clan2"),
  new TransformerHero (3, "Béla", 2, 8, "clan3"),
];
