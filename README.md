# StudyBuddy Web: Your Personal AI Study Companion - Now on the Web (under construction)

StudyBuddy Web is a web application designed to elevate your studying experience. It's not just a study tool, but your buddy who's always there to help you comprehend your learning materials better. This application comes with key functionalities such as PDF document uploads, flashcard generation, interactive Q&A and content search.

![WebApp Architecture](https://github.com/Adriman2/study-buddy-front/blob/main/static/Study_Buddy_WebApp-Architecture.png?raw=true)

## Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Backend Repository](#backend-repository)

## Description

StudyBuddy Web has several key functionalities:

- **PDF Uploads**: StudyBuddy allows you to upload any PDF document. The application creates embeddings from the document, saves them in a vector database, and also stores the PDF document, both in Redis. This is facilitated through the use of Prem AI, an intuitive application designed to deploy and self-host Open-Source AI models without exposing sensitive data to third-party services.

- **Flashcard Generation**: The app can automatically generate flashcards with information from the PDF. The data retrieved from the embeddings are processed through Chat Vicuna, ensuring natural and accurate answers.

- **Interactive Q&A**: The 'Ask your buddy' functionality enables you to ask questions and extract information directly from your PDFs. It's akin to having a conversation with your book or a private tutoring session with the author. 

- **Semantic Search**: StudyBuddy also includes a semantic search function that points you to the exact page where a particular topic is discussed. This isn't a simple 'ctrl+F'; it applies user intent and the meaning of words and phrases to find the most relevant content.

## Getting Started

To get started with StudyBuddy Web, follow the steps below:

1. Clone this repository: 
    ```
    git clone https://github.com/Adriman2/study-buddy-front.git
    ```

2. Navigate to the project directory: 
    ```
    cd study-buddy-front
    ```

3. Install dependencies:
    ```
    pnpm install
    ```

4. To create a production version of the app:
    ```
    pnpm run build
    ```

5. Run the app locally:
    ```
    pnpm run dev
    ```

6. Access the app at http://localhost:5173/

7. Before running the application, make sure to start the backend service. Instructions on how to do this can be found in the [backend repository](https://github.com/yesid-lopez/study-buddy-api).

If you wish to see the live version of the application, visit StudyBuddy. We hope that you find StudyBuddy to be a valuable tool for your learning journey. Happy studying!

## Environment Variables

To run the app locally and generate a certain number of flashcards, set a Vite environment variable:

```
VITE_NUM_FLASHCARDS=3 
```

This will run the app with the `VITE_NUM_FLASHCARDS` environment variable set to `3`, meaning it will generate 3 flashcards.

## Backend Repository

You can check the implementation of our backend [here](https://github.com/yesid-lopez/study-buddy-api). In our backend repository, you can find more about: 
- API documentation
- Tools
- Client Architectures (for our web and mobile solutions)
- Infrastructure Architecture
- Prompt Engineering
- How to run the Study Buddy API

## Future Work

In our roadmap, we plan to implement a "Quiz Me" functionality. This feature will automatically generate quizzes with multiple choice questions based on the uploaded PDFs. This will not only help users assess their understanding and recall of the material but also provide an interactive and engaging way to evaluate their knowledge.

We would also like to implement models that require GPU. Currently one of our restrictions is the cost of it, but we will make it possible in the future.

## Highlights for Consideration

In developing StudyBuddy Web, our team was guided by four principles:

1. **Creative Prompts**: We capitalized on the power of open-source models by crafting efficient, unique prompts, despite the lack of large-scale computational resources.
2. **Accessibility**: Our application runs smoothly on affordable, non-GPU hardware, reflecting our commitment to making AI technology accessible and privacy-conscious.
3. **Prem Services Integration**: We integrated all available Prem services at the moment (LLMs, Embeddings, and Vector stores) to create a coherent and efficient study tool.
4. **User-friendly Design**: StudyBuddy is user-friendly and intuitive, designed for ease of use across all generations.

Built during the Prem Challenge x LangChain hackathon, StudyBuddy Web is a testament to our team's dedication to leveraging AI technology in creative and accessible ways, serving as an innovative tool for learners everywhere.

## The Team

StudyBuddy Web is the result of the collaboration between three developers, each with their own areas of expertise:

- [Yesid Lopez](https://github.com/yesid-lopez): Back End Development
- [Sara Ortiz Drada](https://github.com/saradrada): Mobile App Development
- [Adrian Patzi](https://github.com/Adriman2): Front End Web Development

As a team, our mission is to leverage the power of new technology to create innovative solutions that make a difference. We believe that cutting-edge technologies like AI have immense potential to improve the way we live and work. In the realm of education, we see a great opportunity to use these technologies to create a more engaging, personalized learning experience. With StudyBuddy, we aim to bring these benefits to learners around the world.

Our work on StudyBuddy is driven by our passion for innovation, our commitment to accessibility, and our belief in the transformative power of learning. By developing intuitive, user-friendly tools that enhance the learning process, we hope to make education more engaging and productive for everyone.
