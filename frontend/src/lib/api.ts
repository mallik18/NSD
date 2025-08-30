const API_BASE_URL = "http://127.0.0.1:8000";

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products/`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

export async function fetchTestimonials() {
  const response = await fetch(`${API_BASE_URL}/testimonials/`);
  if (!response.ok) {
    throw new Error("Failed to fetch testimonials");
  }
  return response.json();
}

export async function fetchSchools() {
  const response = await fetch(`${API_BASE_URL}/schools/`);
  if (!response.ok) {
    throw new Error("Failed to fetch schools");
  }
  return response.json();
}

export async function submitContactForm(formData: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  const response = await fetch(`${API_BASE_URL}/contact/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error("Failed to submit contact form");
  }
  return response.json();
}
