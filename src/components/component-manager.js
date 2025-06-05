class reuseableHeader extends HTMLElement {
    async connectedCallback() {
        const navbarFile = 'components/navbar.html';
        try {
            const response = await fetch(navbarFile);
            if(!response.ok) throw new Error('Network response was not ok')

            const content = await response.text();
            this.innerHTML = content;
        } catch(error) {
            console.error('Failed to load html file:', error);
            this.innerHTML = '<p>Error loading content</p>'
        }
    }
}
class reuseableFooter extends HTMLElement {
    async connectedCallback() {
        const navbarFile = 'components/footer.html';
        try {
            const response = await fetch(navbarFile);
            if(!response.ok) throw new Error('Network response was not ok')

            const content = await response.text();
            this.innerHTML = content;
        } catch(error) {
            console.error('Failed to load html file:', error);
            this.innerHTML = '<p>Error loading content</p>'
        }
    }
}
customElements.define('nav-bar', reuseableHeader)
customElements.define('footer-bar', reuseableFooter)