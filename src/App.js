import { CssModules } from "./components/CssModules";
import { Emotion } from "./components/Emotion";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <>
      <CssModules />
      <StyledJsx />
      <Emotion />
    </>
  );
}
