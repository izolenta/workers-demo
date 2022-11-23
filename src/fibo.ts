export const fibonacci = (data: number): number => {
  if (data < 3) {
    return 1;
  }
  return fibonacci(data-1)+fibonacci(data-2);
}
