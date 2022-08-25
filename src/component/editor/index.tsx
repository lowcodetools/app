/* eslint-disable import/no-anonymous-default-export */
import { Box } from "@mui/material";
import { Stack } from "@mui/system";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Comp from "./component";
import Editor from "./editor";

export default function () {
  return (
    <DndProvider backend={HTML5Backend}>
      <Stack direction='row'>
        <Editor />
        <Box id='#panel'>
          <Comp />
        </Box>
      </Stack>
    </DndProvider>
  );
}
