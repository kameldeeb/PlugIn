import { Box } from "@mui/material";
import PropTypes from "prop-types"; 

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const colors = {
    //7D7CEC
    //0B0B43
    //E2E2EB
    //e2e8f0
    //64748b
    primary: {
      400: "#1e293b",
      100: "#f8fafc",
    },
    grey: {
      100: "#e2e8f0",
      500: "#64748b",
    },
    purpleAccent: {
      500: "#7D7CEC",
      700: "#1e40af",
      800: "#1e3a8a",
    },
    redAccent: {
      500: "#ef4444",
    },
    greenAccent: {
      500: "#22c55e",
    },
  };

  const angle = parseFloat(progress) * 360; 

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%), 
                     conic-gradient(${colors.purpleAccent[500]} 0deg ${angle}deg, ${colors.grey[500]} ${angle}deg 360deg)`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};


ProgressCircle.propTypes = {
  progress: PropTypes.string, 
  size: PropTypes.string, 
};


ProgressCircle.defaultProps = {
  progress: "0.75",
  size: "40",
};

export default ProgressCircle;
