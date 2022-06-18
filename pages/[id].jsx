import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const query = router.query.dynamic;

  console.log("query", query);

  return (
    <div>
      <h1>Welcome to Next.js with Ankita</h1>
      <p>{query}</p>
    </div>
  );
};

export default DynamicRoute;
