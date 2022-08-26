import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { createElement, useState } from "react";
import { useDrop } from "react-dnd";

export default function Editor() {
  const [components, addComponent] = useState<any[]>([]);
  const AddComponent = (node: any) => {
    console.log(node);

    // console.log(comp);
    addComponent([...components, node.component]);
  };

  const [, drop] = useDrop(
    () => ({
      accept: "component",
      drop: (prop) => AddComponent(prop),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [components]
  );

  const createJSx = (component: any) => {
    console.log(component);
    const Comp = createElement(component, null, "hey");
    return Comp;
  };
  return (
    <Stack direction='row'>
      <Box width='60vw' height='90vh' border='solid red' ref={drop}>
        {components.map((NewComponent) => {
          let Node = createJSx(NewComponent);
          return Node;
        })}
      </Box>
    </Stack>
  );
}
