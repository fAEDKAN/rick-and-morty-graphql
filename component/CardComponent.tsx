import Image from "next/image";

export const CardComponent = ({ character }: any) => {
    const src = character.image;

    const myLoader = () => {
        return src;
    };

    if (!character) {
        return <h4>Loading</h4>;
    }
    return (
        <a className={"card"}>
            <Image
                loader={myLoader}
                src={src}
                unoptimized
                width={100}
                height={100}
                alt={"rickandmorty"}
            />

            <h2>{character.name}</h2>
            <p>{character.species}</p>
        </a>
    );
};
