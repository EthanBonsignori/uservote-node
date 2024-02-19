import { ArrowDropUp } from "@mui/icons-material";
import { Box, Button, Chip, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { FeatureRequestGetResponse } from "../api/generated";

interface FeatureRequestProps {
  featureRequest: FeatureRequestGetResponse;
}

const FeatureRequest: FC<FeatureRequestProps> = ({ featureRequest }) => {
  return (
    <Paper
      square={false}
      elevation={3}
      sx={{ p: 1, display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <Box sx={{ mr: 2, ml: 1 }}>
        <Button
          variant="outlined"
          color="secondary"
          sx={{
            p: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #888",
            borderRadius: "10%",
            width: "70px",
            height: "70px",
            color: "#888",
            ":hover": {
              borderColor: "#000",
              color: "#000",
              backgroundColor: "#f0f0f0",
            },
          }}
        >
          <ArrowDropUp fontSize="large" />
          <Typography variant="h6">{featureRequest.votes}</Typography>
        </Button>
      </Box>
      <Box>
        <Typography variant="h6">{featureRequest.title}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#888" }}>
          {featureRequest.content}
        </Typography>
        <Chip label={featureRequest.category} variant="outlined" />
      </Box>
    </Paper>
  );
};

export default FeatureRequest;
