import EventBus from "../pubsub/EventBus";
import { Toast as IToast } from "interfaces/Toast";

export const showToast = (payload: IToast) => {
  EventBus.publish("SHOW_TOAST", payload);
};
