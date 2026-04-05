// Site base HTML doc

export default ({ title, children }: Lume.Data) => (
    <>
        {{ __html: "<!DOCTYPE html>" }}
        <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="/assets/styles.scss" hash inline />
                <link rel="stylesheet" href="/assets/styles-tw.css" hash inline />
            </head>
            <body class="text-base text-(--color-text) bg-(--color-bg)">
                <a href="/yapper/" class="hidden">A Gateway to the Labyrinth for the Souless</a>
                {children}
            </body>
        </html>
    </>
);
