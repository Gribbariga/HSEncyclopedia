import { makeStore } from "@/store/index";
const store = makeStore();
export type StateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
