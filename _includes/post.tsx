// Site post

export default ({ title, author, date, tags, search, readingInfo, children, comp, }: Lume.Data) => (
    <>
    <comp.base title={title}>
        <comp.layout author={author} search={search}>
            <comp.post title={title} date={date} tags={tags} readingInfo={readingInfo}>
                {children}
            </comp.post>
        </comp.layout>
    </comp.base>
    </>
);
