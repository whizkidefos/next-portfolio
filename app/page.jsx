"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch('/Efosa-AISE.pdf', {
        headers: {
          'Cache-Control': 'max-age=31536000',
        },
      });

      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download',
          'EfosaIgbinehiCVAISE.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };
  return (
      <main className="h-full">
        <div className="container mx-auto" h-full>
          <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
            <article className="order-2 text-center xl:text-left xl:order-none">
              <span className="text-xl">Software Engineer</span>
              <h1 className="mb-6 h1"><span className="text-accent">Efosa Igbinehi</span></h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies. I am passionate about building software that is scalable, maintainable and user-friendly.
              </p>
              <aside className="flex flex-col items-center gap-2 xl:flex-row">
                <Button
                    onClick={handleDownload} disabled={isDownloading}
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2 uppercase"
                >
                  <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
                  <FiDownload />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Social
                      containerStyles="flex gap-6 mt-4 xl:mt-0"
                      iconStyles="w-9 h-9 text-accent border border-accent rounded-full flex justify-center items-center text-base hover:bg-accent hover:text-primary transition-all duration-300"
                  />
                </div>
              </aside>
            </article>
            <figure className="order-1 mb-8 xl:order-none xl:mb-0">
              <Photo />
            </figure>
          </div>
        </div>

        <Stats />
      </main>
  );
}
