import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { createElement, useState } from "react";
import { useDrop } from "react-dnd";

export default function Editor() {
  const [components, addComponent] = useState<any[]>([]);
  const AddComponent = (node: any) => {
    console.log(node);
    addComponent([...components, node.component]);
  };

  const [, drop] = useDrop(() => ({
    accept: "box",
    drop: (prop) => AddComponent(prop),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const createJSx = (jsxString: any) => {
    return <div dangerouslySetInnerHTML={{ __html: jsxString }}></div>;
  };
  return (
    <Stack direction='row'>
      <Box width='60vw' height='90vh' border='solid red' ref={drop}>
        {components.map((NewComponent) => {
          console.log(NewComponent);
          let node = createJSx(NewComponent);
          return node;
        })}
      </Box>
    </Stack>
  );
}
