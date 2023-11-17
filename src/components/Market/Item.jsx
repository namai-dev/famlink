import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "../../img/photo2.jpeg";

const Item = ({ id, title, price }) => {
  const imgPath = `../assets/img/${id}.jpg`;

  const navigate = useNavigate();
  const handleNavigation = () => navigate(`/item/${id}`);

  return (
    <Card className="animate__animated animate__fadeIn" raised>
      <CardActionArea>
        <CardMedia
          component="img"
          height="260"
          image={Image}
          alt={id}
          onClick={handleNavigation}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" noWrap>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button size="small" color="error" onClick={handleNavigation}>
          Buy
        </Button>
        <Typography variant="subtitle2" color="text.secondary" align="right">
          {`Kh${price}`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default Item;
