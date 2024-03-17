import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { styled } from "@acme/ui-lib/jsx";
import { iconButton } from "@acme/ui-lib/recipes";

export const IconButton = styled(ark.button, iconButton);
export interface IconButtonProps extends ComponentProps<typeof IconButton> {}
