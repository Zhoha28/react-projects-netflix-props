import Card from "./Card";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />

      <div className="cont">
        <Card
          name="Dark"
          imgsrc="https://images-na.ssl-images-amazon.com/images/I/51Y-4b1Ux0L._SY450_.jpg"
          title="A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
          link="https://www.netflix.com/in/title/80100172"
        />

        <Card
          name="Friends"
          imgsrc="https://pyxis.nymag.com/v1/imgs/7b8/293/c01025df7559d43ad3ef939ec23f02eee8-30-friends-gossip-tk.rsquare.w1200.jpg"
          title="This hit sitcom follows the merry misadventures of six 20-something pals as they navigate the pitfalls of work, life and love in 1990s Manhattan."
          link="https://www.netflix.com/in/title/70153404"
        />

        <Card
          name="Big Bang Theory"
          imgsrc="https://images.theconversation.com/files/274985/original/file-20190516-69189-xi009a.jpg?ixlib=rb-1.1.0&rect=0%2C75%2C840%2C767&q=45&auto=format&w=496&fit=clip"
          title="Physicists Leonard and Sheldon find their nerd-centric social circle with pals Howard and Raj expanding when aspiring actress Penny moves in next door."
          link="https://www.netflix.com/in/title/70143830"
        />




        
      </div>
    </>
  );
}

export default App;
