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