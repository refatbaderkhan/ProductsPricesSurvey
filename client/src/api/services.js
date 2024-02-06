import { sendRequest } from "./apiConfig";

export const getProductGroups = async () => {
  const response = await sendRequest({ route: "/product-groups" });
  return response;
}

export const getProductGroupVarieties = async (productGroupId) => {
  const response = await sendRequest({ route: `/product-groups/${productGroupId}/varieties` });
  return response;
}

export const getOrigins = async () => {
  const response = await sendRequest({ route: "/origins" });
  return response;
}

export const getPurchaseUoMs = async () => {
  const response = await sendRequest({ route: "/purchase-uoms" });
  return response;
}

export const getSizes = async () => {
  const response = await sendRequest({ route: "/sizes" });
  return response;
}

export const getCountries = async () => {
  const response = await sendRequest({ route: "/countries" });
  return response;
}

export const getCities = async () => {
  const response = await sendRequest({ route: "/cities" });
  return response;
}

export const getSuppliers = async () => {
  const response = await sendRequest({ route: "/suppliers" });
  return response;
}

export const getWeekNumbers = async () => {
  const response = await sendRequest({ route: "/week-numbers" });
  return response;
}

export const getUserNames = async () => {
  const response = await sendRequest({ route: "/usernames" });
  return response;
}

export const getPurchaseOrders = async () => {
  const response = await sendRequest({ route: "/purchase-orders" });
  return response;
}

export const getPurchaseOrder = async (purchaseOrderId) => {
  const response = await sendRequest({ route: `/purchase-orders/${purchaseOrderId}` });
  return response;
} 

export const getProducts = async () => {
  const response = await sendRequest({ route: "/products" });
  return response;
}

