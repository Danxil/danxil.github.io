import { createClient } from "@sanity/client";

let PROJECT_ID = "83wuar6u";
let DATASET = "production";

export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: false,
  apiVersion: '2022-01-12',
})