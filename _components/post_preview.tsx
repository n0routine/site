// Site post

import { ListJoin, DateFmt, } from '../_includes/utils.ts';

export default ({ title, date, tags, readingInfo, children, sourcePath, }: Lume.Data) => (
    <>
    <div class="w-full flex flex-col gap-8">

        <div class="flex flex-row gap-2 flex-wrap">
            {
                ListJoin([
                    DateFmt(date),
                    `${readingInfo.words} Words`,
                    ...tags.map(e => `#${e}`),
                ].map(e => (
                    <div className="text-xl underline decoration-(--color-accent) hover:text-(--color-text-emphasis)">{e}</div>
                )), <div className="text-xl">•</div>)
            }
        </div>

        <a href={sourcePath} class="text-5xl bold underline decoration-(--color-accent) hover:text-(--color-text-emphasis)">
            {title}
        </a>

        <div class="max-h-80 overflow-y-hidden contain-content w-full post-container" style="mask-image: linear-gradient(to bottom, black calc(100% - 10rem), transparent);">
            {children}
        </div>

    </div>
    </>
);
