const BlogList = ({ blogs, title }) => {

    return (

        <div className="">
            {/**heading */}
            <div className='px-2 py-2  items-center w-screen h-[80px]  bg-pink '>
                <h1 className='text-3xl font-bold mr-4 sm:text-4xl '>{title} </h1>
            </div>

            {/**body part */}
            <div className='max-w-[1240px] mx-auto text-white relative'>
                <div
                    className='grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2  relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

                    {blogs.map((blogs) => (

                        <div key={blogs.id} className='bg-white rounded-xl shadow-2xl  transform   transition hover:scale-125 ease-out
                          duration-300 '>
                            <div className='p-8'>
                                <h2 className='font-bold text-2xl my-6'>{blogs.title}</h2>
                                <p className='text-gray-600 text-xl'> {blogs.blog}</p>
                            </div>

                            <div className='bg-slate-100 pl-8 py-4'>
                                <p className='flex items-center text-indigo-600'>{blogs.author}</p>
                            </div>


                        </div>))}
                </div>
            </div>
        </div>
    );
}
export default BlogList;