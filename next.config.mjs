/** @type {import('next').NextConfig} */
const nextConfig = {
   logging: {
      fetches:{
         fullUrl:true
      }
   },
   images : {
    domains: ['res.cloudinary.com'],
    unoptimized: true,

   },
};

export default nextConfig;
