import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserProps, UserData } from "@/interfaces";
import React, { useState } from "react";


const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

      const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 });
        console.log(user);
      };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">User Content</h1>
        <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white cursor-pointer">Add User</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {
            posts.map(({ username, email, id, address: { street, suite, city, zipcode }, phone, website, company: { name, catchPhrase, bs } }: UserProps, key: number) => (
              <UserCard
                username={username}
                email={email}
                id={id}
                address={{ street, suite, city, zipcode }}
                phone={phone}
                website={website}
                company={{ name, catchPhrase, bs }}
                key={key}
              />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}


export default Users;
