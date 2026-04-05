// Site layout

export default ({ author, search, children, comp, }: Lume.Data) => (
    <>
        <div class="size-full flex flex-row">

            <div class="flex-0 w-96 h-screen sticky top-0 flex items-center justify-center">
                <div class="flex-0 h-8"></div>
                <comp.sidebar author={author} search={search} />
                <div class="flex-0 h-8"></div>
            </div>

            <div class="flex-1 shrink max-w-220">
                {children}
            </div>

            <div class="flex-1"></div>

        </div>
    </>
);
