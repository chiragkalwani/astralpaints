import Image from 'next/image';
import Blue from "../../../public/blue.png";

export default function BlogPosts({ blogs }) {
    if (!blogs || blogs.length === 0) {
        return (
            <div className="my-8">
                <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
                <p>No blog posts available.</p>
            </div>
        );
    }

    // Ensure there are 5 blog posts by duplicating the last one if needed
    const blogsToDisplay = blogs.length === 4 ? [...blogs, blogs[blogs.length - 1]] : blogs;

    return (
        <div className='relative'>
            <div
                className="absolute top-0 left-0 h-full w-[10px]"
                style={{
                    background: "linear-gradient(to bottom, #00AE44 10%, #00C1DE 90%)",
                }}
            ></div>
            <div className="py-12 container mx-auto px-6">
                <h3 className="subtitle">Latest Blog Posts</h3>
                <h2 className="title">
                    Check out our latest posts
                    <Image
                        src={Blue}
                        alt="About Color"
                        width={150}
                        className="inline ml-3"
                    />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 max-sm:mt-8">
                    {/* Two small posts on the left */}
                    <div className="md:col-span-1 flex flex-col space-y-4">
                        {blogsToDisplay.slice(0, 2).map((blog, index) => (
                            <div key={index} className="relative bg-gray-200 shadow-lg overflow-hidden group">
                                {/* Image */}
                                <Image
                                    src={blog.featuredImage.node.sourceUrl}
                                    alt={blog.title}
                                    layout="responsive"
                                    width={400} // Adjust as needed
                                    height={250} // Adjust as needed
                                    className="object-cover"
                                    unoptimized={true}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
                                {/* Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 transform group-hover:-translate-y-10">
                                    <p className="text-sm">{new Date(blog.date).toLocaleDateString()}</p>
                                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                                </div>
                                {/* Button */}
                                <a href={`/blog/${blog.slug}`} className="absolute left-4 right-0 bottom-0 transform translate-y-full group-hover:-translate-y-3 transition-transform duration-300">
                                    <button className="w-fit py-2 px-4 bg-white text-blue-500 rounded-full text-center">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Large featured post in the center */}
                    <div className="md:col-span-2">
                        <div className="relative bg-gray-200 shadow-lg overflow-hidden h-full group">
                            {/* Image */}
                            <Image
                                src={blogsToDisplay[2].featuredImage.node.sourceUrl}
                                alt={blogsToDisplay[2].title}
                                layout="responsive"
                                width={800} // Adjust as needed
                                height={500} // Adjust as needed
                                className="object-cover"
                                unoptimized={true}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
                            {/* Text */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-transform duration-300 transform group-hover:-translate-y-10">
                                <p className="text-sm">{new Date(blogsToDisplay[2].date).toLocaleDateString()}</p>
                                <h3 className="text-2xl max-sm:text-lg font-bold">{blogsToDisplay[2].title}</h3>
                            </div>
                            {/* Button */}
                            <a href={`/blog/${blogsToDisplay[2].slug}`} className="absolute left-4 right-0 bottom-0 transform translate-y-full group-hover:-translate-y-3 transition-transform duration-300">
                                <button className="w-fit py-2 px-4 bg-white text-blue-500 rounded-full text-center">
                                    Read More
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Two small posts on the right */}
                    <div className="md:col-span-1 flex flex-col space-y-4">
                        {blogsToDisplay.slice(3, 5).map((blog, index) => (
                            <div key={index} className="relative bg-gray-200 shadow-lg overflow-hidden group">
                                {/* Image */}
                                <Image
                                    src={blog.featuredImage.node.sourceUrl}
                                    alt={blog.title}
                                    layout="responsive"
                                    width={400} // Adjust as needed
                                    height={250} // Adjust as needed
                                    className="object-cover"
                                    unoptimized={true}
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:bg-opacity-50"></div>
                                {/* Text */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 transform group-hover:-translate-y-10">
                                    <p className="text-sm">{new Date(blog.date).toLocaleDateString()}</p>
                                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                                </div>
                                {/* Button */}
                                <a href={`/blog/${blog.slug}`} className="absolute left-4 right-0 bottom-0 transform translate-y-full group-hover:-translate-y-3 transition-transform duration-300">
                                    <button className="w-fit py-2 px-4 bg-white text-blue-500 rounded-full text-center">
                                        Read More
                                    </button>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
