import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const factsList = [
  { id: nanoid(8), title: "Прообразом Чубакки стал пёс режиссёра" },
  {
    id: nanoid(8),
    title: "Актёрам разрешили подобрать любимый цвет для своих световых мечей",
  },
  {
    id: nanoid(8),
    title:
      "В фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину",
  },
  {
    id: nanoid(8),
    title:
      "Дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу",
  },
  {
    id: nanoid(8),
    title:
      "Планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок",
  },
];

const toolkitSlice = createSlice({
  name: "facts",
  initialState: {
    amount: "",
    factsList,
    filteredList: [],
  },
  reducers: {
    inputValue: (state, action) => {
      state.amount = action.payload;
    },
    filtered(state) {
      const copyState = state.factsList.concat();
      state.filteredList = copyState.splice(0, state.amount);
    },
  },
});

export const { inputValue, filtered } = toolkitSlice.actions;
export default toolkitSlice.reducer;
