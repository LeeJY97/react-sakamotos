import EventBus from "../pubsub/eventBus";

export const showToast = (payload) => {
  console.log('payload', payload);
  EventBus.publish("SHOW_TOAST", payload);
};