"use client";

export default function PageTitle({
    title,
}: {
    title: string;
}) {
    return (
        <h1 className="text-xl font-semibold text-slate-900">
            {title}
        </h1>
    );
}