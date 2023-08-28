import { collection, getDocs } from "firebase/firestore";
import Homepage from "./Homepage";
import { db } from "./firebase/Firebase";
import { Picture } from "./types";

async function getPictures() {
  const data: Picture[] = [];
  const querySnapshot = await getDocs(collection(db, "pictures"));
  querySnapshot.forEach((doc) => {
    const docData = doc.data();
    data.push({
      id: doc.id,
      name: docData.name || "",
      url: docData.url || "",
    });
  });

  return data;
}

export default async function Home() {
  const pictures = await getPictures();

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <header>
        <h1 className="text-4xl mb-10 text-center font-bold">Sliding game</h1>
      </header>
      <div className="z-10 max-w-5xl w-full items-center justify-between lg:flex">
        <Homepage pictures={pictures} />
      </div>
    </main>
  );
}
