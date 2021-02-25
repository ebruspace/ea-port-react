import React from "react";
import Sidebar from "../SidebarComps/Sidebar";
import Overlay from "../SidebarComps/Overlay";
import Logo from "../PortfolioComps/Logo";
import StoryItem from "./PageStoryItem";

function PageStory() {
  return (
    <div>
      <Sidebar />
      <Overlay />
      <Logo pageName="storyboard" />
      <div class="storyboard content" id="storyboard">
        <div class="slider">
          <StoryItem picNo="15.jpg" />
          <StoryItem picNo="14.jpg" />
          <StoryItem picNo="13.jpg" />
          <StoryItem picNo="12.jpg" />
          <StoryItem picNo="11.jpg" />
          <StoryItem picNo="10.jpg" />
          <StoryItem picNo="9.jpg" />
          <StoryItem picNo="8.jpg" />
          <StoryItem picNo="7.jpg" />
          <StoryItem picNo="6.jpg" />
          <StoryItem picNo="5.jpg" />
          <StoryItem picNo="4.jpg" />
          <StoryItem picNo="3.jpg" />
          <StoryItem picNo="2.jpg" />
          <StoryItem picNo="1.jpg" />
        </div>
        <p class="sb-desc">
          In total there are 16 frames. Each frame depicts a different action on
          that scene. The story is about a man who is very happy with his life,
          in general. His wife is pregnant. But one night something terrible
          happens. The man kills his wife. But normally, we don’t see this while
          playing the game because it is the mystery of the game. In the first
          frame, we see the house from outside at night time. At the second
          frame, we see them watching television. Then, we hear shooting from
          the stairs, and see the movement of going upstairs. At the fourth
          frame, they are sleeping but when the clock shows 3:35am, he wakes up
          and kills his wife. On the actual gameplay, we do not see who killed
          the woman, but there will be a blackout scene and there will be glass
          breaking sound followed by yelling sounds.When he wakes up, he sees
          his wife’s dead body. He calls the cops.When cops arrive, they start
          searching for evidence,they don’t know whether he is guilty or not.
          But he is a suspect. So, they take him to the interrogation room to
          ask questions. He enters the room, then, the detective comes to the
          room, he sits across from him and they look at each other. The game
          begins.The genre of this game is a thriller.There will be flashbacks
          to remind the night of the murder.The detective will keep asking
          questions to continue the story and at the end of the game they will
          understand that this man has another personality and his other
          personality murdered his wife. It will end sadly because he will go to
          jail.
        </p>
      </div>
    </div>
  );
}

export default PageStory;
