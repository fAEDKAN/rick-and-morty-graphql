import Image from "next/image";

export const CardComponent = ({ character }: any) => {
    if (!character) {
        return <h4>Loading...</h4>;
    }
    return (
        <a>
            <Image
                src={character.image}
                style={{ width: "100%" }}
                alt={character.name}
            />
            <h2>{character.name}</h2>
            <p>{character.species}</p>
        </a>
    );
};
