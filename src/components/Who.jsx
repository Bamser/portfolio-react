import myPhoto from '../images/Myphoto.webp'
export const Who = () => {
  return (
    <div className='who'>
      <div className='who__img'>
        <img src={myPhoto} alt='myPhoto' />
      </div>
      <div className='who__ami'>
        <h1 className='who__ami-name title'>Evgeny Roslyakov</h1>
        <p className='who__ami-text text'>
          Приветствую на своей страничке! Я занимаюсь версткой сайтов, живу в
          Москве. Постоянно развиваюсь и осваиваю новые технологии.
        </p>
      </div>
    </div>
  )
}
