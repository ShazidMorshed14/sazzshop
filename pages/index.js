import Footer from "../components/footer";
import Header from "../components/header";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home({ country }) {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div>
      <Header country={country} />
      {session ? "you are logged in" : "you are not logged in"}
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  if (process.env.NODE_ENV === "production") {
    let data = await axios
      .get(`https://api.ipregistry.co/?key=tnapgsiz3jq6xhi3`)
      .then((res) => {
        return res.data?.location?.country;
      })
      .catch((err) => {
        console.log(err);
      });

    return {
      props: {
        //for production use only
        country: {
          name: data?.name ? data?.name : "Bangladesh",
          flag: data?.flag?.emojitwo
            ? data?.flag?.emojitwo
            : "https://img.icons8.com/color/48/bangladesh-circular.png",
        },
      },
    };
  } else {
    return {
      props: {
        country: {
          name: "Bangladesh",
          flag: "https://img.icons8.com/color/48/bangladesh-circular.png",
        },
      },
    };
  }
}
