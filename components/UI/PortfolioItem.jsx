import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import classes from '../../styles/portfolio-item.module.css';

const PortfolioItem = (props) => {
    const { title, img, liveUrl, keyword } = props.item
  return (
    <div className={`${classes.portfolio__item}`}>
        <div className='bg-transparent'>
            <h6>{title}</h6>
            {
                keyword.map((item,index) => (
                    <span className={`${classes.portfolio__keyword}`} key={index}>{item}</span>
                ))
            }
        </div>

        <div className={`${classes.portfolio__img}`}>
            <Image src={img} alt='portfolio-img' width='380' height='250' />
        </div>
        
        <div className={`${classes.portfolio__live} bg-transparent`}>
            <button className='primary__btn'>
                <Link href={liveUrl} target='_blank'>Launch</Link>
            </button>
        </div>
    </div>
  )
}

export default PortfolioItem