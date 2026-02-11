//TODO: create a page for users to see their personal info as well as add a form for users to add data

import { updateProfile } from "@/actions/updateUser";

export default function UserProfil() {
  return (
    <>
      <div>
        <form action={updateProfile}>
          {/* Preferred Name */}
          <label>
            Preferred name: {""}
            <input type="text" name="preferred_name" />
          </label>

          {/* Country */}

          <label>
            Country: {""}
            <input type="text" name="country" />
          </label>

          {/* Age */}

          <label>
            Age: {""}
            <input type="number" name="age" />
          </label>

          {/* Favourite Game */}

          <label>
            Favourite Game: {""}
            <input type="text" name="favourite_game" />
          </label>

          {/* Inspo Quote */}

          <label>
            Inspirational Quote: {""}
            <textarea
              name="inspo_quote"
              placeholder="The one quote that guides you..."
            />
          </label>

          <button
            type="submit"
            className="bg-pink-300 text-black px-4 py-2 rounded w-full"
          >
            Save Profile
          </button>
        </form>
      </div>
    </>
  );
}
