export const Botoes = ({name, link}) => {
    return `
            <div class="d-grid gap-2">
            <button class="btn btn-outline-dark p-2" type="button"><a href="${link}" target="_blank">${name}</a></button>
        </div>
        `
}
    
   