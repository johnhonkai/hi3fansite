document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.toptab');
    const tabContents = document.querySelectorAll('.toptab-content');
    
    // Helper function to set active tab
    function setActiveTab(tabName) {
      // Remove 'active' class from all tabs
      tabs.forEach(tab => tab.classList.remove('active'));
      
      // Hide all tab contents
      tabContents.forEach(content => content.classList.add('hidden'));
  
      // Find and activate the correct tab and content
      const activeTab = document.querySelector(`.toptab[data-tab="${tabName}"]`);
      const activeContent = document.getElementById(tabName);
  
      if (activeTab && activeContent) {
        activeTab.classList.add('active');
        activeContent.classList.remove('hidden');
      }
    }
  
    // Get the 'tab' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');  // Changed 'toptab' to 'tab' to match query string
  
    // Default to 'taboverview' if no tab param is found
    const initialTab = tabParam ? tabParam.toLowerCase() : 'taboverview';  // Ensure 'taboverview' matches your actual tab ID
    setActiveTab(initialTab);
  
    // Add click event listener to each tab
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        setActiveTab(tabName);
      });
    });
  });
  