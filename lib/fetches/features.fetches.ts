import { getCategory } from "./general.fetches";
import { CATEGORY_TYPE } from "@/constants/constants";

export const getFeatures = () => getCategory({ type: CATEGORY_TYPE.Feature })