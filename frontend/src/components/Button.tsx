export const Button = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 text-2xl bg-green-700 hover:bg-green-500 text-white font-bold rounded"
    >
      {children}
    </button>
  );
};
