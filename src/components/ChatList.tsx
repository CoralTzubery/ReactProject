import { Chat } from "./Chat";

import styles from "./ChatList.module.scss";

export function ChatsList() {
    return (
        <ul className={styles.root}>
            <Chat pictureUrl='https:picsum.photos/id/5/20' name='Sigal' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum veritatis laudantium incidunt rem odio temporibus quibusdam nesciunt ducimus, nam dolores dicta ipsa. Ipsa molestiae nam magnam sit fuga cumque? ' />
            <Chat pictureUrl='https:picsum.photos/id/6/20' name='Yosef' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum veritatis laudantium incidunt rem odio temporibus quibusdam nesciunt ducimus, nam dolores dicta ipsa. Ipsa molestiae nam magnam sit fuga cumque? ' />
            <Chat pictureUrl='https:picsum.photos/id/7/20' name='Shoham' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum veritatis laudantium incidunt rem odio temporibus quibusdam nesciunt ducimus, nam dolores dicta ipsa. Ipsa molestiae nam magnam sit fuga cumque? ' />
        </ul>
    );
}
