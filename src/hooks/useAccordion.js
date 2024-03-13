export default function useAccordion() {
  const checkActiveAccordion = (accordionId) => {
    const accordion = document.querySelector(`#${accordionId}`)

    const accordionItems = accordion.querySelectorAll('.accordion-item')

    accordionItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        item.classList.toggle('accordion-active')

        removeClass(index)
      })
    })
    const removeClass = (clickedIndex) => {
      accordionItems.forEach((item, index) => {
        if (clickedIndex !== index) {
          item.classList.remove('accordion-active')
        }
      })
    }
  }

  return { checkActiveAccordion }
}
