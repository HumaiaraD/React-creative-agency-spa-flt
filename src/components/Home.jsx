import React from "react";
import heroVideo from "../assets/hero-video.mp4"

function Home() {


    return(
        <>
            <main className="w-screen min-h-screen pt-30">
                <section className="flex justify-between">
                    <div>
                        <h1 className="text-5xl"><span className="font-bold">HD</span> | <span className="text-gray-400">Creative Agency</span> </h1>
                    </div>
                    <div className="w-60 p-3 ">
                        <p className="text-sm">A bold creative agency crafting distinctive brands, digital experiences, and visual stories.
                            We blend strategy, design, and technology to turn ideas into memorable experiences.
                        </p>
                    </div>
                </section>
                <section className="flex justify-center items-center ">
                    <video
                        width="850"
                        height="515"
                        src={heroVideo}
                        controls
                        >
                    </video>
                </section>
                <p className="text-gray-400 text-center text-sm">Video content belongs to GSAP and is used here for educational and portfolio demonstration purposes. This project is not affiliated with or endorsed by GSAP.</p>

            </main>

            <section>
                <article>
                    <div className="max-w-5xl mx-auto px-6 py-24">
  <div className="grid md:grid-cols-2 gap-12 items-start">

    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
        How We Work
      </p>

      <h2 className="text-5xl md:text-6xl leading-tight font-medium">
        We turn ideas into experiences people remember.
      </h2>
    </div>

    <div className="md:pt-12">
      <p className="text-lg leading-8 text-gray-600">
        From brand identity to digital products, we combine strategy, design,
        technology, and motion to create work that feels intentional,
        distinctive, and built to connect.
      </p>

      <p className="text-lg leading-8 text-gray-600 mt-6">
        Every project starts with understanding the idea, then shaping it into
        something clear, engaging, and memorable.
      </p>
    </div>

  </div>
</div>
                </article>
            </section>

        </>
    )
}

export default Home;