const loadContacts = () => {
  const profile = [
    {
      name: 'Abdel Hakem',
      classImage: 'https://avatars.githubusercontent.com/u/114990830?v=4',
      githubLink: 'https://github.com/abdozayan12',
      linkedLink: 'https://www.linkedin.com/in/abdo-zayan-39b073128/',
      twitterLink: 'https://twitter.com/zayan_abdo',
      instagramLink: '',
    },
    {
      name: 'Ichsan Sandy',
      classImage: 'https://avatars.githubusercontent.com/u/108980933?v=4',
      githubLink: 'https://github.com/ichsansandy',
      linkedLink: 'https://www.linkedin.com/in/ichsans/',
      twitterLink: '',
      instagramLink: 'https://instagram.com/ichsans__',
    },
  ];

  function loopingContacts(contact) {
    return `<div class="card contact-card medium-rounded">
                  <img class="contact-image" src="${contact.classImage}"/>
                  <div class="contact-name text-center">${contact.name}</div>
                  <div class="contact-details">
                    <a class="contact-link" target="_blank" href="${contact.githubLink}">
                      <i class="fab fa-github-square fa-fw fa-2xl"></i>
                    </a>
                    <a class="contact-link" target="_blank" href="${contact.linkedLink}">
                      <i class="fab fa-linkedin fa-fw fa-2xl"></i>
                    </a>
${
  contact.twitterLink === ''
    ? `<a class="contact-link" target="_blank" href="${contact.instagramLink}">
            <i class="fab fa-instagram-square fa-fw fa-2xl"></i>
        </a>`
    : `<a class="contact-link" target="_blank" href="${contact.twitterLink}">
            <i class="fab fa-twitter-square fa-fw fa-2xl"></i>
        </a>`
}
                  </div>
                </div>`;
  }

  const contactWrapper = document.querySelector('.contact-wrapper');

  contactWrapper.innerHTML = profile.map((contact) => loopingContacts(contact)).join('');
};

export default loadContacts;
