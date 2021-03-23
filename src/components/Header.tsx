import '../styles/header.scss';

interface HeaderProps {
  title: string;
}

export function Header(headerProps: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {headerProps.title}</span></span>
    </header>
  );
}