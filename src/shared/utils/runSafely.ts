export function runSafely<T, E>(
  fn: () => T | Promise<T>
): Promise<[T | null, E | null]> {
  return Promise.resolve()
    .then(fn)
    .then(
      (result) => [result, null] as const,
      (err) => [null, err] as const,
    );
}