import { $api } from "../http";

export const registration = async (email: string, password: string) => {
  try {
    const res = await $api.post<{ message: string }>("/auth/registration", {
      email,
      password,
    });

    alert(res.data.message);
  } catch (e) {
    alert(e);
  }
};
