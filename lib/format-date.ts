export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}

export function formatRelativeDate(date: string | Date): string {
    const target = new Date(date);
    const now = new Date();

    const startOfToday = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );
    const startOfTarget = new Date(
        target.getFullYear(),
        target.getMonth(),
        target.getDate()
    );

    const diffDays = Math.round(
        (startOfToday.getTime() - startOfTarget.getTime()) /
            (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) {
        return "Today";
    }

    if (diffDays === 1) {
        return "Yesterday";
    }

    if (diffDays > 1 && diffDays < 7) {
        return `${diffDays} days ago`;
    }

    return formatDate(date);
}
