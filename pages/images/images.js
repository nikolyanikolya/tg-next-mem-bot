import Images from "@/components/Images";

export default function ImagesPage(props) {
    return (
        <div>
            <Images {...props} />
        </div>
    );
};

export async function getServerSideProps(context) {
    const { images } = context.req.body

    return {
        props: {
            data: images
        },
    };
}