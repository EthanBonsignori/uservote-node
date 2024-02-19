import {
  FeatureRequestCreateRequest,
  FeatureRequestCreateResponse,
  FeatureRequestGetResponse,
} from "./generated";

export const getFeatureRequests = (): Promise<FeatureRequestGetResponse[]> =>
  fetch(`${import.meta.env.VITE_API_ROOT}/api/v1/feature-request`).then((res) =>
    res.json()
  );

export const createFeatureRequest = (
  featureRequest: FeatureRequestCreateRequest
): Promise<FeatureRequestCreateResponse> =>
  fetch(`${import.meta.env.VITE_API_ROOT}/api/v1/feature-request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(featureRequest),
  }).then((res) => res.json());

export const updateFeatureRequest = (
  id: string,
  featureRequest: FeatureRequestCreateRequest
): Promise<FeatureRequestCreateResponse> =>
  fetch(`${import.meta.env.VITE_API_ROOT}/api/v1/feature-request/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(featureRequest),
  }).then((res) => res.json());

export const deleteFeatureRequest = (id: string): Promise<void> => {
  return fetch(
    `${import.meta.env.VITE_API_ROOT}/api/v1/feature-request/${id}`,
    {
      method: "DELETE",
    }
  ).then((res) => res.json());
};
