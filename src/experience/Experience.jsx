import GlobalStyles from "../GlobalStyles";
import Astro from "./Astro";
import LittlePrincePlanet from "./LittlePrincePlanet";
import { Ufo } from "./Ufo";

export default function Experience() {
  return (
    <>
      <LittlePrincePlanet />
      <Astro />
      <Ufo />
    </>
  );
}
