'use strict';

const galery = document.querySelector('.galery');
const feed = document.querySelector('.conetedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const token = 'IGQWRPN1c5dDFUcE1YSk1hZAktZAWnhqX0RjMmZAmblNJX25nbVZAoUHBOWHdZAV3k4cWYzYzBCS2JVR1FTRjFVTmo2Y3RNTlkzN3dIQVVENGNxcGtxMGx1RnpIYnp4ZAHNrS2xRSnQzaFJ2S1ZAVcENhb01wcUswQUhoMk0ZD';

const url = `https://graph.instagram.com/me/media?fields=thumbnail_url,media_url,caption,permalink&limit=80&access_token=${token}`;

fetch(url)
.then(res => res.json())
.then(data => CrearHtml(data.data))

function CrearHtml(data) {
    for(const img of data){
        galery.innerHTML += `
        <div class="image overflow">
        <img loading="lazy" src="${img.media_url}" alt="">
        <div class="opacity-hover">
            <a href="${img.permalink}" class="caption">
                <p>
                    ${img.caption}
                </p>
            </a>
        </div>
    </div>
        `;
    }
}
