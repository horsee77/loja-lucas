import clsx from "clsx";

const Price = ({
  amount,
  className,
  currencyCode = "BRL",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => {
  const isBRL = currencyCode === "BRL";

  return (
    <p suppressHydrationWarning={true} className={className}>
      {new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencyCode,
        currencyDisplay: "narrowSymbol",
      }).format(parseFloat(amount))}
      {!isBRL && (
        <span className={clsx("ml-1 inline", currencyCodeClassName)}>
          {currencyCode}
        </span>
      )}
    </p>
  );
};

export default Price;