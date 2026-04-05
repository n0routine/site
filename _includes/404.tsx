// Site post

export default ({ title, comp, }: Lume.Data) => (
    <>
    <comp.base title={title}>
        <div class="flex flex-col items-center justify-center">
            Oops... You might have lost your way.
        </div>
    </comp.base>
    </>
);
