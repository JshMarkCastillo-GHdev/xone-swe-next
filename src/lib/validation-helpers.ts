/** Reject ASCII control characters except common whitespace. */
const CONTROL_CHAR_PATTERN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/;

export function hasControlCharacters(value: string): boolean {
  return CONTROL_CHAR_PATTERN.test(value);
}
