import { Button } from "@nextui-org/button";
import * as actions from "@/lib/actions/auth.actions";
import { auth } from "@/authentication/auth";

const Home = async () => {
  const session = await auth();
  return (
    <div className="container flex gap-5">
      {session?.user ? <p>signed in</p> : <p>signed out</p>}
      <form action={actions.signIn}>
        <Button type="submit">Sign in </Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};
export default Home;
