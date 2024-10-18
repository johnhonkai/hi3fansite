// Object to store tab data for each version
const versionTabs = {
    '7.6': [
        { name: "Youtube Overview", url: 'https://www.youtube.com/embed/_RcBpfMe5AQ?controls=1 ' },
        { name: 'Patch Note', url: 'https://rentry.co/76log' },
        { name: 'Jovial Deception', url: 'https://rentry.co/songgyatt' },
        { name: 'JD Gears', url: 'https://rentry.co/songgears' },
        { name: 'Serapeum', url: 'https://rentry.co/seraasop/' },
        { name: 'Elysian Realm', url: 'https://rentry.co/er_76' }
    ],
    '7.7': [
        { name: "Youtube Overview", url: 'https://www.youtube.com/embed/AIOC8Nk04oE?controls=1 ' },
        { name: "Schicksal's Imperative", url: 'https://rentry.co/terimimimi' },
        { name: 'Simp Weapon', url: 'https://rentry.co/teriblade/' },
        { name: 'Elysian Realm', url: 'https://rentry.co/er77' }
    ],
    '7.8': [
        { name: "Youtube Overview", url: 'https://www.youtube.com/embed/KOJk-deNeVU?controls=1 ' },
        { name: 'Patch Notes', url: 'https://rentry.co/78log' },
        { name: 'Vita Valk', url: 'https://rentry.co/vitagundam' },
        { name: 'Vita Gears', url: 'https://rentry.co/vitagears' },
        { name: 'Kiana Divine Key', url: 'https://rentry.co/kianareeves' },
        { name: 'Elysian Realm', url: 'https://rentry.co/78er' }
    ],

    '7.9': [
        { name: "Patch Note", url: 'https://rentry.co/79log' },
        { name: "Sparkle", url: 'https://rentry.co/asdadadas' },
        { name: "Sparkle Gears", url: 'https://rentry.co/sporklegun' },

    ]
};

function showTabs(version) {
    var tabsContainer = document.getElementById('betatabsContainer');
    var tabContentContainer = document.getElementById('betatabContentContainer');

    // Clear previous tabs and content
    tabsContainer.innerHTML = '';
    tabContentContainer.innerHTML = '';

    if (version && versionTabs[version]) {
        tabsContainer.style.display = 'block';

        // Generate new tabs
        versionTabs[version].forEach((tab, index) => {
            // Create tab button
            var tabButton = document.createElement('button');
            tabButton.className = 'betatablinks';
            tabButton.textContent = tab.name;
            tabButton.onclick = function(event) {
                openTab(event, 'Tab' + index, tab.url); // Pass the URL to load iframe dynamically
            };
            tabsContainer.appendChild(tabButton);

            // Create tab content container
            var tabContent = document.createElement('div');
            tabContent.id = 'Tab' + index;
            tabContent.className = 'betatabcontent';
            tabContent.style.display = 'none';

            tabContentContainer.appendChild(tabContent);
        });

        // Automatically open the first tab if exists
        if (versionTabs[version].length > 0) {
            openTab(null, 'Tab0', versionTabs[version][0].url);
        }
    } else {
        tabsContainer.style.display = 'none';
    }
}

function openTab(evt, tabName, url) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('betatabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('betatablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    document.getElementById(tabName).style.display = 'block';
    
    // Load the iframe dynamically when tab is clicked
    var iframe = document.getElementById(tabName).querySelector('iframe');
    if (!iframe) {  // Check if iframe is already created
        iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = '100%';
        iframe.height = '900px';
        iframe.frameBorder = '0';
        document.getElementById(tabName).appendChild(iframe);
    }

    if (evt) {
        evt.currentTarget.className += ' active';
    }
}
