import { CircularProgress } from "@mui/material";

const LoadingScreen = ({ size }: { size: number }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "20vh"
      }}>
      <CircularProgress size={size} />
    </div>
  );
};

export default LoadingScreen;
