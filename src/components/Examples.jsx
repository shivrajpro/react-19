import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log("selectedTopic=>", selectedTopic);
  }
  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3> {EXAMPLES[selectedTopic].title} </h3>
        <p> {EXAMPLES[selectedTopic].description} </p>
        <pre>
          <code> {EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      {/* JSX Slots */}
      <Tabs
        buttons={
          <>
            <TabButton onClick={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onClick={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onClick={() => handleSelect("props")}>Props</TabButton>
            <TabButton onClick={() => handleSelect("state")}>State</TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
