import Homepage from "./Homepage";
import { db } from "./firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

async function getPictures() {
  const data: { id: string; name: string; url: string }[] = [];
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <Homepage pictures={pictures}/>
      </div>
    </main>
  )
}
