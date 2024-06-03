class Faqs extends HTMLElement {

  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  loadData () {
    this.data = [
      {
        "question": "¿Qué es un webcomponent?",
        "answer": "Es un componente que puedes usar en cualquier web"
      },
      {
        "question": "¿Qué es un shadow dom?",
        "answer": "Es un dom encapsulado"
      },
      {
        "question": "¿Qué es un template?",
        "answer": "Es un fragmento de html"
      }
    ]
  }

  render () {
    
    this.shadow.innerHTML =
    /*html*/`
    <style>

      .faqs {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .faq {
        border: 1px solid #dddddd;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0.5rem;
      }

      h2 {
        margin: 0;
      }

      p {
        margin: 0;
      }
      
    </style>
  
    <div class="faqs">
    </div>
    `

    // Podemos crear elementos html desde cero con javascript y añadirlos al shadow dom 
    // con appendChild

    this.data.forEach(faq => {

      const faqsContainer = this.shadow.querySelector('.faqs')
      // this.shadow.querySelector('.faqs') "para selecionar un elemento"
      const faqContainer = document.createElement('div')
      // document.createElement('div') "para crear un elemento"
      faqContainer.classList.add('faq')
      // faqContainer.classList.add('faq') "nombre de la clase que quieres aregar"
      const question = document.createElement('h2')
      question.textContent = faq.question
      faqContainer.appendChild(question)
      // faqContainer.appendChild(question) "para meteer un elemento dentro de otro"
     
      const answer = document.createElement('p')
      answer.textContent = faq.answer
      faqContainer.appendChild(answer)

      faqsContainer.appendChild(faqContainer)
    })
  }
}

customElements.define('faqs-component', Faqs);