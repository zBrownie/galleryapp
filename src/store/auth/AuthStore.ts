import { createStore, forward } from "effector";
import { UserProps } from "../../interfaces/auth";
import { fetchAuthLoginFx } from "../../services/auth";
import { onFailToLogin, resetAuthStore, resetFailToLogin } from "./Events";

export const $authStore = createStore<UserProps | null>(null).reset(
  resetAuthStore
);

$authStore
  .on(fetchAuthLoginFx.doneData, (_, payload) => payload)
  .on(fetchAuthLoginFx.fail, () => null);

forward({
  from: fetchAuthLoginFx.fail,
  to: onFailToLogin,
});

export const $failToLogin = createStore<boolean>(false).reset(resetFailToLogin);
$failToLogin.on(onFailToLogin, () => true);
