# **Chance.Bet**

Page Link: https://bartekburnat7.github.io/chance.bet/

Chance.bet is a website where the user can try his luck by plating the game of "Spin the Wheel". The premise of the game is to is to guess the colour of the wheel and if you are correct, you will be rewarded X4 of your bet size. This website is made for people that have spare time to kill or if they would like to have some fun with friends. There is a "How to Play" section for new users to make sure they understand the mechanics of the game and have a smooth experience while playing the game. You start of with £200 worth of balance which is diplayed on the top right and the goal of the game is to try and make as much money as possible.

![Am I Responsive Test](/assets/images/amiresponsive.png)

# **Features**

- **Navigation Bar**

  - Displays the logo/name of the website.
  - Your balance is shown on the right side of the navigation bar.
  - The navigation bar follows you so you can always view your balance while scrolling through the page.
    ![Navigation Bar](/assets/images/navbarss.png)

- **The Main Game Area**

  - The title on top of the page informs the user of which game he is playing so that they straight away know the context of the website.
  - The wheel spins once the user presses the BET button, then colour which the pointer points to is the randomised colour. If the randomised colour matches the one that the user has chosen, then their bet size is multiplied by four and added to their balance.
  - The wheel resets after 7 seconds and then you can place a bet again.
    ![Spin The Wheel](/assets/images/wheelss.png)

- **Bet Choice**

  - You can input the amount you would like to bet in the first input field. There is a minimum of £1 to place a bet and if the amount you put in is larger than your available balance, you will not be able to place the bet and spin the wheel.
  - There are four buttons for each colour, you are only able to choose one colour per bet. Also you cannot place a bet if you have not selected a colour.
  - The bet button can only be pressed once every 7 seconds to avoid people placing bets while the wheel is spinning.
    ![Bet Choice](/assets/images/colourchoice.png)

- **How to Play**
  - In this section the game is explained in a simple to follow grid layout. It shows the user in 3 steps how to play the game
  - Each box has a paragraph that describes what to do in every step in order and what the outcomes will be if you correctly guess the colour.
  - I also warned users that betting can be dangerous, so that they do not try to use real life betting websites and create a bad habit or addiction.
    ![How to Play](/assets/images/howtoplayss.png)

# **Testing**

- Each test i have conducted on the main three browsers: Chrome, Mozilla Firefox and Internet Explorer.The website is responsive to each screen size which includes tablet sizes and phone sizes and everything in between. I have also conducted all the tests below in each of the sizes.

- I first tested the Bet Size input, as in this area the user could insert any value which might be invalid or not accepted:

  - Insert a value less than zero: **Passed - The bet wasn't accepted.**
  - Insert a character into the bet size input area: **Passed - The bet wasn't accepted.**
  - Insert a value larger than the user balance: **Passed - The bet wasnt accepted.**

- More Random Test:

  - Clicked the BET button while the wheel was spinning: **Passed - The extra button presses were ignored and didn't interferr with the game**
  - Placing a bet without choosing a colour: **Passed - The bet wasn't accepted.**

- **BUGS**

- There is a bug that happens and i have not came to a conclusion why this happens at it happens very randomly where the wheel would soin and then skip the rotation and land on the the randomised colour. I have tried to fix this but nothing has worked.

### **Validator Testing**

- **HTML** - The index.html file passed the W3C validation test with no errors.

![HTML Validation](/assets/images/htmlvalidation.png)

- **CSS** - The style.css file passed the W3C CSS validation test with zero errors.

![CSS Validation](/assets/images/CSSvalidation.png)

- **JS** - The script.js

![JShint](/assets/images/jshintss.png)

- **Lighthouse Accessibility Score**

![Lighthouse Score](/assets/images/LIGHTHOUSE.png)

- ## **Deployment**
  - The website was deployed on Github Pages. Here are the steps I took:
    1. Go to the Github repository of your choice, then click on settings.
    2. Click the "Pages" tab from the list on the left.
    3. In the "Branch" Section, click on the dropdown and select main.
    4. Hit save, and the website will be deployed to the GitHub pages.

CREDIT:

I used this website to implement a timeout to the BET button so that the user cant place a bet untill the spin is finished - https://stackoverflow.com/questions/9914286/onclick-button-timeout-javascript
