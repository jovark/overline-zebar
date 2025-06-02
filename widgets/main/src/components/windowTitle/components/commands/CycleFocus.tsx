import { LayoutTemplate, SquareSquare } from "lucide-react";
import { IconButton } from "../IconButton";
import { CommandProps } from "./types/command";

// TODO: Make issue to GlazeWM to export window types.
export const ToggleFloating = ({ glazewm }: CommandProps) => {
  const isFloating = glazewm?.focusedContainer.state.type === "floating";
  const tooltipText = isFloating
    ? "Set window to tiling"
    : "Set window to floating";
  const command = "toggle-floating";

  return (
    <IconButton
      key={command}
      animateKey={isFloating ? "floating" : "not-floating"}
      title={tooltipText}
      onClick={() => glazewm?.runCommand(command)}
      icon={isFloating ? LayoutTemplate : SquareSquare}
    />
  );
};
