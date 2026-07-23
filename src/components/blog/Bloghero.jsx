const BlogHero = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16">
      <div className="max-w-[980px] mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] font-semibold text-white tracking-tight">
          Scalable Solutions For
          <br />
          <span className="bg-gradient-to-r from-[#5B8DFF] via-[#B15BFF] to-[#FF7A45] bg-clip-text text-transparent">
            Every
          </span>{" "}
          Frontier
        </h1>

        <p className="mt-5 text-sm sm:text-base text-white/50 max-w-[560px] mx-auto leading-relaxed">
          Choose a framework that grows with your vision. From individual
          developers launching their first dApp to global institutions
          requiring high-throughput architecture.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;