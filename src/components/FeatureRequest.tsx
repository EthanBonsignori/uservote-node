import { FC } from "react";
import { FeatureRequestGetResponse } from "../api/generated";

interface FeatureRequestProps {
  featureRequest: FeatureRequestGetResponse;
}

const FeatureRequest: FC<FeatureRequestProps> = ({ featureRequest }) => {
  return (
    <div>
      <h3>{featureRequest.title}</h3>
      <p>{featureRequest.content}</p>
    </div>
  );
};

export default FeatureRequest;
