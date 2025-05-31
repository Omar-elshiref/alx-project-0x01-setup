import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";


const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  console.log(posts)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">Post Content</h1>
        <button className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
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
