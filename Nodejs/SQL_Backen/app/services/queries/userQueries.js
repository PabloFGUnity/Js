const db = require("../mysql")
const md5 = require('md5')
const moment = require('moment');
const utils = require("../../utils/utils");

const userQueries = {};

userQueries.getUserByEmail = async (email) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from users where email=?',email, 'select', conn)
    } catch (e){
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.addUSer = async (userData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        let userObj = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: md5(userData.password),
            registerDate: moment().format("YYYY-MM-DD HH:mm:ss")
        }
        return await db.query('insert into users set ?', userObj, 'insert', conn)
    } catch (e){
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.getUserById = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('select * from users where id=?',id, 'select', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.deleteUser = async (id) => {
    let conn = null
    try {
        conn = await db.createConnection()
        return await db.query('delete from users where id=?',id, 'delete', conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.updateUser = async (id,userData) => {
    let conn = null
    try {
        conn = await db.createConnection()
        let userObj = {
            name: userData.name,
            surname: userData.surname,
            email: userData.email,
            password: userData.password ? md5(userData.password) : undefined,
            registerDate: moment().format("YYYY-MM-DD HH:mm:ss")
        }

        userObj = await utils.removeUndefinedKeys(userObj)

        return await db.query('update users set ? where id=?',[userObj,id],'update',conn)
    } catch (err) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    }
};

module.exports = userQueries;