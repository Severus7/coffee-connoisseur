import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h1>Coffee Store Page</h1>
      <p>{router.query.id}</p>
    </div>
  );
};

export default CoffeeStore;
