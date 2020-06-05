
# PWA - Associação Anjo da Guarda

Associação Anjos da Guarda is migrating you old site (https://anjodaguardaprojeto.wixsite.com/anjo) to a new modern PWA app: https://projetoanjodaguarda.org

## 🎉 Getting Started

**How to run the project**

1. 👯‍♂️ Clone the repository locally and cd into the directory.

```bash
git clone https://github.com/associacao-anjo-da-guarda/anjo-da-guarda.git

cd anjo-da-guarda
```

2. 📦 Install dependencies.

```bash
yarn install
```

3. 🏗 Run the project for local dev. This will start a hot-reloading server at `localhost:3000`.

```bash
yarn dev
```

4. 🌌 Build the app for server-side rendered deployment. See more about **Universal SSR** in the [Nuxt.js docs](https://nuxtjs.org/guide#server-rendered-universal-ssr-).

```bash
yarn build

# And to serve that deployment...
yarn start
```

5. ⚡️ Generate a fully pre-rendered static site. See more [in the docs](https://nuxtjs.org/guide#static-generated-pre-rendering-).

```bash
yarn generate
```

> This projet is using Netlify CMS (netlifycms.org/).

## 🖋 Activating Netlify CMS

This project comes with Netlify CMS. To use Netlify CMS:

### 🔏 Authenticating with Netlify Identity

1. Deploy to Netlify at least once.
2. Go to **Settings > Identity**, and select **Enable Identity service**.
3. Once enabled, select **Settings and usage**, and scroll down to **Registration preferences**. You can set this to either **Open** or **Invite only**, but usually **Invite only** is your best bet for a personal site.
4. If you don't want to create an account, or would like to use an external provider such as GitHub or Google, you can enable those services under **External providers**.
5. Scroll down to **Services** and click **Enable Git Gateway**.

### 🔏 Media configuration

We are using Uploadcare to handle image hosting: [https://uploadcare.com/](https://uploadcare.com/)

You can read this docs to setup uploadcare to your own: [https://www.netlifycms.org/docs/uploadcare/](https://www.netlifycms.org/docs/uploadcare/)

### 🔐 Local Setup

1. In your browser, navigate to `localhost:3000/admin`.
2. Enter the Netlify URL of your site when prompted. (when using a different domainname host, use be sure to use the URL as provided by Netlify, not your domain host)
3. Login with the account you created or one of the external providers, if you enabled them.

## 💁‍♀️ Questions?

Contact us on linkedin: 

Paulo Moreira: [https://www.linkedin.com/in/pmoreiralk/](https://www.linkedin.com/in/pmoreiralk/)
Guilherme Carneiro: [https://www.linkedin.com/in/guilherme-soares-carneiro/](https://www.linkedin.com/in/guilherme-soares-carneiro/)
