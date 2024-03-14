import featureRequests from "./featureRequest";

const mountRoutes = (app) => {
  app.use("/featureRequests", featureRequests);
};

export default mountRoutes;
