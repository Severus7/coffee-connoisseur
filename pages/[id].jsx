import { useRouter } from "next/router";

const AnyPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to Next.js with Ankita</h1>
      <p>{router.query.id}</p>
    </div>
  );
};

export default AnyPage;
