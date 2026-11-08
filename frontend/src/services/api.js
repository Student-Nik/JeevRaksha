const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/+$/, "");


export const API_ENDPOINTS = {
  APPOINTMENTS: `${API_BASE_URL}/api/v1/appointments`,

  DOCTOR_LOGIN: `${API_BASE_URL}/api/v1/auth/doctor/login`,

  VISITS: `${API_BASE_URL}/api/v1/visits`,
};


export const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(endpoint, {
    ...options,
    headers: {
      ...options.headers,
    },
  });

  return response;
};

// ========================================
// API ERROR HANDLING
// ========================================

export const getApiErrorMessage = (
  result,
  fallbackMessage = "Something went wrong. Please try again."
) => {
  return result?.message || fallbackMessage;
};

export default API_BASE_URL;
