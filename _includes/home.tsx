// Site home

export default ({ title, author, search, children, comp, }: Lume.Data) => (
    <>
    <comp.base title={title}>
        <comp.layout author={author} search={search}>
            <comp.home>
                {children}
            </comp.home>
        </comp.layout>
    </comp.base>
    </>
);
