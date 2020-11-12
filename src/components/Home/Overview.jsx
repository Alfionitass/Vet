import React from 'react';
import Cat from '../../assets/Cat.svg';
import Vector3 from '../../assets/Vector 3.svg';
import Vector4 from '../../assets/Vector 4.svg';

import classes from './Home.module.css';

export default function Overview() {
    return (
        <div className='container-fluid'>
             <div className="row" style={{ width: '80%', margin: '3em auto', textAlign:'left' }} >
                    <div className="col-md-6 col-xs-12" style={{ position: 'relative' }}>
                        <div className={classes.blue}><img class="img-fluid" src={Vector3} alt="" /></div>
                        <div className={classes.yellow}> <img class="img-fluid" src={Vector4} alt="" /></div>
                        <div className={classes.cat}> <img class="img-fluid" src={Cat} alt="" /></div>
                    </div>
                    <div className="col-md-6 col-xs-12" style={{ marginTop: '5em' }}>
                        <h4>Why Choose Us?</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit qui velit, vero, ullam soluta, et obcaecati aliquam culpa necessitatibus nemo animi quis ab sapiente nesciunt ducimus? Explicabo dignissimos enim aspernatur.</p>

                    </div>
                </div>
        </div>
    )
}
