export default function Star() {
  const star: JSX.Element[] = [];

  for (let i = 0; i < 50; i++) {
    star[i] = <div className="star"></div>;
  }

  return star;
}
