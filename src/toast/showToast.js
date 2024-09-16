import EventBus from "../pubsub/eventBus";

export const showToast = (payload) => {
  EventBus.publish("SHOW_TOAST", payload);
};