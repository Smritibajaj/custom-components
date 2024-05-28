README
This repository holds all common UI components used across binary products. The components are build upon material UI

How do I set up the repo locally ?
clone the repo to your local system.
Run npm install to install dependencies.
Run npm run storybook to run the storybook locally.
Run npm run build to make the build of the package.



Theme
src/theme contains a common binary theme that will be used to style all components.
Avoid theme overrides at component unless absolutely necessary. (Confirm with design team before overriding).
Avoid changing the values defined in the theme unless it is asked and approved by the design team.
Adding new colors
To add a new color, use the src/theme/colors/constants.ts file.
Add the key value pair in the baseColor variable with the desired name and its base hex code. Make sure that the keys are alphabetically ordered.
Make sure that the first character of the name is unique and not colliding with the other keys.
Adding new shade of the color
To add a new shade of the color, use the src/theme/colors/constants.ts file.
Add the new color shade number in the colorShades array. make sure that the shade is not repeated and also the numbers are in ascending order. Do not add 0 and 100 in this array
Logic to build multiple shades of the base color is pre-defined. DO NOT CHANGE THIS LOGIC, THIS WILL CHANGE ALL THE HEX CODES.
Your newly added color will be available in the theme as {first_character_of_color_name}-{color_shade} while styling your component. eg: if the new color name is random it will be available in the color palette as R-10, R-20, R-30, R-40, R-50 etc.



Adding new components ( Mui component or any custom component using some external library )
Create a new folder inside src/components.
Name the folder same as the component name eg: Accordion.
The folder should contain index.tsx, {Component_name}.tsx (this file name should be same as the folder name), types.ts (optional) file.
index.tsx file should only be used for exporting the components and its utility functions (if any). It should not hold any logic or components.
Add a constants file or utility file (eg: loadOptions for async select) if necessary.
Adding Stories for the new components
Create a {component_name}.stories.tsx file inside your component folder.
{component_name}.stories.tsx file should be present for all new components that are created.
Make sure to add controls in your component story for the props that has to passed to the components so that we can see how the component is going to behave in the target applications.



Styling your component ( Mui Component )
Read these links before starting:
https://mui.com/material-ui/customization/theming/
https://mui.com/material-ui/customization/theme-components/
To style the Mui components, use the theme folder to style them out of the box.
Create a folder inside src/theme/overrides. The folder name should be same as your component name
Each folder should contain a index.ts|tsx, Mui{component_name}.ts|tsx, types.ts (optional), {component_name}.d.ts (optional - this file is to disable or change the props value provided by Mui and add your own custom props or variants of the component as per the need).
Any common type that has to be used for multiple components should be placed inside src/theme/overrides/components/types.ts file.
For form fields, reuse the FormControl, FormControlLabel, FormGroup, FormLabel, Input, InputBase, InputLabel instead of creating a new files for the same.
Try to reuse these styles to compose new styles instead of creating new styles for all the components were needed.
Use this override to provide default props to your components.



Styling your component ( Custom Component using external library )
We are not using styled-components for styling our custom components. Mui styled function is used for styling the components
To style the Custom components, create a styles.ts|tsx file inside your component folder src/components/{component_name}.
Use styled function provided by Mui to style your components. This is not the styled-components styled function.



Utilities
For utility functions create a file inside src/utils folder and export them from the src/utils/index.ts file.
For utility types i.e custom generics and other types which might be usefule, place them inside src/utils/utilityTypes.ts file.



Who do I talk to in case of any doubts or queries?
Repo owner or admin: Snehal Seth, Pushpendra Yadav, Alok Parikh
Other community or team contact



Steps to get your code merged
Raise a PR after you are done with the new component or changes in the existing components.
Make sure the test cases are passed before raising the PR. If any test case is failing do fix the issue in the component ot the test case.
Add Snehal Seth, Pushpendra Yadav as reviewers in the PR.
PR WILL ONLY BE MERGED WHEN THERE IS ATLEAST ONE APPROVAL FROM THE ABOVE MENTIONED REVIEWERS.
PR WILL ONLY BE MERGED WHEN THERE IS A STORY FILE IN THE NEWLY CREATED COMPONENT.
PR WILL ONLY BE MERGED WHEN THERE IS A TEST FILE IN THE NEWLY CREATED COMPONENT.( OPtional till cypress integration is done )
Run Cypress Test
npm run test