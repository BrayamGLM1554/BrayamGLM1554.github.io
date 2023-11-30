'use strict';

const galery = document.querySelector('.galery');
const feed = document.querySelector('.conetedor-galery');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const token = 'IGQWRNTEl0OXNfM0V4NlJvVk0yRExJNm5RNnJOUC0tN3VwUjI4aWpXZA05FY1lOcnhfMVNUTnlYWWlVT2FISGRudUVPOEtFUHVELUFPYkE2MDVrdmRzcE54RmViRWNtYjl6ZATBFWVF1aEhEdHgxOTZAmRVkxNEItd0UZD';

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
