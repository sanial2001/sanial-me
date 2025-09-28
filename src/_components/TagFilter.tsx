
interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagChange: (tag: string) => void;
  postCounts: Record<string, number>;
  totalPosts: number;
}

export default function TagFilter({ 
  tags, 
  selectedTag, 
  onTagChange, 
  postCounts, 
  totalPosts 
}: TagFilterProps) {
  return (
    <section className="mb-8">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onTagChange("all")}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTag === "all"
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
          }`}
        >
          All ({totalPosts})
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 capitalize ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/50"
            }`}
          >
            {tag} ({postCounts[tag] || 0})
          </button>
        ))}
      </div>
    </section>
  );
}
