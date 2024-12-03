import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import {
  FaBriefcase,
  FaFileAlt,
  FaUser,
  FaCheckCircle,
  FaDownload,
} from "react-icons/fa";

import LineChart from "../../components/Dashboard/LineChart";
import BarChart from "../../components/Dashboard/BarChart";
import StatBox from "../../components/Dashboard/StartBox";

const MainDash = () => {
  const [dashboardData, setDashboardData] = useState({
    stats: {
      activeJobs: 0,
      totalApplications: 0,
      candidatesInProcess: 0,
      closedJobs: 0,
    },
    latestUsers: [],
  });

  useEffect(() => {
    fetch("/dashboardData.json")
      .then((response) => response.json())
      .then((data) => setDashboardData(data))
      .catch((error) => console.error("Error fetching dashboard data:", error));
  }, []);

  const colors = {
    primary: {
      main: "#E2E2EB",
    },
    //7D7CEC
    //0B0B43
    //E2E2EB
    //e2e8f0
    //64748b
    //ADA7B3
    secondary: {
      main: "#0B0B43",
    },
    text: {
      main: "#E2E2EB",
      200: "#0B0B43",
    },
    icons: {
      main: "#0B0B43",
    },
    grey: {
      100: "#E2E2EB",
      500: "#64748b",
    },
    purpleAccent: {
      500: "#7D7CEC",
      700: "#1e40af",
      800: "#1e3a8a",
    },
    redAccent: {
      500: "#64748b",
    },
  };

  // ///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="flex-1 transition-all duration-150 h-full flex items-center justify-center">
      <Box m="20px" width={"100%"}>
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        ></Box>

        {/* GRID & CHARTS */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 3"
            backgroundColor={colors.purpleAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.activeJobs}
              subtitle="Active Jobs"
              icon={
                <FaBriefcase
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.purpleAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.totalApplications}
              subtitle="Total Applications"
              icon={
                <FaFileAlt
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.purpleAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.candidatesInProcess}
              subtitle="Candidates"
              icon={
                <FaUser
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "10px",
                  }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 3"
            backgroundColor={colors.purpleAccent[500]}
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="12px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="20px"
          >
            <StatBox
              title={dashboardData.stats.closedJobs}
              subtitle="Closed Jobs"
              icon={
                <FaCheckCircle
                  style={{
                    color: colors.icons.main,
                    fontSize: "36px",
                    marginBottom: "15px",
                  }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}

          <Box
            gridColumn="span 6"
            gridRow="span 3"
            backgroundColor={colors.primary.main}
            borderRadius={"12px"}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h7"
                  fontWeight="600"
                  color={colors.text.main}
                >
                  Candidate Status:
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color={colors.primary.main}
                >
                  Statistics on candidates: progress by status over time.
                </Typography>
              </Box>
              <Box>
                <FaDownload
                  sx={{ fontSize: "26px", color: colors.icons.main }}
                />
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          {/* ROW 3 */}

          <Box
            gridColumn="span 6"
            gridRow="span 3"
            backgroundColor={colors.primary.main}
            borderRadius={"12px"}
          >
            <Typography
              variant="h6"
              fontWeight="600"
              color="#0B0B43"
              sx={{
                padding: "10px 30px 0 30px",
                marginBottom: "15px",
                textAlign: "center",
              }}
            >
              Most Popular
            </Typography>

            <Box height="250px" mt="-30px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default MainDash;
