import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <h1>Coffee Store Page</h1>
      <p>{router.query.id}</p>
      <br />
      <Link href="/coffee-store/dynamic">
        <a>Go to dynamic page</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
