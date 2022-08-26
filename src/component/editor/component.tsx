import { useDrag } from "react-dnd";
import { Box } from "@mui/material";
import { nanoid } from "nanoid";
import { Stack } from "@mui/system";

export default function Comp() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "component",
    id: nanoid(),
    item: { component: Stack },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(isDragging);
  return <Box ref={drag}>Hello</Box>;
}
