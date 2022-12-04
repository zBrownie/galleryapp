import { createEffect } from "effector";
import { UserProps } from "../interfaces/auth";

export const fetchAuthLoginFx = createEffect(
  async (params: any): Promise<UserProps> => {
    if (params.email !== "bruno@email.com") {
      throw Error();
    }
    return {
      email: params.email,
      images: [],
      id: "123",
    };
  }
);
