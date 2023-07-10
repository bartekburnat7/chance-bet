# **Chance.Bet**

Chance.bet is a website where the user can try his luck by plating the game of "Spin the Wheel". The premise of the game is to is to guess the colour of the wheel and if you are correct, you will be rewarded X4 of your bet size. This website is made for people that have spare time to kill or if they would like to have some fun with friends. There is a "How to Play" section for new users to make sure they understand the mechanics of the game and have a smooth expiernce whilst playing the game. You start of with £200 worth of balance which is diplayed on the top right and the goal is to try and make as much money as possible.

## **Features**

- **Navigation Bar**

  - Displays the logo/name of the website.
  - Your balance is shown on the right side of the navigation bar.
  - The navigation bar follows you so you can always view your balance whilst scrolling through the page.

- **The Main Game Area**

  - The tittle on top of the page informs the user of which game he is playing so that they straight away know the context of the website.
  - The wheel spins once the user presses the BET button, then colour with the pointer on top of it is the randomised colour. If the randomised colour matches the one the user has chosen then their bet size is multiplied by four and added to their balance.
  - The wheel resets after 7 seconds and then you can place a bet again.

- **Bet Choice**

  - You can input the amount you would like to bet in the first input field. There is a minimum of £1 to place a bet and if the amount you put in is larger than your available balance, you will not be able to pplace the bet and spin the wheel.
  - There are four buttons for each colour, you are only able to choose one colour per bet. Also you cannot place a bet if you have not selected a colour.
  - The bet button can only be pressed once every 7 seconds to avoid people placing bets whilst the wheel is spinning.

- **How to Play**
  - In this section the game is explained in a simple to follow grid layout. It shows the user in 3 steps how to play the game
  - Each box has a paragraph that describes what to do in every step in order and what the outcomes will be if you correctly guess the colour.
  - I also warned users that betting can be dengerous so that they do not try to use real life betting websites and create a bad habit or addiction.

## **Testing**

Each test i have conducted on the main three browsers: Chrome, Mozilla Firefox and Internet Explorer.The website is responsive to each screen size which includes

I first tested the Bet Size input, as in this area the user could insert any value which might be invalid or not accepted:

- Insert a value less than zero: Passed - The bet wasnt accepted.
- Insert a character into the bet size input area: Passed - The bet wasnt accepted.
- Insert a value larger than the user balance: Passed - The bet wasnt accepted.

Ther are more test

### **Validator Testing**

- **HTML** - The index.html file passed the W3C validation test with no errors.
  ![HTML Validation](/assets/images/)
- **CSS** - The style.css file passed the W3C CSS validation test with 1 error.
  ![CSS Validation](/assets/images/)
- **Lighthouse Accessibility Score**

![Lighthouse Score](/assets/images/)

- ## **Deployment**
  - The website was deployed on Github Pages. Here are the steps I took:
    1. Go to the Github repository of your choice, then click on settings.
    2. Click the "Pages" tab from the list on the left.
    3. In the "Branch" Section, click on the dropdown and select main.
    4. Hit save, and the website will be deployed to the GitHub pages.

CREDIT:

button time out https://stackoverflow.com/questions/9914286/onclick-button-timeout-javascript
