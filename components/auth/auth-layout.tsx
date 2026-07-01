interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50">
            {/* Left Side */}
            <div className="hidden lg:flex relative overflow-hidden flex-col justify-between bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 text-white p-16">

                {/* Background blobs */}
                <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

                {/* Logo */}
                <div className="relative z-10">
                    <h1 className="text-4xl font-bold">
                        Career Companion
                    </h1>

                    <p className="mt-3 text-slate-300">
                        Track • Prepare • Grow
                    </p>
                </div>

                {/* Main Content */}
                <div className="relative z-10 max-w-lg">
                    <h2 className="text-5xl font-bold leading-tight">
                        Organize your job search and interview preparation in one place.
                    </h2>

                    <p className="mt-8 text-lg leading-8 text-slate-300">
                        Manage applications, prepare interviews, save resources and stay
                        focused on your growth.
                    </p>
                </div>

                {/* Bottom */}
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md">
                        <div className="h-2 w-2 rounded-full bg-emerald-400" />

                        <span className="text-sm text-slate-200">
                            Your career journey starts here
                        </span>
                    </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center p-8">
                {children}
            </div>
        </div>
    );
}