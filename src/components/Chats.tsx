import styles from "./Chats.module.scss";

type ChatProps = {
    pictureUrl: string;
    name: string;
    description: string;
};

export function Chat({ pictureUrl, name, description }: ChatProps) {
    return (
        <li className={styles.root}>
            <img src={pictureUrl} alt="" />
            <p>{name}</p>
            <p>{description}</p>
        </li>

    );
}