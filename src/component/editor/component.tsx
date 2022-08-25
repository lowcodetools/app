import { useDrag } from "react-dnd";
import { Box } from "@mui/material";

export default function Comp() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "box",
    item: { component: `<Box>New Box </Box>` },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  console.log(isDragging);
  return <Box ref={drag}>Hello</Box>;
}
