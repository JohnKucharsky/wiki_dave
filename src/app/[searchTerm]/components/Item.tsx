import Link from "next/link";
import { useMemo } from "react";
import Image from "next/image";

type Props = {
  result: Result;
};

const Item = ({ result }: Props) => {
  const text = useMemo(() => {
    return (
      <div className={"flex flex-col justify-center"}>
        <h2>
          <Link
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target={"_blank"}
            className={"text-xl font-bold underline"}
          >
            {result.title}
          </Link>
        </h2>
        <p>{result.extract}</p>
      </div>
    );
  }, [result.extract, result.pageid, result.title]);

  return result?.thumbnail?.source ? (
    <article className={"m-4 max-w-lg"}>
      <div className={"flex flex-row gap-4 items-center"}>
        <Image
          src={result.thumbnail.source}
          alt={result.title}
          width={result.thumbnail.width}
          height={result.thumbnail.height}
          loading={"lazy"}
        />

        <p>{text}</p>
      </div>
    </article>
  ) : (
    <article className={"m-4 max-w-lg"}>{text}</article>
  );
};

export default Item;
