export type OnClick = (
  event: React.MouseEvent<HTMLInputElement | HTMLButtonElement>
) => void
export type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void
export type OnChangeTextArea = (
  event: React.ChangeEvent<HTMLTextAreaElement>
) => void
export type OnKeyDownTextArea = (
  event: React.KeyboardEvent<HTMLTextAreaElement>
) => void
export type OnBlurTextArea = (
  event: React.FocusEvent<HTMLTextAreaElement>
) => void
export type OnFocus = (event: React.FocusEvent<HTMLInputElement>) => void
export type OnSubmit = (event: React.FormEvent<HTMLFormElement>) => void
export type OnClickDiv = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void
