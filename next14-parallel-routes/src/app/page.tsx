"use client";

export default function Home() {
  const onClickGet = async () => {
    try {
      const res = await fetch("/api/users/1?test=1");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickPush = async () => {
    try {
      const res = await fetch("/api/users/1?test=1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: 123456789, email: "123" }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex gap-2">
      <button
        onClick={onClickGet}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Get user!
      </button>
      <button
        onClick={onClickPush}
        className="bg-white text-black px-4 py-2 rounded-lg"
      >
        Push user!
      </button>
    </main>
  );
}
