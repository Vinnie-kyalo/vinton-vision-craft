import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const featuredPost = {
  title: "The Future of Cloud Computing: Trends to Watch in 2024",
  excerpt: "Explore the emerging technologies and strategies that will shape cloud computing in the coming year, from edge computing to AI integration.",
  author: "John Anderson",
  date: "January 5, 2024",
  readTime: "8 min read",
  category: "Cloud Computing",
};

const posts = [
  {
    id: 1,
    title: "Cybersecurity Best Practices for Small Businesses",
    excerpt: "Essential security measures every small business should implement to protect against modern threats.",
    author: "Sarah Mitchell",
    date: "January 3, 2024",
    readTime: "6 min read",
    category: "Security",
  },
  {
    id: 2,
    title: "Choosing the Right Server Infrastructure for Your Business",
    excerpt: "A comprehensive guide to selecting server solutions that match your business requirements and budget.",
    author: "David Park",
    date: "December 28, 2023",
    readTime: "10 min read",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "Web Development Trends Shaping 2024",
    excerpt: "From AI-powered development to edge computing, discover what's next in web development.",
    author: "Emily Chen",
    date: "December 22, 2023",
    readTime: "7 min read",
    category: "Development",
  },
  {
    id: 4,
    title: "Maximizing ROI on Your IT Investment",
    excerpt: "Strategies for ensuring your technology investments deliver measurable business value.",
    author: "John Anderson",
    date: "December 18, 2023",
    readTime: "5 min read",
    category: "Strategy",
  },
  {
    id: 5,
    title: "The Rise of AI in Network Security",
    excerpt: "How artificial intelligence is revolutionizing threat detection and network protection.",
    author: "Sarah Mitchell",
    date: "December 15, 2023",
    readTime: "9 min read",
    category: "Security",
  },
  {
    id: 6,
    title: "Building Resilient IT Systems for Remote Work",
    excerpt: "Best practices for creating infrastructure that supports distributed teams effectively.",
    author: "David Park",
    date: "December 10, 2023",
    readTime: "6 min read",
    category: "Infrastructure",
  },
];

const categories = ["All", "Cloud Computing", "Security", "Infrastructure", "Development", "Strategy"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="orb w-[500px] h-[500px] -top-32 right-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Blog & Insights
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                IT Insights &{" "}
                <span className="text-gradient">Industry News</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest trends, best practices, and insights 
                from our team of IT experts.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="glass-card overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary/20 via-secondary to-muted/50 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-3xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-xl bg-primary/20" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Button variant="hero" size="default" className="w-fit group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary first:bg-primary first:text-primary-foreground"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="glass-card card-3d group overflow-hidden"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-secondary to-muted/50 flex items-center justify-center overflow-hidden">
                    <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="w-10 h-10 rounded-xl bg-primary/20" />
                    </div>
                    
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground border border-border/50">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xs font-medium text-primary">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{post.author}</span>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="heroOutline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-card/50 relative">
          <div className="container mx-auto px-4">
            <div className="glass-card p-12 text-center max-w-2xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-muted-foreground mb-6">
                Get the latest IT insights delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button variant="hero" size="lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
