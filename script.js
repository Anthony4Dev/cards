const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        remoteActiveClasses()
        panel.classList.add('active')
    })
})

function remoteActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}