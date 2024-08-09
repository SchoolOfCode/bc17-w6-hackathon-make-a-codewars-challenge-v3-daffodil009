# 🪕Project : Are you playing the  Banjo tonight? 🪕

This project implements a function areYouPlayingBanjo that determines whether a given name will get an opportunity to play with British-born, Melbourne-based composer/songwriter Hana Stretton at Royal Albert Hall tonight. 🎸🎺🎷🎻🥁

If it does match, the function returns a string indicating the person will be playing  🪕banjo with Hana Stretton at the Royal Albert Hall. Otherwise, it returns a string stating the person can attend the performance instead.

## 💡 OBJECTIVES FOR THE WORKSHOP

Here's a glimpse of what you'll be achieving by the end of this workshop's challenge.

To determine if a person plays banjo based on their name, the objectives are:

Accurate name evaluation: Correctly identify if a given condition is met.
Clear output generation: Provide appropriate textual output based on the name evaluation.
Error handling: Gracefully handle unexpected input (e.g., empty strings, names too short or long).
Readability: Write code that is easy to understand and maintain.



## 🎟️ TICKETS

Time to dive into action! 🏊‍♂️ Here's what you'll be working on:

### 🎫 Ticket 1 - Setup

Install Vitest and optionally set up an NPM `test` script that conveniently runs your tests.

You will be making one kata each, but you will be in development teams. The aim is to co-elevate each other. There are several ways you can and should look to help each other:

- Brainstorming: Helping each make your ideas better, and giving feedback to each other to add different perspectives and improve the end product
- Planning: You can help validate each others plans, and sense check in a team review the direction of your products
- Check-ins: Regular team stand-ups / check-ins will help make sure you are building and making progress together
- Support: You should aim to help each other overcome issues if one of your team is stuck and cannot Google their way out of it
- Testing: You can act as a first line user test for each others katas. You might find it a good idea to book in regular checkpoints to demo to each other and get initial feedback in quick bursts, making sure you can build in and adapt to any useful feedback before official release of your katas

### 🎫 Ticket 2 - Plan your kata

## MVP (Minimum Viable Product) 1:

Core functionality: Accurately determine if a given name starts with a particular letter.

Output: Provide a clear and concise text output indicating if the person plays banjo.

Additional considerations:

Error handling: Implement basic error handling for invalid inputs (e.g., empty strings).

Code readability: Write clean and maintainable code.

This MVP focuses on the essential features of the project without unnecessary complexity. 


Write your kata's scenario in a comment in `main.js` and include the start of an exported function that your audience will use to solve it (like you've seen on the katas you've done before). 

ℹ️ The reason for leaving the function body empty is that you want the people solving your kata to write their own implementation from scratch. Your role is to provide the overall problem statement and function skeleton. The solving and coding is up to them! Leaving an incomplete skeleton function helps point them in the right direction without giving away a full working solution.


## MVP 2: Handling Multiple Names
Core Functionality
Accurately determine if any name within a given array of names starts with a particular letter.
Provide a clear and concise text output indicating if at least one person in the array plays banjo.

Output
A boolean value indicating whether at least one person in the array plays banjo.

A list of names that start with the specified letter.

Additional Considerations
Error handling: Implement error handling for invalid inputs (e.g., empty array, non-string elements).
Efficiency: Optimize the code for performance, especially when handling large arrays.
Code readability: Maintain clean and maintainable code.

### 🎫 Ticket 3 - Write your kata

When drafting your test cases, consider the different inputs that could be passed to the solution function and any edge cases you want to account for. You could put into practice tools such as Equivalency Partitioning, Boundary Value Analysis, and Decision Tables if its useful. Think of test values that will thoroughly cover the expected functionality. The number of tests is up to you, but aim for sufficient coverage to validate correctness.

Since you'll write tests before seeing people's solutions, focus on defining expected outputs for given inputs, without assumptions about how people actually wrote the code. You're testing for outcomes. You could follow a TDD workflow - write a failing test, then temporarily add code to pass it. Just be sure to remove the solution code before sharing the kata. This helps ensure your tests fail when logic is missing or incorrect and pass when implemented properly.



🎯 At this stage you should have a description of the problem in `main.js` and some tests in `main.test.js`.

### 🎫 Ticket 4 - Check your tests

To verify your tests, temporarily add a working implementation to the solution function in `main.js`. Check that the tests fail before implementation and pass when the function is coded correctly. This validates that your tests accurately check for both incorrect and correct solutions. Remember to remove the solution code afterwards before sharing the kata.


### 🎫 Ticket 5 - Share your kata

Before pushing your final kata repository, be sure to remove any solution code you added for test validation. You want to provide only the kata description, skeleton function, and test cases - no actual solutions. Once ready, share your repo link in the [learn.schoolofcode.co.uk Hackathon Channel](https://learn.schoolofcode.co.uk/path-player?courseid=bc17-qe&unit=66acf966524bf23f05018063Unit) so other bootcampers can find it, clone it, implement solutions, and run your tests to check their progress. This allows them to solve the programming challenge you've created!

Share it with following format:

```
Room: REPLACE_ME_WITH_YOUR_ROOM_NUMBER
Name: REPLACE_ME_WITH_YOUR_NAME
Link: REPLACE_ME_WITH_A_LINK_TO_YOUR_PUBLIC_GITHUB_REPO_CONTAINING_THE_KATA
Overview: REPLACE_ME_WITH_A_BRIEF_DESCRIPTION_OF_WHAT_YOUR_KATA_IS_ABOUT
```

If it's not public already, remember to change the visibility of your repository to public.

### 🎫 Ticket 6 - Present you kata

Make sure you present your project in the markdown file - this will be assessed alongside your actual kata. Treat this as an asynchronous presentation - anything you would want to talk through (plans, brainstorming, final results, user feedback, etc) should go in here.

### 🎫 Ticket 7 - Complete katas from others

To solve katas created by other bootcampers, first clone their repository using the shared link. `cd` into the folder, run `npm install` to get the dependencies, then implement a solution in main.js. Execute their test cases to validate your code against their requirements. Provide feedback on the clarity of their instructions, difficulty level, and effectiveness of the tests. Engaging with each other's challenges allows everyone to learn. Make sure to critique respectfully - creating a programming challenge is difficult!

