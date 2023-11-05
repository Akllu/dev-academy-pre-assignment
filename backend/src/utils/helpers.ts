import { IStationQueryParams } from "../types/station";

const isString = (value: unknown): value is string => {
  return typeof value === "string" || value instanceof String;
};

export const validateStationQueryParams = (params: unknown): IStationQueryParams => {
  if (!params || typeof params !== "object") {
    throw new Error("Data missing or in wrong format");
  }

  let limit = 10;
  let offset = 0;

  if ("pageSize" in params && isString(params.pageSize)) {
    const pageSize = parseInt(params.pageSize);
    limit = isNaN(pageSize) || pageSize < 0 ? 10 : pageSize;
  }

  if ("page" in params && isString(params.page)) {
    const page = parseInt(params.page);
    offset = isNaN(page) || page < 0 ? 0 : page * limit;
  }

  return {
    offset: offset,
    limit: limit
  };
};
