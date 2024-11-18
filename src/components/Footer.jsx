import githubSvg from '../images/github.svg'
import telegramSvg from '../images/telegram.svg'
import whatsappSvg from '../images/whatsapp.svg'
import emailSvg from '../images/email.svg'

export const Footer = () => {
  return (
    <section className='contacts' id='contacts'>
      <h2 className='contacts__title title title__animation'>Contacts</h2>
      <div className='container'>
        <div className='contacts__list'>
          <div className='contacts__item'>
            <a target='_blank' title='Github' href='https://github.com/Bamser'>
              <img src={githubSvg} alt='github.svg' />
            </a>
          </div>
          <div className='contacts__item'>
            <a
              target='_blank'
              title='telegram'
              href='https://telegram.me/bamserok'
            >
              <img src={telegramSvg} alt='telegram.svg' />
            </a>
          </div>
          <div className='contacts__item'>
            <a
              target='_blank'
              title='whatsapp'
              href='https://wa.me/79262890901'
            >
              <img src={whatsappSvg} alt='whatsapp.svg' />
            </a>
          </div>
          <div className='contacts__item'>
            <a title='email' href='mailto:bamser@mail.ru'>
              <img src={emailSvg} alt='email.svg' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
