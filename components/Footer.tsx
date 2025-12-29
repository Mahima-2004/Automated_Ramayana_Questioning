import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-gray-900 to-black border-t-2 border-gold-500/30 py-8 mt-auto relative z-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Organization Logo & Name */}
                    <div className="flex items-center gap-4">
                        <div className="bg-white/90 p-2 rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                            <Image
                                src="/rv-logo.png"
                                alt="RV College of Engineering"
                                width={80}
                                height={80}
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-xl md:text-2xl font-cinzel font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-saffron-300">
                                RV College of Engineering
                            </h3>
                            <p className="text-gold-400/80 text-sm font-playfair italic">
                                Department of Electronics and Communication Engineering
                            </p>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="flex flex-col items-center md:items-end gap-2">
                        <h4 className="text-lg font-cinzel text-gold-300 border-b border-gold-500/30 pb-1 mb-2">
                            Developed By
                        </h4>
                        <ul className="text-gray-300 font-playfair text-right space-y-1">
                            <li className="hover:text-gold-200 transition-colors">Mahima Gowda RG</li>
                            <li className="hover:text-gold-200 transition-colors">Manish R Shetty</li>
                            <li className="hover:text-gold-200 transition-colors">Dr. Rohini Hallikar</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="mt-8 pt-4 border-t border-gray-800 text-center text-gray-500 text-xs font-playfair">
                    &copy; {new Date().getFullYear()} Ramayana Learning Platform. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
