import { useCallback } from "react";
import { Card, CardActions, CardContent, Button, Box } from "@mui/material";
import { minWidth } from "@mui/system";
import { Link } from "react-router-dom";
import "./TodoItem.css";

export const TodoItem = ({ task, onDelete }) => {
  const onDeleteCallback = useCallback(
    (e) => {
      onDelete(task.id);
    },
    [onDelete, task]
  );

  return (
    <Box sx={{ minWidth: "150 px", margin: "10px" }}>
      <Card variant="outlined">
        <CardContent>
          <div>{task.id}</div>
          <div>{task.name}</div>
          <div>{task.assignee}</div>

          <Link to={"edit/" + task.id} className={"LinkItem"}>
            <Button>Edit</Button>
          </Link>

          <CardActions>
            <Button onClick={onDeleteCallback} size="small">
              Remove
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Box>
  );
};

//tasks/${task.id}
//{'edit/' + task.id}
