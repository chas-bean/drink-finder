export default function DrinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>Thirsty?</nav>
      {children}
    </section>
  );
}
