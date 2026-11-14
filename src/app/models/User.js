import { DataTypes, Model } from "sequelize";

class User extends Model {
	static init(sequelize) {
		super.init(
			{
				id: {
					type: DataTypes.UUID,
					defaultValue: DataTypes.UUIDV4,
					primaryKey: true,
				},
				name: DataTypes.STRING,
				email: DataTypes.STRING,
				passwordHash: DataTypes.STRING,
				admin: DataTypes.BOOLEAN,
			},
			{
				sequelize,
				tableName: "users",
			},
		);

		return this;
	}
}
export default User;
