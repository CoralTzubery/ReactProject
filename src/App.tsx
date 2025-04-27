import { PropsWithChildren } from 'react';
import './app.css';

function App() {
  return (
    <>
      <SiteNav />
      <Main title="WhatIsApp?">
        <ChatsList />
      
      </Main>


    </>
  )
}

function SiteNav() {
  return (
    <nav>
      <menu>
        <li><a href="#">Home</a></li>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Chats</a></li>
      </menu>
    </nav>
  );
}


type MainProps = PropsWithChildren<{
  title: string;
}>;
function Main({ title, children }: MainProps) {
  return (
    <main>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

function ChatsList() {
  return (
    <ul className='chats-list'>
      <Chat pictureUrl='https:picsum.photos/id/5/20' name='Sigal' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum veritatis laudantium incidunt rem odio temporibus quibusdam nesciunt ducimus, nam dolores dicta ipsa. Ipsa molestiae nam magnam sit fuga cumque? '/>
      <Chat pictureUrl='https:picsum.photos/id/6/20' name='Yosef' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum veritatis laudantium incidunt rem odio temporibus quibusdam nesciunt ducimus, nam dolores dicta ipsa. Ipsa molestiae nam magnam sit fuga cumque? '/>
      <Chat pictureUrl='https:picsum.photos/id/7/20' name='Shoham' description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolorum veritatis laudantium incidunt rem odio temporibus quibusdam nesciunt ducimus, nam dolores dicta ipsa. Ipsa molestiae nam magnam sit fuga cumque? '/>
    </ul>

  );
}


type ChatProps = {
  pictureUrl: string;
  name: string;
  description: string;
};
function Chat({ pictureUrl, name, description }: ChatProps) {
  return (
    <li>
      <img src={pictureUrl} alt="" />
      <p>{name}</p>
      <p>{description}</p>
    </li>

  );
}

export default App;


