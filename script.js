//img za display
const images =[
    'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
    'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1579298245158-33e8f568f7d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80',
    'https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1611417833111-284ac6508488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    'https://images.unsplash.com/photo-1583410742325-7163c1276e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
    'https://images.unsplash.com/photo-1560196327-cca0a731441b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1548003724-7268ce19e487?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1576608583800-2dea5261c7ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1585843736857-bd7438e55c67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
]

//display slik

for(const idx in images){
    const img = document.createElement('img')
    img.src = images[idx];
    img.alt = "nike image"

    //like button
    const likeBtn = document.createElement('span')
    likeBtn.classList.add('like-btn')
    likeBtn.innerHTML = '&#10084' //koda za like gumb

    const imageBlock = document.createElement('div')
    imageBlock.classList.add('image-block')
    imageBlock.append(img)
    imageBlock.append(likeBtn)

    const gallery = document.getElementById("gallery")
    gallery.append(imageBlock)
}

//dark mode

const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', function(event){
    toggleTheme()
})

let isDark = false

function toggleTheme(){
    isDark = !isDark
    const newBackGroundColor = isDark ? '#121212' : '#ffffff' 
    const newThemeButtonText = isDark ? "🌞" : "🌙"
    const newHeadingColor = isDark ? '#eeeeee' : '#121212'

    document.body.style.backgroundColor = newBackGroundColor
    themeBtn.textContent = newThemeButtonText
    const heading = document.querySelector('.heading')
    heading.style.color = newHeadingColor
}

//like button

document.body.addEventListener('click', function(event){
    if(event.target.className === 'like-btn'){
        event.target.style.color = '#d2042d'
    }
})