// src/hooks/redux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";

// ใช้แทน plain `useDispatch` และ `useSelector` ที่มาพร้อมกับการตั้งค่าชนิด (type) ที่ถูกต้อง
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
