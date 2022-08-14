import { Card, CardContent, Box } from "@mui/material";
import "./Sport.css";

export const SportItem = ({ oneElement }) => {
  return (
    <div className="Fb_Cr_G">
      {oneElement.football ? (
        <div>
          <Box sx={{ minWidth: "150 px", margin: "10px" }}>
            <Card variant="outlined">
              <CardContent>
                <div>
                  <img
                    className="iconF"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Football_%28soccer_ball%29.svg/964px-Football_%28soccer_ball%29.svg.png"
                  />
                </div>
                <div>Football {oneElement.football[0].start.split(" ")[0]}</div>
                {/* <div>Football match {oneElement.football[0].match}</div> */}
                {oneElement.football.map((i) => {
                  console.log(i);

                  return (
                    <div>
                      <div>
                        {i.start.split(" ")[1]} at {i.country}
                      </div>
                      <div> {i.match} </div>
                      <div></div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Box>
        </div>
      ) : (
        <div>Loading...</div>
      )}

      {oneElement.cricket ? (
        <div>
          <Box sx={{ minWidth: "150 px", margin: "10px" }}>
            <Card variant="outlined">
              <CardContent>
                <div>
                  <img
                    className="iconCr"
                    src="https://cdn11.bigcommerce.com/s-tj87duh98/images/stencil/1280x1280/products/363/1123/KOOKABURRA_TURF_WHITE_CRICKET_BALL__%40cricketershop_India_%285%29__22841__83772.1576135344.jpg?c=1"
                  />
                </div>
                <div>Cricket {oneElement.football[0].start.split(" ")[0]}</div>
                {oneElement.cricket.map((i) => {
                  console.log(i);
                  return (
                    <div>
                      {" "}
                      <div>
                        {i.start.split(" ")[1]} at {i.country}
                      </div>
                      <div> </div>
                      <div>{i.match} </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Box>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      {oneElement.golf ? (
        <div>
          <Box sx={{ minWidth: "150 px", margin: "10px" }}>
            <Card variant="outlined">
              <CardContent>
                <div>
                  <img
                    className="iconG"
                    src="https://static.vecteezy.com/system/resources/thumbnails/000/514/647/small/golf_02.jpg"
                  />
                </div>
                <div>Golf {oneElement.football[0].start.split(" ")[0]}</div>
                {oneElement.golf.map((i) => {
                  console.log(i);
                  return (
                    <div>
                      {" "}
                      <div>
                        {i.start.split(" ")[1]} at {i.country}
                      </div>
                      <div> </div>
                      <div>{i.match} </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </Box>
        </div>
      ) : (
        <div>No golf matches...</div>
      )}
    </div>
  );
};
