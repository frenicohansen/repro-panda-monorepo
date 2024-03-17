import "./App.css";
import { css, cx } from "@acme/ui-lib/css";
import { Stack } from "@acme/ui-lib/jsx";
import { button } from "@acme/ui-lib/recipes";
import { Button, Alert, Tooltip, IconButton } from "@acme/react";
import { InfoIcon, Activity } from "lucide-react";

function App() {
  return (
    <>
      <h1 className={css({ fontSize: "4xl", lineHeight: "1.1" })}>
        Hello from Panda 🐼
      </h1>
      <h2 className={css({ fontSize: "2xl", my: 4, color: "yellow.400" })}>
        module-resolution/with-import-map-package
      </h2>
      <Stack>
        <Button visual="funky" shape="square" size="lg">
          Button component from ui-lib
        </Button>
        <button
          className={cx(
            button(),
            css({
              bgColor: "teal.400",
              color: "rgba(0, 0, 0, 0.8)",
              fontWeight: "bold",
            })
          )}
        >
          button recipe from ui-lib, with local overrides
        </button>
        <Alert.Root>
          <Alert.Icon asChild>
            <InfoIcon />
          </Alert.Icon>
          <Alert.Content>
            <Alert.Title>Browser Update available</Alert.Title>
            <Alert.Description>
              For the best experience, please update your browser.
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
        <IconButton>
          <Activity /> Activity
        </IconButton>
        <Tooltip.Root>
          <Tooltip.Trigger>Hover Me</Tooltip.Trigger>
          <Tooltip.Positioner>
            <Tooltip.Arrow>
              <Tooltip.ArrowTip />
            </Tooltip.Arrow>
            <Tooltip.Content>I am a Tooltip!</Tooltip.Content>
          </Tooltip.Positioner>
        </Tooltip.Root>
      </Stack>
    </>
  );
}

export default App;
