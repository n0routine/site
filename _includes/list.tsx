// Site post

export default ({ title, author, query, querySort, search, children, comp, }: Lume.Data) => (
    <>
    <comp.base title={title}>
        <comp.layout author={author} search={search}>
            <comp.list title={title} query={query} querySort={querySort}>
                {children}
            </comp.list>
        </comp.layout>
    </comp.base>
    </>
);
