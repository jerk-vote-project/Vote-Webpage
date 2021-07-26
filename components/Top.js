import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
        </div>
        <Header as="h1">Jerk-Vote</Header>
      </div>
      <Gnb />
    </div>
  );
}