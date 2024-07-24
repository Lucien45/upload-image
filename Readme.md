<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- More detail -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
<!-- End More detail -->

# Upload image in Django Rest Framework and React js

## Steps for Running Project

### Requirements

`Python, Node, git`

### Clone the repository:

- Create a empty folder and `cd` into that folder.
- Type the following command to clone project in same directory.

```bash
git clone https://github.com/Lucien45/upload-image.git
```

## Backend

### 1. Go to the root folder and perform the following commands:

`cd backend/`

### 2. Create and activate the virtual environment

```bash
python -m venv .env
.env\Scripts\activate
```

> If their is any error activating virtual env, please google search it for your system or try 
`.env\bin\activate` or `source .env/bin/activate`

### 3. Install required packages

```bash
pip install -r requirements.txt
```

### 4. Run the server

```bash
python manage.py migrate
python manage.py runserver
```

## Frontend

- Head back to the root folder
- Enter in `cd frontend/`

### 1. Installing packages

```bash
yarn
```

<details><summary>If you don't have yarn installed</summary>
<p>

```bash
npm i
```

> Remove **yarn.lock** as you will already have **package.lock**

</p>
</details>

### 2. Run the application

```bash
yarn dev # OR npm run dev
```

> Make sure both frontend and backend are running.

## Reinitailize git repository

- Delete `.git` folder in project root
  > Make sure you turn on the "Show hidden files, folders and disks" option.
- `git init`