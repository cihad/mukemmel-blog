import { Sequelize } from "sequelize"

const sequelize = new Sequelize('mukemmel_blog_development', 'cihad', '123456', {
	dialect: 'postgres'
});

export default sequelize;