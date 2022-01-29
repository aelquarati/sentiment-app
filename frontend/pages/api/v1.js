// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
   if(req.method === "GET"){
      res.status(500).json({ message: 'Sorry we only accept POST request' })
   }else if(req.method ==="POST"){
      const r = await fetch

   }
}
