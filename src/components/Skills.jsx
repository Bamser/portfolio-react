import htmlSvg from '../images/html.svg'
import cssSvg from '../images/css.svg'
import jsSvg from '../images/javascript.svg'
import figmaSvg from '../images/figma.svg'
import sassSvg from '../images/sass.svg'
import gitSvg from '../images/git.svg'
import gulpSvg from '../images/gulp.svg'
import bootstrapSvg from '../images/bootstrap.svg'
import tailwindSvg from '../images/tailwind.svg'
export const Skills = () => {
  return (
    <section className='skills' id='skills'>
      <div className=' container'>
        <div className='skills__discription'>
          <h2 className='skills__title title title__animation'>Skills</h2>
        </div>
        <div className='skills__items'>
          <div className='skills__item'>
            <div className='skills__item-img' title='HTML'>
              <img src={htmlSvg} alt='html' />
            </div>
          </div>
          <div className='skills__item'>
            <div className='skills__item-img' title='CSS'>
              <img src={cssSvg} alt='css' />
            </div>
          </div>
          <div className='skills__item'>
            <div className='skills__item-img' title='JavaScript'>
              <img src={jsSvg} alt='javascript' />
            </div>
          </div>
          <div className='skills__item'>
            <div className='skills__item-img' title='Figma'>
              <img src={figmaSvg} alt='figma' />
            </div>
          </div>
          <div className='skills__item'>
            <div className='skills__item-img' title='SCSS'>
              <img src={sassSvg} alt='sass' />
            </div>
          </div>
          <div className='skills__item '>
            <div className='skills__item-img' title='Git'>
              <img src={gitSvg} alt='git' />
            </div>
          </div>
          <div className='skills__item '>
            <div className='skills__item-img' title='Git'>
              <img src={gulpSvg} alt='gulp' />
            </div>
          </div>
          <div className='skills__item '>
            <div className='skills__item-img' title='Bootstrap'>
              <img src={bootstrapSvg} alt='bootstrap' />
            </div>
          </div>
          <div className='skills__item '>
            <div className='skills__item-img' title='Tailwind'>
              <img src={tailwindSvg} alt='tailwind' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
