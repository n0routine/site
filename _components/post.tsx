// Site post

import { ListJoin, DateFmt, } from '../_includes/utils.ts';

export default ({ title, date, tags, readingInfo, children, }: Lume.Data) => (
    <>
    <div class="p-20 w-full flex flex-col gap-8">

        <div class="flex flex-row gap-2 flex-wrap">
            {
                ListJoin([
                    DateFmt(date),
                    `${readingInfo.words} Words`,
                    ...tags.map(e => `#${e}`),
                ].map(e => (
                    <div className="text-lg underline decoration-(--color-accent) hover:text-(--color-text-emphasis)">{e}</div>
                )), <div className="text-xl">•</div>)
            }
        </div>

        <div class="text-4xl bold underline decoration-(--color-accent)">
            {title}
        </div>

        <div class="w-full post-container">
            {children}
        </div>

    </div>
    </>
);
