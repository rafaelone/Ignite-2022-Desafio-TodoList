import { CountContainer } from './styles';

type CountProps = {
  totalCreated?: number;
  total: number;
  text: string;
  color: string;
};

export function Count({ total, text, color, totalCreated }: CountProps) {
  return (
    <CountContainer color={color}>
      <strong>{text}</strong>
      {totalCreated ? (
        <p>
          {total} de {totalCreated}
        </p>
      ) : (
        <p>{total}</p>
      )}
    </CountContainer>
  );
}
