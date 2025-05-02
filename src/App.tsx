import { Main } from "./components/Main"
import { ChatsList } from "./components/ChatList";
import { SiteNav } from "./components/SiteNav";

import './app.scss';

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

export default App;