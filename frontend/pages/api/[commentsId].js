const {Pool, clinte} = require('pg');

const pool = new Pool({
    user: "vbnomarxxcd",
    host:"localhost",
    password:"1234",
    database:"portfolio",
    port:5432,
})

export default function fetchComments (req, response){
    const cid  = req.query.commentsId;
    console.log(cid)
    const query = {
        // give the query a unique name
        name: 'fetch-comments',
        text: 'SELECT  "newsId" ,id, "comment" FROM comments_comments WHERE "newsId" = $1 ORDER BY id DESC LIMIT 5 ',
        values: [cid],
      }
      
   
    pool.query(query,(err , res)=>{
       if(!err){
           console.log(JSON.stringify(res.rows))
           return response.status(200).json(res.rows)
       }else{
           console.log(err.message)
           
       }
        pool.end();
    })
    
}