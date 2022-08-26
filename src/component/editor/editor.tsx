import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { nanoid } from "nanoid";
import { createElement, useState, ReactNode } from "react";
import { useDrop } from "react-dnd";

export default function Editor() {
  const [components, addComponent] = useState<any[]>([]);
  const AddComponent = (node: any) => {
    console.log(node);

    // console.log(comp);
    addComponent([...components, { ...node, id: nanoid(5) }]);
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

  const Elem = ({ children, id }: { children: ReactNode; id: string }) => {
    onclick = () => {
      console.log("Clicked", id);
    };

    return <div style={{ border: "solid 2px red" }}>{children}</div>;
  };
  return (
    <Stack direction='row'>
      <Box width='60vw' height='90vh' border='solid red' ref={drop}>
        {components.map((NewComponent) => {
          let Node = createJSx(NewComponent.component);
          return (
            <Elem key={nanoid()} id={NewComponent.id}>
              {Node}
            </Elem>
          );
        })}
      </Box>
    </Stack>
  );
}
