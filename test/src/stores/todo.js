import create from "zustand";

export const useTodoStore = create((set) => {
  return {
    list: [{ title: "erfan" }],
    addItem: () =>
      set((state) => {
        return {
          list: [...state.list, {title: crypto.randomUUID()}],
        };
      }),
    clearList: () => set({ list: [] }),
  };
});
