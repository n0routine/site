// Site post

export default ({ title, query, querySort, search, children, comp, }: Lume.Data) => (
    <>
    <div class="p-20 w-full flex flex-col gap-8">

        <div class="text-5xl bold underline decoration-(--color-accent)">
            {title}
        </div>

        <div class="w-full post-container">
            {children}
        </div>

        <div class="flex flex-col gap-8">
            {
                search.pages(query, querySort).map(e => (
                    <comp.post_preview title={e.title} author={e.author} date={e.date} tags={e.tags} search={e.search} readingInfo={e.readingInfo} sourcePath={e.page.sourcePath}>
                        {e.children}
                    </comp.post_preview>
                ))
            }
        </div>

    </div>
    </>
);
