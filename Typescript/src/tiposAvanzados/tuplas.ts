(() => {
    const userId: (number | string) [] = [1, "uno"];
    userId.push(2);
    userId.push("dos");
    userId.push("dos");
    userId.push(3);
    console.log(userId);

    const user_id: [number,string] = [1,"uno"]

    const [db_sql, db_nosql] = user_id;

    console.log(typeof db_sql,db_sql);
    console.log(typeof db_nosql,db_nosql);


})();