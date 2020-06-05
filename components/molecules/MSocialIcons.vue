<template>

    <ul class="social-icons">

        <li class="social-icon">
            <a
                href="https://www.facebook.com/anjodaguardariopreto"
                target="_blank"
                rel="nooppener nofollow"
            >
                <img
                    src="@/assets/icon-facebook.svg"
                    alt="Facebook"
                >
            </a>
        </li>

        <!-- <li class="social-icon">
            <a href="https://twitter.com/novo_jornalismo" target="_blank" rel="nooppener nofollow">
                <AIcon name="Twitter">
                    <IconTwitter />
                </AIcon>
            </a>
        </li> -->

        <li class="social-icon">
            <a
                href="https://www.instagram.com/anjodaguardariopreto/"
                target="_blank"
                rel="nooppener nofollow"
            >
                <img
                    src="@/assets/icon-instagram.svg"
                    alt="Instagram"
                >
            </a>
        </li>

        <li class="social-icon">
            <a
                href="https://wa.me/5517997730213"
                target="_blank"
                rel="nooppener nofollow"
            >
                <img
                    src="@/assets/icon-whatsapp.svg"
                    alt="Whatsapp"
                >
            </a>
        </li>

    </ul>

</template>

<script>

export default {
    //
}
</script>

<style scoped>
/* social-icons */
.social-icons {
    display: none;
    margin: 0;
    padding: 0;
    list-style-type: none;
}
@media screen and (min-width: 600px) {
    .social-icons {
        display: grid;
        grid-template-columns: repeat(3, 24px);
        grid-template-rows: 24px;
        grid-column-gap: var(--space, 1.5rem);
        align-self: center;
        justify-content: center;
    }
}
@media screen and (min-width: 1200px) {
    .social-icons {
        grid-column-gap: 60px;
    }
}

/* social-icon */
@media screen and (min-width: 600px) {
    .social-icon {
        justify-self: end;
    }
}
</style>
