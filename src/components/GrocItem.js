import { useCallback } from "react";
import { Card, CardActions, CardContent, Button, Box } from "@mui/material";
import { minWidth } from "@mui/system";
import { Link } from "react-router-dom";
import "./GrocItem.css";

export const GrocItem = ({ product, onDelete }) => {
  const onDeleteCallback = useCallback(
    (e) => {
      onDelete(product.id);
    },
    [onDelete, product]
  );

  return (
    <Box sx={{ minWidth: "150 px", margin: "10px" }}>
      <Card variant="outlined">
        <CardContent>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.category}</div>

          <Link to={"edit/" + product.id} className={"LinkItem"}>
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

//products/${product.id}
//{'edit/' + product.id}
