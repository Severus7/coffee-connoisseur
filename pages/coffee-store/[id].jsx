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
    </div>
  );
};

export default CoffeeStore;
