//TODO: create a page for users to see their personal info as well as add a form for users to add data

import { updateProfile } from "@/actions/updateUser";

export default function UserProfil() {
  return (
    <>
      <div className="max-w-screen-lg mx-auto p-4 bg-zinc-300 mt-10 rounded-xl">
        <form action={updateProfile} className="flex flex-col space-y-4">
          {/* Preferred Name */}
          <label>
            Preferred name: {""}
            <input
              type="text"
              name="preferred_name"
              className="bg-zinc-100 px-3 py-2 rounded"
            />
          </label>

          {/* Country */}

          <label>
            Country: {""}
            <input
              type="text"
              name="country"
              className="bg-zinc-100 px-3 py-2 rounded"
            />
          </label>

          {/* Age */}

          <label>
            Age: {""}
            <input
              type="number"
              name="age"
              className="bg-zinc-100 px-3 py-2 rounded"
            />
          </label>

          {/* Favourite Game */}

          <label>
            Favourite Game: {""}
            <input
              type="text"
              name="favourite_game"
              className="bg-zinc-100 px-3 py-2 rounded"
            />
          </label>

          {/* Inspo Quote */}

          <label>
            Inspirational Quote: {""}
            <textarea
              className="bg-zinc-100 px-3 py-2 rounded"
              name="inspo_quote"
              placeholder="The one quote that guides you..."
            />
          </label>

          <button
            type="submit"
            className="inline-block bg-green-400 px-4 py-2 text-xl mt-4 text-black rounded"
          >
            Save Profile
          </button>
        </form>
      </div>
    </>
  );
}
