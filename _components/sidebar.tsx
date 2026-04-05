// Site sidebar

import { ListJoin, } from '../_includes/utils.ts';

export default ({ author, search, comp, }: Lume.Data) => (
    <>
        <div class="flex-1 w-full rounded-r-4xl overflow-y-auto flex flex-col gap-10 items-center bg-(--color-bg-elevated)">

            <div class="flex-0 flex flex-col items-center justify-center">
                <comp.avatar />
            </div>

            <div class="flex-1"></div>

            <div class="flex-0 p-10 flex flex-col gap-4 items-center justify-center">

                <a href="/index.md" class="text-3xl font-bold underline text-(--color-text) decoration-(--color-accent) hover:text-(--color-text-emphasis)">
                    {author}
                </a>

                <div class="text-center">
                    I'm {author}. Welcome to my slice of the 'Net! Here you'll find me talking about whatever catches my fancy,
                    Including Systems Engineering, Gamedev, Weird Media, and everything ever.
                </div>

                <hr class="w-full border text-(--color-text)" />

                    <div class="flex flex-row gap-1 flex-wrap">
                        {
                            ListJoin(["home", "blog",].map(e => search.pages(`section=${e}`)[0]).map(e => (
                                <a href={e.page.sourcePath} className="hover:text-(--color-text-emphasis)">{e.title}</a>
                            )), <div className="">•</div>)
                        }
                    </div>

                <hr class="w-full border text-(--color-text)" />

                <div class="flex flex-col items-center justify-center gap-1 flex-wrap">
                    {
                        ListJoin([
                            `© ${new Date().getFullYear()} ${author}`,
                            (<a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode" class="hover:text-(--color-text-emphasis)">CC BY-SA</a>),
                            "Deadline? Do you mean \"time to begin\"?",
                        ].map(e => (
                            <div className="text-center">{e}</div>
                        )), <div className="">•</div>)
                    }
                </div>

           </div>

        </div>
    </>
);
