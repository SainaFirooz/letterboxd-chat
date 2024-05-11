import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  notifications: [],
  addNotification: (conversation) =>
    set((state) => ({ notifications: [...state.notifications, conversation] })),
}));

export default useConversation;
