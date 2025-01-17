# f3project
Responsive Webpage with Navbar, Layout, and Screen Size Handling

This project demonstrates the creation of a responsive webpage with a fixed navbar, collapsible left menu, a main content area, a right-side panel, and a footer. The page also includes a JavaScript function that adjusts the page's scaling based on the screen width.

*Features

1. Fixed Navbar-
   - The navbar remains fixed at the top of the page when scrolling.

2. Three Sections-
   - Left Menu: A collapsible menu on the left side of the page.
   - Main Content: The primary content area in the center of the page.
   - Right-Side Panel: A panel located on the right side of the page.

3. Footer-
   - A footer is placed at the bottom of the page.

4. Responsive Design-
   - JavaScript function to scale the page according to screen width:
     - Screen width between 992px and 1600px**: Shrink page to 90%.
     - Screen width between 700px and 767px**: Shrink page to 80%.
     - Screen width between 600px and 700px**: Shrink page to 75%.
     - Screen width less than or equal to 600px**: Shrink page to 50%.

#Project Structure

responsive-webpage/ │ ├── index.html 
# HTML file with structure and content ├── style.css 
# CSS file for styling ├── script.js 
# JavaScript file for functionality 
└── README.md # This README file


Setup Instructions

Step 1: Clone the repository

Clone this repository to your local machine using the following command:
git clone https://github.com/yourusername/responsive-webpage.git
Step 2: Open the project
Open the index.html file in any web browser to view the webpage.

Step 3: Customizing
If you would like to make custom modifications:

CSS: Modify style.css to change the appearance of the webpage.
JavaScript: Modify script.js to update the scaling function or other interactivity.
HTML Structure
The webpage is structured as follows:

Navbar: A fixed navbar at the top of the page.
Left Menu: A collapsible menu on the left side.
Main Content Area: The main section of the page.
Right Panel: A right-side panel.
Footer: The footer section.
CSS Styling
The CSS file styles the page layout, including the navbar, sections, footer, and responsiveness. It uses Flexbox to create a responsive layout where sections adjust based on the screen size.

Key CSS Features:

Fixed navbar: Ensures the navbar stays at the top of the page when scrolling.
Collapsible left menu: This is handled with CSS transitions and JavaScript.
Media Queries: Used for responsive behavior, including layout adjustments and scaling.
JavaScript Function
The JavaScript function, located in script.js, automatically adjusts the page's scaling when the screen width falls within specified ranges. The function listens for window resizing events and applies the necessary transformations.

