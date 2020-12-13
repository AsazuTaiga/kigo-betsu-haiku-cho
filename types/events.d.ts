type OnClick = (
  event: React.MouseEvent<HTMLInputElement | HTMLButtonElement>
) => void
type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void
type OnChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => void
type Onkeypress = (event: React.KeyboardEvent<HTMLInputElement>) => void
type OnBlur = (event: React.FocusEvent<HTMLInputElement>) => void
type OnFocus = (event: React.FocusEvent<HTMLInputElement>) => void
type OnSubmit = (event: React.FormEvent<HTMLFormElement>) => void
type OnClickDiv = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
