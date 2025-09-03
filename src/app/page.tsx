import HomePage from "@/Components/HomePage";
import NavBar from "@/Components/NavBar";

export default function Home() {
  return (
    <div className="bg-transparent">
      <NavBar />
      {/* <NavBottom /> */}
      <HomePage />
    </div>
  );
}
