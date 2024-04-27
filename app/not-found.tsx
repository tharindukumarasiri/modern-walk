import Link from "next/link";

const errorPage = () => {
  return (
    <div className="flex h-[calc(100vh-20rem)] flex-col items-center justify-center">
      <h3>404</h3>
      <p className="m-5">Looks like theres nothing here</p>

      <Link href="/">
        <h4 className="text-blue">Go back home</h4>
      </Link>
    </div>
  );
};

export default errorPage;
