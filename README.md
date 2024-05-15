# Pokédex

## Description

Pokédex is a React application designed to showcase proficiency within Subvisual’s tech stack. The application allows users to search for Pokémon by name or partial name, providing detailed information about the Pokémon, including its name, number, and sprite. Additionally, users can navigate using "Previous" and "Next" buttons for a more convenient experience.

## Features

1. **Pokémon Search:** Users can enter a Pokémon name or partial name to search for a matching Pokémon. The application utilizes a local list mapping Pokémon names to IDs for efficient searching and to reduce the number of requests to the API.

2. **ID-Based Search:** Users can also search for Pokémon based on their ID numbers for a more specialized search.

3. **Detailed Pokémon Information:** Upon selecting a Pokémon from the search results, users are redirected to a page displaying more information about the selected Pokémon. This information is fetched from the PokéAPI and includes sprites and other relevant data.

4. **Automated Tests:** The application includes at least two automated tests, ensuring the functionality of key features. These tests verify that it is possible to execute a search correctly, the possible results presented match the request, the result of the fetch to the API is obtained, and it is possible to navigate correctly between Pokémon using the ID order.

5. **Redux Toolkit:** Pokédex utilizes Redux Toolkit for state management as it is a powerful library for managing application state that provides a robust and efficient solution.

6. **Caching Mechanism (Optional):** The caching mechanism is implemented to prevent repetitive requests to the PokéAPI, reducing server load.

## Tech Stack

- **TypeScript:** TypeScript adds static typing to JavaScript, enhancing performance, code maintenance, and error detection.
- **Vite:** Vite is used as a fast and efficient build tool, providing quick development feedback.
- **Tailwind CSS:** Tailwind CSS offers a utility-first approach to styling, facilitating rapid UI development and consistency.
- **Cypress:** Cypress is employed for end-to-end testing, ensuring the reliability and functionality of the application across different scenarios.

## Decisions and Considerations

- **Redux Toolkit:** Redux Toolkit is selected for its simplicity and powerful capabilities in managing application state, facilitating a predictable and maintainable codebase.
- **Local Pokémon List:** Implementing a local Pokémon list for search functionality reduces the need to make requests to APIs for every search, improving responsiveness and reducing the server load.
- **TypeScript Integration:** TypeScript enhances performance, code quality, and developer experience by providing type checking and improved code documentation.
- **Tailwind CSS for Styling:** Tailwind CSS streamlines the styling process with its utility-first approach, enabling rapid iteration and consistent design across the application.

## Installation

### Run Locally

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.
4. Access the application at `http://localhost:5173`.

### Run Tests

- Run the program locally as the tests utilize `http://localhost:5173`.
- Run Cypress using `npx cypress run`.

## Author

Diogo Casal Novo
DCasalNovo
