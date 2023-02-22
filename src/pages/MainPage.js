import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function MainPage() {
  const bgGradientStyle = {
    width: "100wh",
    height: "90vh",
    color: "#fff",
    // background: {linear-gradient(to right, #3d7eaa, #ffe47a)};
    backgroundsize: "400% 400%",
    // -webkit-animation: Gradient 15s ease infinite;
    // -moz-animation: Gradient 15s ease infinite;
    // animation: Gradient 15s ease infinite;
  }

  const mainStyle = {
    color: "#E26559",
    fontSize: "61px",
    alignItems: "center",
    justifyContent: "center",
  }
  const nextButtonStyle = {
    color: "#2B7799",
    fontSize: "35px",
    position:"absolute",
  }
    return (
      <>
       <motion.div whileDrag={{ backgroundColor:"#3d7eaa, #ffe47a" }} style={{bgGradientStyle}}/>
        <h2 type="text" style={mainStyle} className="p-20">WELLCOME TO MY PORTFOLIO</h2> 
        <Link to="/aboutme">
        <Button variant="outlined" style={nextButtonStyle} className="p-20 ">START</Button>
        </Link>
      </>
    );
   }


