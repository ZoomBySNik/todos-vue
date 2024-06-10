export default {
    mounted(el){
        if (el.tagName.toLowerCase() === 'input') {
            el.focus()
        } else {
            el.find('input').focus()
        }
    },
    name: 'focus'
}