type OnClick = (
  event: React.MouseEvent<HTMLInputElement | HTMLButtonElement>
) => void
type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void
type OnChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => void
type OnKeyDownTextArea = (event: React.KeyboardEvent<HTMLTextareaElement>) => void
type OnBlurTextArea = (event: React.FocusEvent<HTMLTextAreaElement>) => void
type OnFocus = (event: React.FocusEvent<HTMLInputElement>) => void
type OnSubmit = (event: React.FormEvent<HTMLFormElement>) => void
type OnClickDiv = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
