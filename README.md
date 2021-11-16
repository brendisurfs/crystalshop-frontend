# CRYSTALSHOP (Name TBD)

This is the front-end to a really elaborate idea that I had. I wanted to create an ever generating shop of 3D gltf crystal models, which get destroyed every 30 days
unless someone buys them. 
Once a crystal is gone, its gone.

I will have a Houdini process spin up every 30 days to wedge a handful of procedurally generated crystals, and send that out to a protected server route to add it to the db.
The end goal is to be able to attach crypto wallets so you can easily collect a crystal and it will be in your account forever. 

# Project Stack
## Front
- React
- Three.js
- Tailwindcss
- GraphQL

## Back
- Go (Gin-Gonic)
- GraphQL (gqlgen)
- PostgreSQL

## Extras 
- Houdini PDG 
- Supabase
