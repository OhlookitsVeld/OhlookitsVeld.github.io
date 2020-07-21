/**
 * A list of my current maintained/developed projects
 * @type {Project[]}
 */
const projects = [
    {
        description: 'Misaki is a Discord bot coded in JavaScript with discord.js using the Commando command framework. With over 300 commands, she is one of the most feature-rich bots out there.',
        language: 'JavaScript',
        image: 'https://i.imgur.com/pwGta08.png',
        links: [
            {
                icon: ['fab', 'github'],
                url: 'https://github.com/MisakiDiscord/Misaki'
            },
            {
                icon: ['fas', 'home'],
                url: 'https://ohlookitsveld.xyz/misaki'
            }
        ],
        name: 'Misaki',
        role: 'Lead Dev'
    },
];

/**
 * Function to implement a DOM element to the body
 * @param {string} type The type of element to use
 * @param {{ [x: string]: any }} [attributes] Any attributes to add
 */
function createElement(type, attributes = {}) {
    const element = document.createElement(type);
    if (Object.keys(attributes).length > 0) {
        for (const [name, attr] of Object.entries(attributes)) {
            element.setAttribute(name, attr);
        }
    }

    return element;
}

/**
 * Create a Bulma card
 * @param {Project} project The project
 */
function createCard(project) {
    // This feels redundant but you'll see!
    const card = createElement('div', {
        class: 'card'
    });

    const image = createElement('div', {
        class: 'card-image'
    });

    const figure = createElement('figure', {
        class: 'image is-4by3'
    });

    const projectImage = createElement('img', {
        src: project.image,
        alt: project.name
    });

    // Append the image
    figure.appendChild(projectImage);
    image.appendChild(figure);

    // Make the card content
    const content = createElement('div', { class: 'card-content' });
    const media = createElement('div', { class: 'media' });
    const mediaLeft = createElement('div', { class: 'media-left' });
    const mediaFigure = createElement('figure', { class: 'image is-48x48' });
    const mediaImage = createElement('img', {
        class: 'round',
        src: project.image,
        alt: project.name
    });
    const mediaContent = createElement('div', { class: 'media-content' });

    mediaContent.innerHTML = `
    <p class='title is-4'>${project.name}</p>
    <p class='subtitle is-6'>
      Language: ${project.language}
      <br />
      Role: ${project.role}
    </p>
  `;

    mediaFigure.appendChild(mediaImage);
    mediaLeft.appendChild(mediaFigure);
    media.appendChild(mediaLeft);
    media.appendChild(mediaContent);

    const cardContent = createElement('div', { class: 'content' });
    cardContent.innerHTML = `${project.description}<br /><br />`;

    if (project.links.length) {
        for (const link of project.links) {
            cardContent.innerHTML += `<a class='hoverable' href='${link.url}'><i class='${link.icon[0]} fa-${link.icon[1]}'></i></a>`;
        }
    }

    content.appendChild(media);
    content.appendChild(cardContent);
    card.appendChild(content);

    return card;
}

const parentElement = document.getElementById('projects');
if (parentElement === null) {
    console.log('Unable to find parent element "#projects"');
} else {
    for (const project of projects) {
        const id = project
            .name
            .toLowerCase()
            .replace(/\s/g, '-');

        const otherParent = createElement('div', {
            class: 'column is-3',
            id: `project-${id}`
        });

        const card = createCard(project);
        otherParent.appendChild(card);
        parentElement.appendChild(otherParent);
    }
}

/**
 * @typedef {object} Project
 * @prop {string} description The description of the project
 * @prop {string} language The language the project uses
 * @prop {string} image The project's image
 * @prop {ProjectLink[]} links A list of links to provide
 * @prop {string} name The project's name
 * @prop {string} role The role I partake in
 *
 * @typedef {object} ProjectLink
 * @prop {['fab' | 'fas', string]} icon The icon to display from Font Awesome
 * @prop {string} url The URL to redirect to
 */