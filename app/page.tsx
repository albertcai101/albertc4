import Image from "next/image";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl font-bold">
                    Albert Cai
                </h1>
                <ol className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        Hi, I am Albert Cai, a third-year Mechanical Engineering and Computer Science undergraduate at <a href="https://www.stanford.edu" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Stanford University</a>.
                    </li>
                    <li className="mb-2">
                        I previously interned as a hardware engineer at <a href="https://www.cepton.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Cepton</a> and am now working part-time at a stealth humanoid robotics startup (YC W25) based in Palo Alto.
                    </li>
                    <li>
                        My passion lies in advancing commercial humanoid robotics and artificial intelligence to enhance human life. Feel free to reach out!
                    </li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a 
                        href="mailto:albertcai.paloalto@gmail.com"
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4 font-[family-name:var(--font-geist-mono)]"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        albertcai.paloalto@gmail.com
                    </a>
                </div>
            </main>
        </div>
    );
}
