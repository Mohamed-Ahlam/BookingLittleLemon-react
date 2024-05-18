# Setting Up Your Project:

# VSCode Extensions to Add (Preliminary Steps):

## Step 1: Setup the ES7+ React/Redux/GraphQL/React-Native VS Code extension
    ES7+ React/Redux/GraphQL/React-Native VS Code extension
- It provides quick JavaScript snippets to help you code faster in your React and GraphQL-based projects.
. This extension provides you with JavaScript and React/Redux snippets in ES7+ with Babel plugin features for VS Code.

## Step 2: Setup the Auto Rename Tag VS Code extension
    Auto Rename Tag VS Code extension
. This extension makes it possible to automatically rename the paired HTML/XML tag as Visual Studio IDE does.

## Step 3: Setup the Trailing Spaces VS Code extension
    Trailing Spaces VS Code extension
. This extension allows you to highlight and delete trailing spaces. It’s also useful when working with Git to help you spot accidental whitespace addictions more easily and prevent unnecessary commits.

# Prepare Your Development Environment:

Ensure you have the correct version of Node.js and npm installed on your machine

# Set Up the React Project:
- Use the create-react-app npm package to build a boilerplate React app
    - This minimal starter app serves as the foundation for your capstone project

# Initialize and Manage Git:
- Ensure your React project created with create-react-app includes a local Git setup and an initial commit
- Review basic Git concepts such as file tracking, the staging area, setting up a repository, and using commands like git add, git commit, git push, git log, and git branch
- Regularly commit code changes and push them to your remote Git repository to keep your local and remote repositories in sync

# Start the Project:
- Maintain synchronization between your remote origin and local folder, ensuring the project is always ready for more contributors if needed.

# Parts of the Project:

## IMPORTANT Book a Reservation Section: 
The primary objective of this project is to develop a reservation flow in your React project. Most of your time and effort should be dedicated to creating a reservation system for the restaurant, guided by your Figma design.

## About Little Lemon Section: 
Create a dedicated section to tell the story of Little Lemon, including its history, mission, and values. This section will help personalize the brand and connect with customers on an emotional level.

## Menu page
- Highlights and Specials: 
    Implement a dynamic feature that showcases daily specials, seasonal highlights, and promotional events. This can include an interactive calendar or a special offers page that updates regularly to keep the content fresh and engaging.

    Suggestions for Stretch Goals: This can include an interactive calendar or a special offers page that updates regularly to keep the content fresh and engaging.

- Descriptions and Photos of Dishes: 
    Enhance the menu pages with detailed descriptions and high-quality photographs of each dish. This will help to visually entice and inform customers about the variety and quality of the food offered, encouraging more reservations.

## Navigation Bar: 
- Design a user-friendly and intuitive navigation bar that improves the overall user navigation experience. Ensure that it includes links to all critical sections of the website, such as the Home page, Menu, About Us, Reservations, and Contact Information.

## Footer: 
- Develop a comprehensive footer that includes additional information and resources, such as contact details, social media links, opening hours, and quick links to popular pages. This footer should also maintain aesthetic alignment with the rest of the website's design.

## Testimonials: 
- Incorporate a testimonials section where customers can share their dining experiences. This will serve as social proof, boosting credibility and attracting new customers. The testimonials could be displayed through a sliding carousel or a dedicated testimonial page.

# Checklist:
## Establish meta tags and Open Graph protocol data
- Create a meta description for your project: As a reminder, a meta description provides a brief overview of the content on a specific page
    -   <meta name="description" content="Page description here"/>

- Create a og:title for your project: As a reminder, the og:title meta tag allows you to assign a title to your shared link or content
    -   <meta name="og:title" content="One Place Fishing"/>

- Create a og:description for your project: As a reminder, the og:title meta tag allows you to assign a title to your shared link or content
        - <meta name="og:description" content="some description here"/>

- Create a og:image for your project: As a reminder, the og:description meta tag is used to provide a description that typically follows a title
        - <meta name="og:image" content="https://example.com/pic.jpg"/>
        
# Include CSS Styling:
## Implement a Reusable Layout: 
- Code a reusable grid or flexbox layout for your website

## Mobile Layout Check: 
- Use browser developer tools to verify that your website layouts correctly on mobile devices.

## Desktop Layout Check: 
- Use browser developer tools to ensure that your website layouts correctly on desktop devices.

# Match styling to your Figma File: 
- Make sure that the visual elements of the website correspond to the Figma design

# Create Holistic Project Components: 

## Develop the Initial Version of Your Homepage Components: 
    Create the first version of the components for your homepage.

## Style All Homepage Components: 
    Apply styles to all the components on the homepage to ensure a cohesive look.

## Establish Routing for Various Pages: 
    Set up routes to navigate between different pages on your website.

## Utilize the Appropriate HTML5 Tags:
     Make sure to use the correct HTML5 tags to enhance the semantic structure of your webpage.
## Replace Redundant Div Tags with React Fragments: 
    Use React fragments instead of div tags where they are redundant to streamline your code.

## Lift State Up: 
    Move state to a higher component level (For additional guidance, see "Adding table booking state").
    Elevate the available times state to the Main component.

## Pass State Down: 
    Send the state down to the Bookings and BookingForm components.

## Implement Reducer: 
    Modify the available times to be managed using a reducer.

## Use ARIA attributes where required


# Working with the API: 
## Add a table showing the data from the bookingData array: 
    For more information on how to do this, you can use the information found at “Connecting the bookings page to the API”

## Update the addition of new bookings to the existing data:
     For more information on how to do this, you can use the information found at “Submitting the new booking page to the API”

## Update the data using local storage: 
    For more information on how to do this, you can use the information found at “Submitting the new booking page to the API”

## Write unit tests for reading from and writing to local storage in React:
     For more information on how to do this, you can use the information found at “Update the unit tests for the API queries” - we will also discuss this in class

# Improve the UX of the Project: 

## Implement client-side validation for the date input, the time input, the number input, and the select form element: 
    For more information on how to do this, you can use the information found at “Adding form validation” 

## Add unit tests for the form input and submission validation: 
    For more information on how to do this, you can use the information found at “Adding unit tests for the form validation and submission”

# Address accessibility needs:

- Improve the accessibility of your app by enhancing the semantic markup used
- Use ARIA attributes
- Label the forms



# Project Criteria:

- UX/UI Design and Implementation: Your work should follow your previously designed “Book a Reservation” Figma file you created in Course 7, and correctly implement the user experience and user interface

- Accessibility: Ensure that appropriate accessibility tags are applied throughout the web application to support users with disabilities

- Unit Tests: Your submission should include unit tests to verify the functionality of the web application

- Booking Form Functionality and Validation: The booking form within your web app should be fully functional and include proper validation to handle user input correctly

- Web App Semantics and Responsiveness: The web application should use semantic HTML where appropriate and be responsive across different devices and screen sizes

- Git Repository Commit: You must commit your project to a Git repository, demonstrating your version control skills and allowing others to review your code changes