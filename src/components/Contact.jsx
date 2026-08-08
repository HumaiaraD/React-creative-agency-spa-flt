import React from "react";

function Contact() {

    return (
        <>
          <footer className="bg-black text-white px-8 py-10 w-screen sm:h-100 md:h-200 md:flex justify-center items-center">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">

              <div>
                <h2 className="text-3xl font-bold">HD | Creative Agency</h2>
                <p className="text-gray-400 mt-2 text-sm">
                  Design. Development. Digital experiences.
                </p>
              </div>

              <div className="flex gap-6 text-sm">
                <a href="https://github.com/HumaiaraD" target="_blank" className="hover:text-gray-400 transition">
                  GitHub
                </a>

              
              </div>

            </div>

            <div className="max-w-6xl mx-auto border-t border-white/20 mt-10 pt-5">
              <p className="text-xs text-gray-500">
                © 2026 HD Creative Agency. All rights reserved.
              </p>
            </div>
          </footer>
        </>
    )
}

export default Contact;