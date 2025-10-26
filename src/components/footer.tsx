import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-white border-t border-gray-700 bg-[#F7F8FA] dark:bg-black px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-6 lg:px-16">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">DS Renders</h3>
                    <p className="leading-relaxed dark:text-white text-zinc-800">
                        Creating spaces that inspire, connect, and enhance human experience through innovative design.
                    </p>
                    <p className="text-zinc-800 text-sm dark:text-white mt-2">
                        © 2025 DS Renders. All rights reserved.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-white">Services</h4>
                    <ul className="space-y-2 text-zinc-800 dark:text-white">
                        <li><Link href="/architecture" className="hover:text-white transition-colors">Architecture</Link></li>
                        <li><Link href="/interiors" className="hover:text-white transition-colors">Interior Design</Link></li>
                        <li><Link href="/furniture" className="hover:text-white transition-colors">Furniture Design</Link></li>
                        <li><Link href="/landscape" className="hover:text-white transition-colors">Landscape Design</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-white">Contact</h4>
                    <ul className="space-y-2 text-zinc-800 dark:text-white">
                        <li>123 Design Street</li>
                        <li>Creative City, CC 12345</li>
                        <li>+1 (555) 123-4567</li>
                        <li>hello@dsrenders.com</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}