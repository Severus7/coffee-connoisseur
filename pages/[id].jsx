import { useRouter } from "next/router";
import Head from "next/head";

const DynamicRoute = () => {
  const router = useRouter();
  const query = router.query.id;

  console.log("query", query);

  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      <h1>Welcome to Next.js with Ankita</h1>
      <p>{query}</p>
    </div>
  );
};

export default DynamicRoute;
