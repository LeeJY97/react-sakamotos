import EventBus from "../pubsub/EventBus";
import { Toast as IToast } from "types/Toast";

export const showToast = (payload: IToast) => {
  EventBus.publish("SHOW_TOAST", payload);
};
