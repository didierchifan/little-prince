import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
import styled from "styled-components";
import { Button } from "./components/ui/button";
import { Baby } from "lucide-react";

export default function Tooltip() {
  return (
    <StyledDrawer>
      <DrawerTrigger asChild>
        <StyledButton>
          <IconWrapper>
            <Baby
              style={{ width: "100%", height: "100%" }}
              size={48}
              color="#c5dfff"
              strokeWidth={1.3}
            />
          </IconWrapper>
        </StyledButton>
      </DrawerTrigger>
      <StyledDrawerContent className="z-[9999]">
        <StyledDrawerHeader>
          {/* <DrawerTitle className="invisible">
            Are you absolutely sure?
          </DrawerTitle> */}
          <DrawerDescription className="text-white text-justify mt-0 pt-0">
            A fost odată pe o stea un mic călător numit Tudor Andrei, care a
            sosit pe Pământ cu ochii mari și sufletul plin de vise. Pe 24 august
            2025, povestea lui continuă cu un nou capitol — Botezul.
            <br />
            <br />
            Vă invităm cu drag să-l însoțiți pe Tudor, alături de părinții lui
            iubitori Andreea & Bila și nașii săi dragi Anna & Miclea și Alexa &
            Valentin, într-o călătorie plină de aventuri, zambete și bucurie.
            <br />
            <br />
            🚀 Ceremonia: Biserica Anglicană a Învierii Strada Alexandru D.
            Xenopol 2, București 030167
            <br />
            <br />
            🕓 ora 16:00, va rugam sa veniti cu 10 minute inainte.
            <br />
            <br />
            🌿 Petrecerea în grădină: Restaurantul Suneto Strada Toamnei 101,
            București 030167 🕔 ora 17:00
            <br />
            <br />✨ Ținută: Lejeră, casual — ideală pentru o petrecere de vară
            în grădină, sub cerul senin si instelat.
            <br />
            <br />
            Veniți cu inima deschisă și sufletul ușor, pentru a fi martorii
            începutului unei frumoase aventuri din viața lui Tudor.
          </DrawerDescription>
        </StyledDrawerHeader>
        <StyledDrawerFooter>
          <StyledDrawerClose
            style={{ backgroundColor: "#c3f3ff", color: "#003a7d" }}
          >
            Vă rugăm confirmați prezența printr-un mesaj până la data de 30
            iulie.
          </StyledDrawerClose>
        </StyledDrawerFooter>
      </StyledDrawerContent>
    </StyledDrawer>
  );
}

const StyledButton = styled(Button).attrs({
  forwardedAs: "button",
})`
  position: fixed;
  bottom: 16px;
  right: 16px;
  z-index: 100;
  color: black;
  background-color: #6b848a;
  height: 50px;
  width: 50px;
  animation: blinkBackground 2s ease-in-out infinite;

  @keyframes blinkBackground {
    0% {
      background-color: #6b848a;
    }
    50% {
      background-color: #4b5d78;
    }
  }
`;

const StyledDrawerContent = styled(DrawerContent)`
  margin-top: 0px !important;
  padding-top: 0px !important;
  background-color: rgba(20, 25, 30, 0.3);
`;

const StyledDrawer = styled(Drawer)`
  opacity: 0.8 !important;
  border: none;
  outline: none;
`;

const StyledDrawerHeader = styled(DrawerHeader)`
  margin-top: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  border: none;
`;

const StyledDrawerFooter = styled(DrawerFooter)`
  margin-top: 0 !important;
  padding-top: 24px;
`;

const StyledDrawerClose = styled(DrawerClose)`
  height: auto;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
