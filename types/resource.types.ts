export enum ResourceType {
    ARTICLE = "ARTICLE",
    VIDEO = "VIDEO",
    COURSE = "COURSE",
    DOCUMENTATION = "DOCUMENTATION",
    GITHUB = "GITHUB",
    OTHER = "OTHER",
}

export const RESOURCE_TYPES: ResourceType[] = [
    ResourceType.ARTICLE,
    ResourceType.VIDEO,
    ResourceType.COURSE,
    ResourceType.DOCUMENTATION,
    ResourceType.GITHUB,
    ResourceType.OTHER,
];

export interface Resource {
    id: string;
    title: string;
    type: ResourceType;
    url: string;
    description?: string;
    ownerId: string;
    createdAt: string;
    updatedAt: string;
}

export interface CreateResourceDto {
    title: string;
    type: ResourceType;
    url: string;
    description?: string;
}

export interface UpdateResourceDto {
    title?: string;
    type?: ResourceType;
    url?: string;
    description?: string;
}

const RESOURCE_TYPE_LABELS: Record<ResourceType, string> = {
    [ResourceType.ARTICLE]: "Article",
    [ResourceType.VIDEO]: "Video",
    [ResourceType.COURSE]: "Course",
    [ResourceType.DOCUMENTATION]: "Documentation",
    [ResourceType.GITHUB]: "GitHub",
    [ResourceType.OTHER]: "Other",
};

export function formatResourceType(type: ResourceType): string {
    return RESOURCE_TYPE_LABELS[type];
}
