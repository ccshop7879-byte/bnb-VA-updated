"use client"

export function toast() {
  return {
    id: "",
    dismiss: () => undefined,
    update: () => undefined,
  }
}

export function useToast() {
  return {
    toasts: [],
    toast,
    dismiss: () => undefined,
  }
}
