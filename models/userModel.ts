import { db } from "../db";
import { users, type UserType } from "../db/schema";

class UserModel {
	async insertUser(user: Omit<UserType, "id">): Promise<UserType | null> {
		try {
			const newUser = await db.insert(users).values(user).returning();
			return newUser[0];
		} catch (err) {
			console.log(err);
			return null;
		}
	}
}

export default new UserModel();
