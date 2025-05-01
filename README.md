
![](imgs/ReadmeHeader.png)

# [HOMELESS PETS](https://homelesspets-70a83.web.app/)
[Presentación 25/04/2025](https://www.canva.com/design/DAGlpVrkK2c/GHTvgDYKoq8GquC2-molMQ/edit)

## [Backend (firebase)](https://console.firebase.google.com/u/0/project/homelesspets-70a83/overview?hl=es)



#### Configuracion del repositorio con Firebase(firebase init hosting:github)

Cuando habíamos comprobado que funcionaba el dominio ofrecido por firebase y que se recogían los datos correctamente en la base de datos, nos planteamos cómo se actualizaba la página. La cuestión es que debía actualizarse mediante la implementación de un repositorio en el proyecto de firebase. Esto lo hicimos a partir del comando _firebase init hosting:github_  en bash. 
```
C:\Users\alber\Desktop\paginasWeb\HomelessPets

Before we get started, keep in mind:

  * You are initializing within an existing Firebase project directory

? Are you ready to proceed? Yes

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

i  Using project homelesspets-70a83 (HomelessPets)

=== Hosting:github Setup

i  Detected a .git folder at C:\Users\alber\Desktop\paginasWeb\HomelessPets
i  Authorizing with GitHub to upload your service account to a GitHub repository's secrets store.

Visit this URL on this device to log in:
https://github.com/login/oauth/authorize?client_id=89cf50f02ac6aaed3484&state=837516986&redirect_uri=http%3A%2F%2Flocalhost%3A9005&scope=read%3Auser%20repo%20public_repo

Waiting for authentication...

+  Success! Logged into GitHub as SantanaOlmo

? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository) SantanaOlmo/HomelessPets

+  Created service account github-action-967388011 with Firebase Hosting admin permissions.
+  Uploaded service account JSON to GitHub as secret FIREBASE_SERVICE_ACCOUNT_HOMELESSPETS_70A83.
i  You can manage your secrets at https://github.com/SantanaOlmo/HomelessPets/settings/secrets.

? Set up the workflow to run a build script before every deploy? No
? GitHub workflow file for PR previews exists. Overwrite? firebase-hosting-pull-request.yml Yes

+  Created workflow file C:\Users\alber\Desktop\paginasWeb\HomelessPets\.github/workflows/firebase-hosting-pull-request.yml
? Set up automatic deployment to your site's live channel when a PR is merged? Yes
? What is the name of the GitHub branch associated with your site's live channel? main
? The GitHub workflow file for deploying to the live channel already exists. Overwrite? firebase-hosting-merge.yml Yes

+  Created workflow file C:\Users\alber\Desktop\paginasWeb\HomelessPets\.github/workflows/firebase-hosting-merge.yml

i  Action required: Visit this URL to revoke authorization for the Firebase CLI GitHub OAuth App:
https://github.com/settings/connections/applications/89cf50f02ac6aaed3484
i  Action required: Push any new workflow file(s) to your repo

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

+  Firebase initialization complete!

alber@AlbertoEstepa MINGW64 ~/Desktop/paginasWeb/HomelessPets (main)
$
```
