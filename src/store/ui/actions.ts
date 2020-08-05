import {createAction} from "typesafe-actions";
import {AnalysisRequest} from "./models";

export const submitFiles = createAction("UIActions/SUBMIT_FILES")<AnalysisRequest>();