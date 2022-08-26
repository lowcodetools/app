import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { nanoid } from "nanoid";
import {
  createElement,
  useState,
  ReactNode,
  useEffect,
  useRef,
  IframeHTMLAttributes,
  LegacyRef,
} from "react";
import { useDrop } from "react-dnd";
import { createPortal } from "react-dom";
import WithRouteExample from "./exmpleCodes/ExamplewithRoutes";

export default function Editor() {
  const [components, addComponent] = useState<any[]>([]);
  const [isDomReady, setIsDomReady] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    setIsDomReady(true);

    return () => setIsDomReady(false);
  }, []);

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

  let mountNode = iframeRef?.current?.contentWindow?.document
    ?.body as HTMLElement;

  console.log(mountNode);
  return (
    <Stack direction='row'>
      <iframe title='prievew' ref={iframeRef}>
        {isDomReady &&
          createPortal(
            <Box width='60vw' height='90vh' border='solid red' ref={drop}>
              <WithRouteExample />
            </Box>,
            mountNode
          )}
      </iframe>
    </Stack>
  );
}
