// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {

    setTimeout(() => {
        res.status(200).json({ num: Math.floor(Math.random() * 1000) })
    }, 5000)
  
}
