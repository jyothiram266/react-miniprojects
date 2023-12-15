export const getposts = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method : "GET" ,
    });
    return res.json();
}

export const getrandomuser = async()=>{
    const res = await fetch("https://randomuser.me/api/",{
        method: "GET",
    });
    return res.json();
}
