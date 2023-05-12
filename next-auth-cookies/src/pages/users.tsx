import NavBar from "@/components/NavBar";
import { GetStaticPropsContext } from "next";

const Users = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export const getServerSideProps = async (ctx: any) => {

  return {
    props: {},
  };
};

export default Users;
